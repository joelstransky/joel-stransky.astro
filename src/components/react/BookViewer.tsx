import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BookViewerProps {
  pages: { src: string; alt?: string }[];
  pageAspectRatio?: number; // Width / Height of a single page. Defaults to 1 (Square).
}

interface LeafData {
  index: number;
  front: { src: string; alt?: string };
  back?: { src: string; alt?: string };
}

export const BookViewer: React.FC<BookViewerProps> = ({ pages, pageAspectRatio = 1 }) => {
  // Current "Leaf" index. 
  // -1: Book closed (Cover visible). 
  // 0: First spread open (Cover Back + Page 3).
  // Wait, let's stick to a simpler index:
  // 0 = Cover closed.
  // 1 = Cover open (Leaf 0 turned).
  // N = Leaf N-1 turned.
  const [currentLeafIndex, setCurrentLeafIndex] = useState(0);
  const [animatingLeaf, setAnimatingLeaf] = useState<number | null>(null);

  // Group pages into Leaves
  const leaves = useMemo(() => {
    const _leaves: LeafData[] = [];
    // Page 0 is Front Cover (Leaf 0 Front)
    // Page 1 is Inside Front Cover (Leaf 0 Back)
    // Page 2 is Right Page 1 (Leaf 1 Front)
    // Page 3 is Left Page 2 (Leaf 1 Back)
    // ...
    for (let i = 0; i < pages.length; i += 2) {
      _leaves.push({
        index: i / 2,
        front: pages[i],
        back: pages[i + 1] // Might be undefined if odd number of pages
      });
    }
    return _leaves;
  }, [pages]);

  const totalLeaves = leaves.length;

  const handleNext = () => {
    if (currentLeafIndex < totalLeaves) {
      setAnimatingLeaf(currentLeafIndex);
      setCurrentLeafIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentLeafIndex > 0) {
      setAnimatingLeaf(currentLeafIndex - 1);
      setCurrentLeafIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentLeafIndex, totalLeaves]);

  // Calculate Scale for responsiveness
  // Board books are roughly square or 4:3. 
  // We'll use a fixed container aspect ratio and scale it.
  
  return (
    <div className="relative w-full h-screen bg-zinc-900 flex flex-col items-center justify-center overflow-hidden select-none perspective-container">
      <style>{`
        .perspective-container {
          perspective: 1500px;
        }
      `}</style>

      {/* Book Container */}
      {/* A wrapper to handle scaling on small screens */}
      <div 
        className="relative w-full max-w-[90vw] max-h-[80vh] flex items-center justify-center"
        style={{ aspectRatio: `${pageAspectRatio * 2} / 1` }}
      >
        <div className="relative w-full h-full preserve-3d">
          
          {leaves.map((leaf, i) => {
            // Determine Z-Index
            // If animating, it must be on top (100).
            // If Left (turned): Stack upwards (0, 1, 2...).
            // If Right (not turned): Stack downwards (10, 9, 8...).
            const isTurned = i < currentLeafIndex;
            const isAnimating = i === animatingLeaf;
            
            let zIndex = 0;
            if (isAnimating) {
              zIndex = 1000;
            } else if (isTurned) {
              zIndex = i;
            } else {
              zIndex = totalLeaves - i;
            }

            return (
              <motion.div
                key={i}
                className="absolute top-0 left-[50%] w-[50%] h-full origin-left"
                initial={false}
                animate={{ rotateY: isTurned ? -180 : 0 }}
                transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1.000] }} // Cubic bezier for natural feel
                onAnimationStart={() => setAnimatingLeaf(i)}
                onAnimationComplete={() => setAnimatingLeaf(null)}
                style={{ 
                  zIndex,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Front Face */}
                <div 
                  className="w-fit absolute inset-0 bg-white shadow-inner backface-hidden flex items-center justify-center overflow-hidden border-r border-zinc-200"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img 
                    src={leaf.front.src} 
                    alt={leaf.front.alt} 
                    className="w-full h-full object-contain pointer-events-none"
                  />
                  {/* Shadow overlay for depth */}
                   <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-20 pointer-events-none mix-blend-multiply" />
                </div>

                {/* Back Face */}
                <div 
                  className="w-fit absolute inset-0 bg-white shadow-inner backface-hidden flex items-center justify-center overflow-hidden border-l border-zinc-200"
                  style={{ 
                    backfaceVisibility: 'hidden', 
                    transform: 'rotateY(180deg)' 
                  }}
                >
                  {leaf.back ? (
                    <img 
                      src={leaf.back.src} 
                      alt={leaf.back.alt} 
                      className="w-full h-full object-contain pointer-events-none"
                    />
                  ) : (
                    <div className="w-full h-full bg-white" />
                  )}
                  {/* Shadow overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent opacity-20 pointer-events-none mix-blend-multiply" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-[15px] flex gap-8 z-50">
         <button 
            onClick={handlePrev}
            disabled={currentLeafIndex === 0}
            className="p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed"
         >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
         </button>
         
         <span className="flex items-center text-white/80 font-mono text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
            {/* Showing page numbers is tricky with spreads. Just show Leaf index? */}
             Spread {currentLeafIndex} / {totalLeaves}
         </span>

         <button 
            onClick={handleNext}
            disabled={currentLeafIndex === totalLeaves}
            className="p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed"
         >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
         </button>
      </div>

      {/* Click Zones */}
      <div className="absolute inset-y-0 left-0 w-1/4 z-40 cursor-pointer" onClick={handlePrev} />
      <div className="absolute inset-y-0 right-0 w-1/4 z-40 cursor-pointer" onClick={handleNext} />

    </div>
  );
};
