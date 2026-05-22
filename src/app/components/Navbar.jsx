'use client'
import React from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

  const { data: session } = authClient.useSession()
 const user=session?.user


  return (
    <nav className="bg-white shadow-md w-full border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 select-none">
              <svg 
                className="w-9 h-9 text-blue-600" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M12 8v8"/>
                <path d="M9 12h6"/>
              </svg>
              <span className="text-xl font-bold text-gray-800 tracking-tight">
                Doc<span className="text-blue-600">Time</span>
              </span>
            </Link>
          </div>

          <div className="flex items-center justify-center flex-1 px-2 sm:px-6">
            <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar max-w-full">
              <Link 
                href="/" 
                className="text-xs sm:text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap px-1 py-2"
              >
                Home
              </Link>
              <NavLink 
                href="/appointments" 
                className="text-xs sm:text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap px-1 py-2"
              >
                All Appointment
              </NavLink>
              <NavLink 
                href="/dashboard" 
                className="text-xs sm:text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap px-1 py-2"
              >
                Dashboard
              </NavLink>
              {user && (
                <Link 
                  href="/dashboard" 
                  className="text-xs sm:text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap px-1 py-2"
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>

          <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
            {user ? (
              <div className="flex items-center gap-2 sm:gap-3">

<div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
  <Image
    src={user?.photoURL || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"} 
    alt={user?.displayName || "User Profile"} 
    fill
    sizes="(max-width: 640px) 32px, 40px"
    className="rounded-full object-cover border-2 border-blue-500"
  />
</div>
              
                  <button
className='btn btn-neutral font-bold' onClick={async()=> await authClient.signOut()}>Logout
  </button>
              </div>
            ) : (
              <div className="flex items-center gap-1 sm:gap-2">
                <Link 
                  href="/login" 
                  className="px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
                >
                  Login
                </Link>
                <Link 
                  href="/register" 
                  className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm shadow-blue-500/10 transition-all whitespace-nowrap"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;