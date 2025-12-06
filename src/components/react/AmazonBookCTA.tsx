import React from 'react';
import buyOnAmazon from '../../assets/buy-on-amazon.png';

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
            <a href="https://a.co/d/9R6LUu5" target="_blank" className="h-[50px] block">
              <img src={buyOnAmazon.src} title="Buy On Amazon" className="h-full object-contain" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
