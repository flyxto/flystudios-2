import React from 'react';
import { motion } from 'framer-motion';

const AnimatedImages = () => {
  const images = [
    { src: "/header/trim.png", class: "lg:bottom-3 left-12 lg:left-0 lg:rotate-12 sm:hidden lg:block" },
    { src: "/header/camera.png", class: "lg:left-72 left-80 -rotate-12 lg:bottom-40 bottom-24 sm:hidden lg:block" },
    { src: "/header/video-camera.png", class: "lg:right-72 rotate-12 lg:bottom-40 bottom-24 right-80 sm:hidden lg:block" },
    { src: "/header/writing.png", class: "lg:bottom-3 lg:right-0 right-12 lg:-rotate-12 sm:hidden lg:block" }
  ];

  return (
    <div class="relative">
      {images.map((image, index) => (
        <motion.img
          key={index}
          class={`absolute w-14 sm:w-20 ${image.class}`}
          src={image.src}
          alt=""
          initial={{ y: '100%', opacity: 0, rotate: 0 }}
          animate={{ y: 0, opacity: 1, rotate: image.class.includes('-rotate') ? -12 : 12 }}
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