import React from 'react';

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

export function Testimonial({ name, role, image, content, rating }: TestimonialProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border-2 border-red-500/30 
                    hover:border-red-500/50 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold text-white">{name}</h3>
          <p className="text-white/70 text-sm">{role}</p>
        </div>
      </div>
      <div className="mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-500">★</span>
        ))}
      </div>
      <p className="text-white/90 italic">{content}</p>
    </div>
  );
}