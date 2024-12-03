import React from 'react';
import { motion } from 'framer-motion';

interface SantaPeekProps {
  position: 'top';
}

export function SantaPeek({ position }: SantaPeekProps) {
  const baseStyles = {
    width: '76px', // Reduced by 25% from 102px
    height: '76px', // Reduced by 25% from 102px
    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/santa-calls-ffa98.firebasestorage.app/o/Santa%20UGC%20Vids%2FUntitled%20design%20(3).png?alt=media&token=ee9140d4-86fd-462b-81c2-d1f4884abeff")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute' as const,
    zIndex: -1,
    top: '-54px', // Adjusted for smaller size (reduced by 25% from -72px)
    left: '50%',
    transform: 'translateX(-50%)',
    clipPath: 'inset(0 0 15% 0)',
    filter: 'drop-shadow(0 3px 5px rgba(0, 0, 0, 0.2))',
  };

  const peekAnimation = {
    initial: { opacity: 0, y: -15 }, // Reduced animation distance for smaller size
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const waveAnimation = {
    animate: {
      rotate: [-2.5, 2.5], // Reduced rotation for smaller size
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={peekAnimation}
      style={baseStyles}
    >
      <motion.div
        className="w-full h-full"
        animate="animate"
        variants={waveAnimation}
      />
    </motion.div>
  );
}
