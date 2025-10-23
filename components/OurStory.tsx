import React from 'react';

interface OurStoryProps {
  onBackToShopClick: () => void;
}

const OurStory: React.FC<OurStoryProps> = ({ onBackToShopClick }) => {
  return (
    <section className="bg-off-white-pink min-h-screen flex items-center justify-center py-28 md:py-40">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="opacity-0 animate-fade-in-up">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-10">
            <span className="bg-gradient-to-r from-primary-pink via-light-pink to-lighter-pink bg-clip-text text-transparent">
              Our Story
            </span>
          </h2>
          <div className="text-left font-body text-lg text-text-dark/80 space-y-6 leading-relaxed bg-white/50 p-8 rounded-2xl shadow-lg">
            <p>
              In a hidden meadow, bathed in the soft glow of twilight where moonbeams danced and wildflowers whispered secrets, the idea for BunnyBlush was born. It began not in a lab, but from a dream—a dream of skincare that felt less like a routine and more like a magical ritual.
            </p>
            <p>
              Our founder, Dhara, was inspired by the gentle, rosy hue of a bunny's cheek, blushing in the first light of dawn. It was a symbol of pure, natural beauty and effortless grace. She wondered, "What if we could capture that ethereal essence in a bottle? What if we could create potions that didn't just treat the skin, but also enchanted the soul?"
            </p>
            <p>
              And so, the journey began. We foraged for the most whimsical ingredients: dew collected from peony petals, crushed moonstones for radiance, and marshmallow root for a cloud-like softness. Every formula is a love letter to nature, crafted with intention and a touch of everyday magic.
            </p>
            <p>
              BunnyBlush is more than just skincare. It's an invitation to embrace your inner magic, to celebrate your unique glow, and to find a moment of peace and wonder in your day. We believe in gentle potions, dreamy textures, and a beauty that radiates from a happy heart.
            </p>
          </div>
          <button 
            onClick={onBackToShopClick} 
            className="mt-12 bg-primary-pink text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-light-pink shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Explore the Magic
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
