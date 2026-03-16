import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav>
            <Link href='/' className='flex flex-row gap-1'>
            <img src="/icons/logo.png" alt="logo" width={24} height={24} />
            <p>DevEvent</p>
            </Link>
            <ul>
                
                    <Link href='/'>Home</Link>
                    <Link href='/'>Events</Link>
                    <Link href='/'>Contact us</Link>
                    <Link href='/'>About us</Link>

            </ul>
        </nav>
    </header>
  )
}

export default Navbar