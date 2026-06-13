'use client';

import React from 'react';
import Link from 'next/link';
import { LuBriefcase, LuClock, LuMapPin, LuStar } from 'react-icons/lu';
import { FaRegHospital } from 'react-icons/fa';
import Image from 'next/image';

export default function DoctorCard({ doctor }) {
  const { name, specialty, image, experience, rating, hospital, location, fee } = doctor;

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      
      <div className="flex gap-4 items-center mb-4">
        <Image
          src={image || "https://randomuser.me/api/portraits/men/67.jpg"}
          alt={name || "Doctor Profile"}
          width={64}
          height={64}
          className="w-16 h-16 rounded-xl object-cover border border-slate-100 flex-shrink-0"
        />
        <div>
          <h3 className="font-bold text-slate-900 text-lg tracking-tight">{name}</h3>
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md inline-block mt-0.5">
            {specialty}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-600 py-3 border-y border-slate-50">
        <div className="flex items-center gap-1.5">
          <LuBriefcase className="text-slate-400" />
          <span>{experience} Exp</span>
        </div>
        <div className="flex items-center gap-1.5">
          <LuStar className="text-amber-500 fill-amber-500" />
          <span className="font-bold text-slate-800">{rating}</span>
          <span className="text-slate-400">Rating</span>
        </div>
      </div>

      <div className="space-y-1.5 text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100/50 my-4">
        <div className="flex items-center gap-2">
          <FaRegHospital className="text-slate-400 flex-shrink-0" />
          <span className="font-medium text-slate-700 leading-tight">{hospital}</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <LuMapPin className="text-slate-400 flex-shrink-0" />
          <span>{location}</span>
        </div>
      </div>

      {doctor?.availability && (
        <div className="flex items-start gap-2 mb-4">
          <LuClock className="text-slate-400 text-sm mt-0.5 flex-shrink-0" />
          <div className="flex flex-wrap gap-1.5">
            {doctor.availability.map((slot, i) => (
              <span key={i} className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 border border-blue-100 rounded-full">
                {slot}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-wider">Consultation Fee</p>
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