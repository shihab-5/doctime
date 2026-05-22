import React from 'react';
import { getAppointments } from '../lib/data';
import DoctorCard from './DoctorCard';
import { LuSparkles } from 'react-icons/lu';
import Link from 'next/link';

const TopDoc = async() => {
      const doctors=await getAppointments();
   
    const topDoctors = doctors.sort((a,b)=> b.rating - a.rating).slice(0,3)
       return (
           <section className="py-12 bg-slate-50/50 border-y border-slate-100">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                   
                   <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                       <div className="space-y-2">
                           <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full uppercase tracking-wider">
                               <LuSparkles className="text-amber-500 fill-amber-500 text-sm animate-pulse" />
                               Top Rated Healthcare Profiles
                           </div>
                           <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                               Meet Our Highly-Vetted Specialists
                           </h2>
                           <p className="text-slate-500 text-sm max-w-xl">
                               Consult with elite clinicians holding verified exceptional patient feedback ratings and multi-year case experiences.
                           </p>
                       </div>
                       
                       <Link 
                           href="/appointments" 
                           className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group flex items-center gap-1 whitespace-nowrap"
                       >
                           View All Operators <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                       </Link>
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                       {topDoctors.map((doctor)=>(
                           <DoctorCard
                              key={doctor.id}
                              doctor={doctor}
                           />
                       ))}
                   </div>

               </div>
           </section>
       );
};

export default TopDoc;