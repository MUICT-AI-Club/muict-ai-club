import Image from 'next/image';
import { useState, useEffect } from 'react';
import '@/styles/components.css';

const images = ['/img/2025-03-12-Talk.jpg', '/img/2024-10-20-Hackathon.jpg', '/img/2024-09-11-Workshop.jpg'];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleClick = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="slider-section">
      <div className="slider-image-wrapper fade-slide">
        <Image
          key={images[current]}
          src={images[current]}
          alt="slide"
          width={700}
          height={500}
          className="slider-image"
        />
        <div className="slider-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="slider-text">
        <h1 className="club-title">MUICT AI Club</h1>
        <p className="club-subtitle">Sharing inspiration and technology updates.</p>
        <a href="/news" className="slider-button">Explore more</a>
    </div>
    </div>
  );
}