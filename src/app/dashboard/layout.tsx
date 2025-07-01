"use client"
import {useState} from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const linkData= [
    { href: '/dashboard/about', label: 'About' },
    { href: '/dashboard/setting', label: 'Setting' },   
  ];
  const [number, setNumber] = useState(0)
  const pathname = usePathname()
  console.log(pathname);
  
  return (
    <div className="border-2 mx-auto mt-20 p-4">
      <h1 className="text-2xl font-bold mb-4">我是 Dashboard layout</h1>
      <button className='w-20 h-20 text-white' onClick={()=> setNumber(number+1)}>add</button>
      <div>{number}</div>
      {linkData.map((link) => (
        <Link key={link.href} href={link.href} className={`${pathname === link.href ? 'text-purple-500' : ''} mr-20`}>
          {link.label}
        </Link>
      ))}
        {children}
    </div>
  );
}