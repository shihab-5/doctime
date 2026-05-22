'use client';

import React from 'react';
import { Spinner } from '@heroui/react';
import { LuActivity, LuUserCheck } from 'react-icons/lu';

export default function LiveClinicMetrics() {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-semibold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Telehealth Server Matrix
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Real-Time Appointment Operations</h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md">
            Our high-availability routing clusters maintain latency-free video diagnostic pipes between remote specialists and connected patients.
          </p>
        </div>

        {/* Valid Native SVG Circle Progress + HeroUI Muted Spinner */}
        <div className="flex items-center gap-5 bg-slate-800/40 p-4 rounded-2xl border border-slate-800 self-center sm:self-auto">
          <div className="relative flex items-center justify-center w-16 h-16">
            {/* Background Circle */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-700"
                strokeWidth="3"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              {/* Animated Progress Circle (100%) */}
              <path
                className="text-emerald-500"
                strokeWidth="3"
                strokeDasharray="100, 100"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute text-sm font-black text-white">100%</div>
          </div>

          <div className="space-y-0.5">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Video Pipeline</p>
            <div className="text-xs sm:text-sm font-bold text-emerald-400 flex items-center gap-1.5">
              <Spinner size="sm" color="success" />
              <span className="flex items-center gap-1">
                <LuActivity className="text-xs animate-pulse" /> Online & Stable
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* System Counter Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800 text-center sm:text-left">
        <div>
          <p className="text-slate-500 text-xs">Consultations Today</p>
          <p className="text-lg font-black text-white mt-0.5">1,240 Sessions</p>
        </div>
        <div>
          <p className="text-slate-500 text-xs">Avg. Connection Queue</p>
          <p className="text-lg font-black text-blue-400 mt-0.5">Under 4 Mins</p>
        </div>
        <div className="col-span-2 sm:col-span-1 border-t border-slate-800/60 sm:border-t-0 pt-3 sm:pt-0">
          <p className="text-slate-500 text-xs">Active Providers Panel</p>
          <p className="text-xs font-bold text-slate-300 mt-1 inline-flex items-center gap-1 bg-slate-800 px-2.5 py-0.5 rounded-md">
            <LuUserCheck className="text-xs text-blue-400" /> 184 Doctors Live
          </p>
        </div>
      </div>

    </div>
  );
}