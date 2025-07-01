import React from 'react';

const metrics = [
  { title: 'Characters', value: '449' },
  { title: 'Words', value: '362' },
  { title: 'Sentences', value: '571', subValue: '+11' },
  { title: 'Language Points', value: '0' },
  { title: 'Texts', value: '335' },
];

export default function KeyMetricsSection() {
  return (
    <section className="mb-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {metrics.map((m) => (
          <div key={m.title} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-2xl font-bold text-[#2D3748]">{m.value}</span>
            <span className="text-[#718096] text-sm font-medium">{m.title}</span>
            {m.subValue && <span className="text-xs text-green-500 font-semibold mt-1">{m.subValue}</span>}
          </div>
        ))}
      </div>
    </section>
  );
} 