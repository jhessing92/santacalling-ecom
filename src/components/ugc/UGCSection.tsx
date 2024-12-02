import React from 'react';
import { motion } from 'framer-motion';
import { VideoCarousel } from './VideoCarousel';
import { SocialProofBanner } from './SocialProofBanner';
import { SnowflakeDivider } from '../how-it-works/SnowflakeDivider';

const videos = [
  {
    id: '1',
    url: "https://firebasestorage.googleapis.com/v0/b/santa-calls-ffa98.firebasestorage.app/o/Santa%20UGC%20Vids%2F4.mov?alt=media&token=0607054d-6679-4c07-a898-808036290c9b",
    username: '@HappyMom23',
    reactions: { hearts: 423, likes: '1.2k' },
    product: 'santa-call',
    caption: 'Best Santa call ever! The kids were speechless! 🎅✨ #SantaMagic',
  },
  {
    id: '2',
    url: "https://firebasestorage.googleapis.com/v0/b/santa-calls-ffa98.firebasestorage.app/o/Santa%20UGC%20Vids%2FScreenRecording_12-01-2024%2023-54-34_1.mov?alt=media&token=72c3ef9d-05fe-49e4-a270-9922b72de877",
    username: '@ChristmasDad',
    reactions: { hearts: 892, likes: '2.4k' },
    product: 'santa-letter',
    caption: 'The letter from Santa made their morning magical! 📬🎄 #SantaLetter',
  },
  {
    id: '3',
    url: "https://firebasestorage.googleapis.com/v0/b/santa-calls-ffa98.firebasestorage.app/o/Santa%20UGC%20Vids%2FScreenRecording_12-01-2024%2023-54-59_1.mov?alt=media&token=3936c21e-90d2-49be-bba8-adc6c7ef1c59",
    username: '@MagicalMoments',
    reactions: { hearts: 756, likes: '1.8k' },
    product: 'santa-video',
    caption: 'Their faces when they got a personalized video from Santa! 🎥🎁 #SantaVideo',
  },
  {
    id: '4',
    url: "https://firebasestorage.googleapis.com/v0/b/santa-calls-ffa98.firebasestorage.app/o/Santa%20UGC%20Vids%2FScreenRecording_12-01-2024%2023-55-25_1.MP4?alt=media&token=27d8902b-11e9-4768-bd07-617974e0d60f",
    username: '@FestiveFamily',
    reactions: { hearts: 634, likes: '1.5k' },
    product: 'santa-bundle',
    caption: 'The complete Santa experience was worth every penny! ⭐️ #SantaBundle',
  },
  {
    id: '5',
    url: "https://firebasestorage.googleapis.com/v0/b/santa-calls-ffa98.firebasestorage.app/o/Santa%20UGC%20Vids%2F5.mov?alt=media&token=5413edab-f34b-4622-a039-e1f90f137c83",
    username: '@JoyfulKids',
    reactions: { hearts: 521, likes: '1.3k' },
    product: 'santa-call',
    caption: 'Another magical call with Santa! 🎅📞 #SantaMagic',
  },
];

export function UGCSection() {
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
            See the Magic in Action!
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Real families. Real smiles. See why parents love Calling Santa!
          </p>
        </motion.div>

        <VideoCarousel videos={videos} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-white/80"
        >
          <p className="text-lg font-christmas">
            Want to see your family featured here? Share your Santa experience on TikTok with #SantaMagic!
          </p>
        </motion.div>
      </div>

      <SocialProofBanner />
      <SnowflakeDivider className="absolute bottom-0 rotate-180" />
    </section>
  );
}