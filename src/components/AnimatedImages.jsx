import React from 'react';
import { motion } from 'framer-motion';

const AnimatedImages = () => {
  const images = [
    { src: "/header/trim.png", className: "bottom-3 rotate-12" },
    { src: "/header/camera.png", className: "left-72 -rotate-12 bottom-40" },
    { src: "/header/video-camera.png", className: "right-72 rotate-12 bottom-40" },
    { src: "/header/writing.png", className: "bottom-3 right-0 -rotate-12" }
  ];

  return (
    <div className="relative">
      {images.map((image, index) => (
        <motion.img
          key={index}
          className={`absolute w-20 ${image.className}`}
          src={image.src}
          alt=""
          initial={{ y: '100%', opacity: 0, rotate: 0 }}
          animate={{ y: 0, opacity: 1, rotate: image.className.includes('-rotate') ? -12 : 12 }}
          transition={{ 
            duration: 0.8, 
            delay: index * 0.2, 
            type: 'spring', 
            stiffness: 120 
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedImages;