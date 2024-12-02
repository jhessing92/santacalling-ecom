import React from 'react';
import { Testimonial } from './Testimonial';

const testimonials = [
  {
    name: 'Emily',
    role: 'Mom of 2',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
    content: 'My kids absolutely loved their call with Santa! The joy on their faces was priceless.',
    rating: 5
  },
  {
    name: 'Michael',
    role: 'Dad of 3',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100',
    content: 'The personalized letter from Santa made this Christmas extra special. Highly recommend!',
    rating: 5
  },
  {
    name: 'Sarah',
    role: 'Mom of 1',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=100&h=100',
    content: 'The video message was magical! My daughter watches it every day.',
    rating: 5
  }
];

export function TestimonialSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12 font-christmas text-glow">
          Magical Moments from Happy Families
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}