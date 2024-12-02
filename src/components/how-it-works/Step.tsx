import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  step: number;
}

export function Step({ icon: Icon, title, description, step }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: step * 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="relative bg-white/10 backdrop-blur-md p-6 rounded-xl border-2 
                border-red-500/30 hover:border-red-500 transition-all duration-300
                flex flex-col items-center text-center group"
    >
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r 
                    from-red-500 to-green-500 w-8 h-8 rounded-full flex items-center 
                    justify-center text-white font-bold shadow-lg shadow-red-500/30">
        {step}
      </div>

      <div className="mb-4 p-4 rounded-full bg-red-500/20 group-hover:bg-red-500/30 
                    transition-colors duration-300">
        <Icon className="w-8 h-8 text-red-500" />
      </div>

      <h3 className="text-xl font-bold text-white mb-2 font-christmas">{title}</h3>
      <p className="text-white/80">{description}</p>
    </motion.div>
  );
}