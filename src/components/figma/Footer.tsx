import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t py-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex space-x-6 mb-2 md:mb-0">
          <a href="#" className="text-[#4A90E2] hover:underline">About</a>
          <a href="#" className="text-[#4A90E2] hover:underline">Privacy Policy</a>
          <a href="#" className="text-[#4A90E2] hover:underline">Terms of Service</a>
        </div>
        <div className="text-[#718096] text-sm">© 2020 Wo Hui (Pte) Ltd</div>
      </div>
    </footer>
  );
} 