import React from 'react';
import { motion } from 'framer-motion';
import { Gift, PenLine, Sparkles } from 'lucide-react';
import { Step } from './Step';
import { SnowflakeDivider } from './SnowflakeDivider';

const steps = [
  {
    icon: Gift,
    title: 'Choose Your Experience',
    description: 'Select a Santa Call, Letter, Video, or Bundle.',
  },
  {
    icon: PenLine,
    title: 'Book and Personalize',
    description: 'Fill out your details and customize your experience.',
  },
  {
    icon: Sparkles,
    title: 'Experience the Magic',
    description: "Receive your letter, call, or video and make your child's day unforgettable!",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <SnowflakeDivider className="absolute top-0" />
      
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-christmas text-glow">
            Making Christmas Magical in 3 Easy Steps!
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            We've made it simple to bring Santa's magic into your home
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Step
              key={index}
              step={index + 1}
              {...step}
            />
          ))}
        </div>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r 
                     from-green-500 to-green-600 text-white text-xl font-bold rounded-full 
                     shadow-lg shadow-green-500/50 hover:shadow-green-500/70 
                     transition-all duration-300 font-christmas"
          >
            <Sparkles className="w-6 h-6" />
            Start Your Santa Experience Now!
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-white/80 italic text-sm"
          >
            "This was the easiest way to bring Santa into our home!" – Sarah, Mom of 3
          </motion.div>
        </div>
      </div>

      <SnowflakeDivider className="absolute bottom-0 rotate-180" />
    </section>
  );
}