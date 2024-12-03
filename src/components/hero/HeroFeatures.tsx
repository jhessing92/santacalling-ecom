import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Gift, Star, Clock } from 'lucide-react';
import { SantaPeek } from './SantaPeek';

export function HeroFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Fully monitored calls for your peace of mind",
      color: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-500",
      delay: 0.1
    },
    {
      icon: Gift,
      title: "Personalized Experience",
      description: "Santa knows your child's name and interests",
      color: "from-red-500/20 to-red-600/20",
      iconColor: "text-red-500",
      delay: 0.2
    },
    {
      icon: Star,
      title: "5-Star Reviews",
      description: "Trusted by thousands of families",
      color: "from-yellow-500/20 to-yellow-600/20",
      iconColor: "text-yellow-500",
      delay: 0.3
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose a time that works for you",
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-500",
      delay: 0.4
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: feature.delay }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          className={`relative group rounded-xl p-6 sm:p-8 bg-gradient-to-br ${feature.color}
                     backdrop-blur-lg border border-white/10 hover:border-white/20 
                     transition-all duration-300 overflow-visible transform hover:-translate-y-1`}
        >
          {hoveredIndex === index && <SantaPeek position="top" />}

          <div className="relative">
            <div className={`inline-flex p-3 sm:p-4 rounded-full bg-white/10 mb-4 sm:mb-6
                          group-hover:scale-110 transition-transform duration-300`}>
              <feature.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${feature.iconColor}`} />
            </div>
            
            <h3 className="text-white font-bold mb-2 sm:mb-3 font-christmas text-xl sm:text-2xl">
              {feature.title}
            </h3>
            
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}