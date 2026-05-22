'use client';

import React from 'react';
import Link from 'next/link';
import { LuBriefcase, LuMapPin, LuStar } from 'react-icons/lu';
import { FaRegHospital } from 'react-icons/fa';
// Importing specific, polished icons from the react-icons package
// import { LuBriefcase, LuStar, LuMapPin } from 'react-icons/lu';
// import { FaHospitalReg } from 'react-icons/fa';

export default function DoctorCard({ doctor }) {
  const { _id, name, specialty, image, experience, rating, hospital, location, fee } = doctor;



  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        {/* Profile Card Header */}
        <div className="flex gap-4 items-start">
          <img 
            src={image} 
            alt={name} 
            className="w-16 h-16 rounded-xl object-cover bg-slate-100 border border-slate-100" 
          />
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900 text-lg tracking-tight">{name}</h3>
            <p className="text-sm font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md inline-block">
              {specialty}
            </p>
          </div>
        </div>

        {/* Experience & Rating Strip */}
        <div className="grid grid-cols-2 gap-2 my-5 pt-4 border-t border-slate-50 text-xs text-slate-600">
          <div className="flex items-center gap-1.5">
            <LuBriefcase className="text-slate-400 text-sm" />
            <span>{experience} Experience</span>
          </div>
          <div className="flex items-center gap-1.5 justify-end">
            <LuStar className="text-amber-500 text-sm fill-amber-500" />
            <span className="font-bold text-slate-800">{rating} Rating</span>
          </div>
        </div>

        {/* Hospital Address Frame */}
        <div className="space-y-2 text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100/50">
          <div className="flex items-start gap-2">
            <FaRegHospital className="text-slate-400 text-base mt-0.5 flex-shrink-0" />
            <span className="font-medium text-slate-700 leading-tight">{hospital}</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <LuMapPin className="text-slate-400 text-sm flex-shrink-0" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Pricing and Action Links */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Consultation Fee</p>
          <p className="text-xl font-extrabold text-slate-900">৳{fee}</p>
        </div>
        <Link 
          href={`/appointments/${doctor._id}`}
          className="px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}