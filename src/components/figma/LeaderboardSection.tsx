import React from 'react';

export default function LeaderboardSection() {
  return (
    <section className="mb-8">
      <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <span className="text-[#2D3748] text-lg">You are currently <span className="font-bold text-[#4A90E2]">8th</span> on the leaderboard with <span className="font-bold text-[#4A90E2]">N</span>XP.</span>
          <span className="ml-0 md:ml-4 flex items-center text-[#718096] text-2xl font-bold">
            8
            <svg className="ml-1" width="20" height="20" fill="none" stroke="#718096" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5"/></svg>
          </span>
        </div>
        <a href="#" className="mt-4 md:mt-0 text-[#4A90E2] font-medium hover:underline">Leaderboard</a>
      </div>
    </section>
  );
} 