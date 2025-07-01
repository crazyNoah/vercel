import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-[60px] bg-white shadow flex items-center z-50 px-8 justify-between">
      <div className="flex items-center space-x-8">
        <span className="font-bold text-xl text-[#2D3748]">WO HUI!</span>
        <nav className="flex space-x-6 text-[#2D3748] font-medium">
          <a href="#" className="hover:text-[#4A90E2]">Dashboard</a>
          <a href="#" className="hover:text-[#4A90E2]">Courses</a>
          <a href="#" className="hover:text-[#4A90E2]">Assignments</a>
          <a href="#" className="hover:text-[#4A90E2]">Community</a>
        </nav>
      </div>
      <div className="flex items-center space-x-6">
        {/* Notification Bell Icon */}
        <span className="relative">
          <svg width="24" height="24" fill="none" stroke="#718096" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6.002 6.002 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9"/></svg>
        </span>
        {/* User Avatar Icon */}
        <span>
          <svg width="32" height="32" fill="#E2E8F0" stroke="#718096" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 8-4 8-4s8 0 8 4"/></svg>
        </span>
      </div>
    </header>
  );
} 