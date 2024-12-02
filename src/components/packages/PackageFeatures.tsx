import React from 'react';
import { motion } from 'framer-motion';

interface PackageFeaturesProps {
  features: string[];
}

export function PackageFeatures({ features }: PackageFeaturesProps) {
  return (
    <motion.ul 
      className="space-y-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      {features.map((feature, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-white flex items-center gap-2 text-sm font-medium"
        >
          <span>{feature}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}