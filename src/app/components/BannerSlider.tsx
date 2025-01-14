'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  {
    src: './banner1.png',

  },
  {
    src: './banner1.png',

  },
  {
    src: './banner1.png',

  },
];

const headings = ['Heading 1', 'Heading 2', 'Heading 3'];

export default function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${images.length * 34}%` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <Image
              src={image.src}
              alt={`Slide ${index + 1}`}
              width={1024}
              height={400}
              className=""
              priority
              style={{width: '100%', height: '100%'}}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          className="bg-gray-800 bg-opacity-50 text-white p-2 font-bold rounded-full focus:outline-none"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className="bg-gray-800 bg-opacity-50 text-white p-2 font-bold rounded-full focus:outline-none"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>

      {/* Headings and Descriptions */}
      <div className="absolute inset-0 flex justify-between">
        <div className="w-1/3 p-4 sm:-mt-4 md:-mt-4 xs:-mt-2 lg:mt-44 lg:ml-24">
          <p className="text-white lg:text-4xl kanit-black drop-shadow-lg">
            Elevate Your
          </p>
          <p className="text-white lg:text-4xl  kanit-black drop-shadow-lg lg:-mt-3 -mt-2">
            Spaces With
          </p>
          <p className="text-white lg:text-4xl  kanit-black drop-shadow-lg lg:-mt-3 -mt-2">
            Style
          </p>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center">
          {headings.map((heading, index) => (
            <div
              key={index}
              className={`text-white text-2xl mb-4 transition-opacity duration-500 absolute ${
                currentIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {heading}
            </div>
          ))}
        </div>
        <div className="w-1/3 p-4">
          <p className="text-white text-lg">
          </p>
        </div>
      </div>
    </div>
  );
}
