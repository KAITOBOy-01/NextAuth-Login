"use client"

import React from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'


function Navbar({ session }) {
  return (
    <nav className='bg-gray-800 text-white p-4'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <div>
            <Link href="/">KritAuth</Link>
          </div>
          <ul className='flex space-x-4'>
            {!session ? (
              <>
                <li className='mx-3'><Link href="/login">Sign In</Link></li>
                <li className='mx-3'><Link href="/register">Sign Up</Link></li>
              </>
            ) : (
              <>
              <li className='mx-3'><a href='/welcome' className='bg-gray-500 text-white border py-2 px-3 rounded-md text-lg mt-2'>Profile</a></li>
              <li className='mx-3'><a onClick={() => signOut()} className='bg-red-500 text-white border py-2 px-3 rounded-md text-lg mt-2'>Logout</a></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
