import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='text-red-500 text-2xl font-bold flex'>
      <Link href="/dashboard">dashboard</Link>
      这是 Header 组件
    </div>
  )
}
