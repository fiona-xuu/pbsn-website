import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import pbsnlogo from '../assets/pbsn-logo.png';
import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg2.png';
import bg3 from '../assets/bg3.png';

const backgrounds = [bg1, bg2, bg3];

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to start the interval
  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line
  }, []);

  // When bgIndex changes (either by arrow or auto), restart the timer
  useEffect(() => {
    startInterval();
    // eslint-disable-next-line
  }, [bgIndex]);

  const prevImage = () => {
    setBgIndex((prev) => (prev - 1 + backgrounds.length) % backgrounds.length);
  };

  const nextImage = () => {
    setBgIndex((prev) => (prev + 1) % backgrounds.length);
  };

  return (
    <section className="relative h-screen flex items-center justify-start">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center mx-5 mt-6 mb-3 rounded-t-[5rem] rounded-b-2xl overflow-hidden transition-all duration-700"
        style={{
          backgroundImage: `url(${backgrounds[bgIndex]})`
        }}
      >
        <div className="absolute inset-0 bg-gray-900/40"></div>
        {/* Left Arrow */}
        <button
          onClick={prevImage}
          className="absolute left-10 top-1/2 -translate-y-1/2 z-20 bg-white/40 hover:bg-white/70 rounded-full p-2 transition"
          aria-label="Previous Image"
        >
          <ChevronLeft className="h-6 w-6 text-gray-800" />
        </button>
        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="absolute right-10 top-1/2 -translate-y-1/2 z-20 bg-white/40 hover:bg-white/70 rounded-full p-2 transition"
          aria-label="Next Image"
        >
          <ChevronRight className="h-6 w-6 text-gray-800" />
        </button>
        {/* Dots indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
          {backgrounds.map((_, idx) => (
            <span
              key={idx}
              className={`block rounded-full transition-all duration-300 ${bgIndex === idx
                ? 'w-2 h-2 bg-white shadow-lg'
                : 'w-2 h-2 bg-white/50'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-20 pl-20">
        <div className="max-w-2xl">
          {/* Logo */}
          <div className="mb-8">
            <img src={pbsnlogo} alt="PBSN Logo" className="h-16 w-auto" />
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-gray-200 text-2xl font-light tracking-wide">
              Welcome to
            </p>
            <h1 className="text-white text-6xl lg:text-7xl font-bold leading-tight">
              The<br />
              Pre-Business<br />
              Students'<br />
              Network
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
