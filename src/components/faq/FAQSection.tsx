import React from 'react';
import { motion } from 'framer-motion';
import { FAQItem } from './FAQItem';

const faqs = [
  {
    question: "What if my child misses the call?",
    answer: "Don't worry! We'll reschedule your call at no additional cost. We understand that sometimes things come up, and we want to ensure every child gets their special moment with Santa."
  },
  {
    question: "How personalized are the Santa letters?",
    answer: "Each letter is uniquely crafted based on your child's name, interests, and special moments from the year. We include specific details you provide to make the experience truly magical and personal."
  },
  {
    question: "What is the refund policy?",
    answer: "We offer a 100% satisfaction guarantee. If you're not completely happy with your Santa experience, we'll provide a full refund within 24 hours of the service."
  },
  {
    question: "How long are the Santa video calls?",
    answer: "Santa calls typically last 5-10 minutes, giving your child plenty of time to share their Christmas wishes and have a magical conversation with Santa."
  },
  {
    question: "When will we receive our personalized letter?",
    answer: "Letters from Santa are typically delivered within 3-5 business days via priority mail, ensuring they arrive fresh from the North Pole!"
  },
  {
    question: "Is the video call recorded?",
    answer: "Yes! You'll receive a recording of your child's magical moment with Santa that you can treasure forever and share with family."
  }
];

export function FAQSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-christmas text-glow">
            Frequently Asked Questions
          </h2>
          <p className="text-white/90 text-lg">
            Everything you need to know about your magical Santa experience
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}