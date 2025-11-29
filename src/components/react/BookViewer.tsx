import React, { useState, useEffect } from 'react';

interface BookViewerProps {
  pages: { src: string; alt?: string }[];
}

export const BookViewer: React.FC<BookViewerProps> = ({ pages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < pages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === 'ArrowRight') {
             if (currentIndex < pages.length - 1) setCurrentIndex(curr => curr + 1);
          }
          if (e.key === 'ArrowLeft') {
             if (currentIndex > 0) setCurrentIndex(curr => curr - 1);
          }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, pages.length]);

  return (
    <div className="relative w-full h-screen bg-zinc-900 flex flex-col items-center justify-center overflow-hidden select-none">
      
      {/* Image Container */}
      <div className="relative w-full h-full max-w-[1920px] flex items-center justify-center p-4 md:p-8">
        {pages.map((page, index) => (
             <img
                key={index}
                src={page.src}
                alt={page.alt || `Page ${index + 1}`}
                className={`absolute transition-all duration-500 ease-in-out object-contain max-h-full max-w-full shadow-2xl
                    ${index === currentIndex ? 'opacity-100 z-10 scale-100 blur-0' : 'opacity-0 z-0 scale-95 blur-sm'}
                `}
                style={{
                     transform: index === currentIndex ? 'translateX(0)' : index < currentIndex ? 'translateX(-20px) scale(0.95)' : 'translateX(20px) scale(0.95)'
                }}
             />
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 z-20 pointer-events-none">
         <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`pointer-events-auto p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed`}
            aria-label="Previous page"
         >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
         </button>
         
         <span className="flex items-center text-white/80 font-mono text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
            {currentIndex + 1} / {pages.length}
         </span>

         <button 
            onClick={handleNext}
            disabled={currentIndex === pages.length - 1}
            className={`pointer-events-auto p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed`}
             aria-label="Next page"
         >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
         </button>
      </div>
      
      {/* Touch Zones (invisible) */}
      <div className="absolute inset-y-0 left-0 w-1/5 z-10 cursor-pointer" onClick={handlePrev} title="Previous"></div>
      <div className="absolute inset-y-0 right-0 w-1/5 z-10 cursor-pointer" onClick={handleNext} title="Next"></div>

    </div>
  );
};
