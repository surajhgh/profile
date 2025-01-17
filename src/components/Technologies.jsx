import React from 'react';

// Import logo images (replace these with actual paths or URLs)
import jQueryLogo from './img/jquery.png';
import WordPressLogo from './img/wordpress.png';
import LessLogo from './img/less.png';
import SassLogo from './img/sass.png';
import SpotifyLogo from './img/spotify.png';

const Technologies = () => {
  const logos = [
    { src: jQueryLogo, alt: 'jQuery' },
    { src: WordPressLogo, alt: 'WordPress' },
    { src: LessLogo, alt: 'Less' },
    { src: SassLogo, alt: 'Sass' },
    { src: SpotifyLogo, alt: 'Spotify' },
  ];

  return (
    <section className="py-8 bg-gray-50 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-36">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-20 opacity-50 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
