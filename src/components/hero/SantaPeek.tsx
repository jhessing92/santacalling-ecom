import React from 'react';
import { motion } from 'framer-motion';

interface SantaPeekProps {
  position: 'top';
}

export function SantaPeek({ position }: SantaPeekProps) {
  const baseStyles = {
    width: '82px',
    height: '82px',
    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/santa-calls-ffa98.firebasestorage.app/o/Santa%20UGC%20Vids%2FUntitled%20design%20(3).png?alt=media&token=ee9140d4-86fd-462b-81c2-d1f4884abeff")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute' as const,
    zIndex: -1,
    top: '-58px',
    left: '50%',
    transform: 'translateX(-50%)',
    clipPath: 'inset(0 0 15% 0)',
    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: 1,
        y: 0,
        rotate: [-3, 3],
      }}
      transition={{
        opacity: { duration: 0.3 },
        y: { type: "spring", stiffness: 300, damping: 20 },
        rotate: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
          ease: "easeInOut"
        }
      }}
      style={baseStyles}
    />
  );
}
