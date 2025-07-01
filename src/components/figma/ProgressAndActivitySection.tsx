import React from 'react';

export default function ProgressAndActivitySection() {
  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Progress Card */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
          <div className="text-[#2D3748] font-semibold mb-2">So far you&apos;ve acquired <span className="text-[#4A90E2] font-bold">2000</span> words and unlocked <span className="text-[#4A90E2] font-bold">80%</span> of Chinese with us.</div>
          <div className="w-full bg-[#E2E8F0] rounded-full h-3 mb-4">
            <div className="bg-[#4A90E2] h-3 rounded-full" style={{ width: '80%' }}></div>
          </div>
          <button className="mt-auto px-4 py-2 bg-[#4A90E2] text-white rounded font-medium flex items-center w-max hover:bg-[#357ABD] transition">
            Growth
            <svg className="ml-2" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
        </div>
        {/* Investment Chart Card */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
          <div className="text-[#2D3748] font-semibold mb-2">You&apos;ve invested <span className="text-[#4A90E2] font-bold">N/N</span> minutes today. <span className="text-[#F56565]">There&apos;s still time!</span></div>
          {/* Mock line chart */}
          <div className="h-24 w-full flex items-end space-x-1 mb-2">
            {[40, 60, 30, 80, 50, 70, 60].map((h, i) => (
              <div key={i} className="bg-[#4A90E2] w-4 rounded-t" style={{ height: `${h}%` }}></div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-[#718096] mb-2">
            {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => <span key={d}>{d}</span>)}
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-[#4A90E2]">82min</span>
            <span className="text-[#718096]">Daily goals</span>
          </div>
        </div>
        {/* Recent Activity Card */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
          <div className="text-[#2D3748] font-semibold mb-2">Last time you got to <span className="text-[#4A90E2]">[Range] &gt; [Mountain] &gt; [Section] &gt; [Series Item]</span>.</div>
          <button className="mt-2 px-4 py-2 bg-[#4A90E2] text-white rounded font-medium w-max hover:bg-[#357ABD] transition">Continue</button>
          <div className="mt-4 bg-[#F7FAFC] rounded p-2 text-[#718096] text-sm flex items-center justify-between">
            <span>By the way, you have N notifications.</span>
            <a href="#" className="text-[#4A90E2] font-medium ml-2">Notifications</a>
          </div>
        </div>
      </div>
    </section>
  );
} 