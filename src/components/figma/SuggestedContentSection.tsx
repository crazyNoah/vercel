import React from 'react';
import Image from 'next/image';

const cards = [
  {
    image: 'https://via.placeholder.com/120x80',
    description: 'Puts learning into the hands of the student and empowers teachers to support them on their personal learning journey.',
    action: 'Read more',
  },
  {
    image: 'https://via.placeholder.com/120x80',
    description: 'Puts learning into the hands of the student and empowers teachers to support them on their personal learning journey.',
    action: 'Read more',
  },
  {
    image: 'https://via.placeholder.com/120x80',
    description: 'Puts learning into the hands of the student and empowers teachers to support them on their personal learning journey.',
    action: 'Read more',
  },
];

export default function SuggestedContentSection() {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-[#2D3748]">And we also thought you might be interested in these:</h2>
        <a href="#" className="text-[#4A90E2] font-medium hover:underline">Explore more</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-4 flex flex-col">
            <Image src={c.image} alt="content" className="rounded mb-3 w-full h-32 object-cover" width={120} height={80} />
            <p className="text-[#718096] text-sm flex-1">{c.description}</p>
            <a href="#" className="mt-3 text-[#4A90E2] font-medium hover:underline">{c.action}</a>
          </div>
        ))}
      </div>
    </section>
  );
} 