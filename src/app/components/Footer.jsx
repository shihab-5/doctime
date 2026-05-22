import React from 'react';
import Link from 'next/link';

const Footer = () => {
  // Current year auto-updates cleanly without hydration errors
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100  mt-5">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Main Footer Layout Grid */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-100">
          
          {/* Left Block: Logo and Brand Name */}
          <div className="flex items-center gap-2 select-none">
            <svg 
              className="w-8 h-8 text-blue-600" 
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
            <span className="text-lg font-bold text-gray-800 tracking-tight">
              Doc<span className="text-blue-600">Time</span>
            </span>
          </div>

          {/* Middle Block: Quick Semantic Internal Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/" className="text-xs sm:text-sm text-gray-500 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/appointments" className="text-xs sm:text-sm text-gray-500 hover:text-blue-600 transition-colors">
              All Appointment
            </Link>
            <Link href="/login" className="text-xs sm:text-sm text-gray-500 hover:text-blue-600 transition-colors">
              Doctor Portal
            </Link>
          </div>

          {/* Right Block: Inline SVG Social Icons */}
          <div className="flex items-center gap-4">
            
            {/* Facebook */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
              aria-label="Facebook Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>

            {/* Twitter / X */}
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
              aria-label="Twitter Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

          </div>
        </div>

        {/* Bottom Block: Legal/Copyright bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            &copy; {currentYear} DocTime. Healthcare simplified securely.
          </p>
          <p className="text-xs text-gray-300 tracking-wider">
            No Lorem Ipsum Policy Enforced 🛡️
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;