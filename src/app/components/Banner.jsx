'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slidesData = [
    {
      specialty: "Cardiology Department",
      tagline: "Comprehensive cardiovascular diagnostics, preventative care, and specialized treatment plans.",
      badge: "In-Hospital & Telehealth",
      metric: "12+ Verified Specialists",
      // Pure SVG medical icon to represent the department visually
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      specialty: "Pediatrics Department",
      tagline: "Gentle clinical guidance, milestone tracking, and expert urgent care for infants and children.",
      badge: "24/7 On-Call Support",
      metric: "8+ Senior Consultants",
      icon: (
        <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      specialty: "Neurology Department",
      tagline: "Advanced neurological assessments, cognitive testing, and modern treatment structures.",
      badge: "Advanced Diagnostics",
      metric: "5+ Research Fellows",
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-12 lg:py-20 border-b border-slate-100">
      
      {/* BACKGROUND IMAGE ARCHITECTURE: Custom CSS Grid & Gradient Mesh */}
      <div className="absolute inset-0 z-0 opacity-60 mix-blend-multiply pointer-events-none" 
           style={{
             backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px), radial-gradient(#10b981 1px, transparent 1px)`,
             backgroundSize: '40px 40px',
             backgroundPosition: '0 0, 20px 20px'
           }} 
      />
      
      {/* High-end ambient color blurs */}
      <div className="absolute top-0 right-0 z-0 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-300/10 blur-3xl transform translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 z-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl transform -translate-x-1/4 translate-y-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Core Copy Text Block */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" /> 
              Streamlined Healthcare Booking Platform
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Your Health. <br />
              Our Experts. <br />
              <span className="text-blue-600">On Your Time.</span>
            </h1>
            
            <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Skip the waiting room lines. Browse top-rated clinical specialists, view real-time calendar availability, and lock in your medical consultation instantly.
            </p>

            {/* CTA Interaction Block */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link 
                href="/appointments" 
                className="px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5"
              >
                Book Appointment
              </Link>
              <a 
                href="#how-it-works" 
                className="px-6 py-3 text-sm font-medium text-slate-700 hover:text-blue-600 border border-slate-200 hover:border-blue-200 rounded-xl bg-white/80 backdrop-blur-sm transition-all"
              >
                How It Works
              </a>
            </div>

            {/* Performance Metrics Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/60 max-w-sm mx-auto lg:mx-0">
              <div>
                <p className="text-2xl font-bold text-slate-900">99.4%</p>
                <p className="text-xs text-slate-500 font-medium">Satisfaction Rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">15 Min</p>
                <p className="text-xs text-slate-500 font-medium">Avg. Response</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">100%</p>
                <p className="text-xs text-slate-500 font-medium">Secure Records</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Card Presentation Area */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-slate-900/5 p-4 sm:p-6 rounded-3xl border border-slate-200/40 backdrop-blur-md">
              
              {/* Dynamic Presentation Card Window */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100 transition-all duration-300">
                <div className="flex justify-between items-start gap-4">
                  <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
                    {slidesData[activeSlide].badge}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold tracking-wider uppercase">
                    Featured Track
                  </span>
                </div>

                {/* Live Functional Render Layout */}
                <div className="flex items-start gap-4 mt-6">
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex-shrink-0">
                    {slidesData[activeSlide].icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {slidesData[activeSlide].specialty}
                    </h3>
                    <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed min-h-[4.5rem]">
                      {slidesData[activeSlide].tagline}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-500 font-medium bg-slate-50 px-2 py-1 rounded">
                    {slidesData[activeSlide].metric}
                  </span>
                  <Link 
                    href="/appointments" 
                    className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1 transition-colors"
                  >
                    View Available Openings <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Navigation Indicators */}
              <div className="flex items-center justify-between mt-4 px-2">
                <div className="flex gap-2">
                  {slidesData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeSlide === index ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Show department panel ${index + 1}`}
                    />
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => setActiveSlide(prev => prev === 0 ? slidesData.length - 1 : prev - 1)}
                    className="p-2 rounded-xl bg-white hover:bg-slate-50 shadow-sm border border-slate-200 text-slate-600 transition-colors"
                    aria-label="Previous card panel"
                  >
                    ←
                  </button>
                  <button 
                    onClick={() => setActiveSlide(prev => prev === slidesData.length - 1 ? 0 : prev + 1)}
                    className="p-2 rounded-xl bg-white hover:bg-slate-50 shadow-sm border border-slate-200 text-slate-600 transition-colors"
                    aria-label="Next card panel"
                  >
                    →
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}