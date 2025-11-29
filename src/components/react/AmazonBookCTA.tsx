import React from 'react';

interface AmazonBookCTAProps {
  link: string;
  coverImage: string;
}

export const AmazonBookCTA: React.FC<AmazonBookCTAProps> = ({ link, coverImage }) => {
  return (
    <section className="relative w-full max-w-3xl mx-auto my-16 px-4">
      <div className="bg-white rounded-sm border border-zinc-200 overflow-hidden flex flex-col sm:flex-row items-center">
        
        {/* Image Section */}
        <div className="w-full sm:w-48 h-48 sm:h-auto bg-zinc-50 flex items-center justify-center p-6 border-b sm:border-b-0 sm:border-r border-zinc-200 shrink-0">
           <div className="relative w-24 aspect-[1/1] shadow-md">
              <img 
                src={coverImage} 
                alt="Quiet Piggy Book Cover" 
                className="absolute inset-0 w-full h-full object-cover"
              />
           </div>
        </div>

        {/* Content Section */}
        <div className="w-full p-8 flex flex-col justify-center text-left">
          <h3 className="text-xl font-bold text-zinc-900 mb-2 font-serif">
            Quiet Piggy
          </h3>
          <p className="text-zinc-800 text-base mb-4 leading-relaxed">
            Peggy is a pig who refuses to take things at face value. Her unyielding desire to understand how things truly work teaches her town a timeless lesson about the dangers of rushing toward convenient solutions—and the power of speaking your mind.
          </p>
          <p className="text-zinc-500 text-xs mb-6">
            Hardcopies of the book are available for purchase on Amazon.
          </p>
          
          <div>
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black hover:bg-zinc-800 text-white px-4 py-2 rounded-[4px] transition-colors gap-3"
              aria-label="Available at Amazon"
            >
              {/* Amazon Logo Icon (Simplified SVG) */}
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" role="img" aria-hidden="true">
                 <path d="M13.127 14.826c-1.954.976-3.747 1.126-4.967.347-.784-.5-1.083-1.344-.893-2.507.253-1.55 1.569-2.766 3.675-3.033 1.695-.215 3.266.203 3.266.203v1.344s-1.352-.558-2.706-.411c-1.138.123-1.703.638-1.851 1.327-.135.63.068 1.08.655 1.065 1.015-.027 2.286-.938 2.821-1.662l.001.001.001 1.324zm3.488-7.715c0-1.67-1.328-2.044-3.006-1.91-2.713.217-4.769 1.47-5.663 2.247l.824 1.372c.595-.48 2.273-1.628 4.275-1.856 1.068-.122 1.576.19 1.576.979v.492c-.716-.195-3.024-.637-4.848.535-1.512.971-1.863 2.564-1.222 3.993.652 1.455 2.148 2.082 3.885 1.645 1.292-.325 2.264-1.168 2.264-1.168l.093 1.06h2.239v-7.391h-1.418v.001zm-9.869 10.203c1.25 1.104 4.154 1.159 5.785.382l.425 1.304c-1.621 1.133-5.369 1.138-7.182-.793-1.357-1.446-.571-2.602.572-3.726l1.517 1.392c-.45.427-.848.762-1.117 1.441zm12.109-2.72l-1.365-1.646c-.254-.289-.136-.424.229-.563 1.855-.705 2.855-1.273 2.855-1.273s-.857 1.932-1.719 3.482z" />
              </svg>
              <div className="flex flex-col leading-none">
                 <span className="text-[10px] font-normal opacity-90">Available at</span>
                 <span className="text-sm font-bold tracking-wide">Amazon</span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
