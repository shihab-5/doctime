'use client';

import React, { useState } from 'react';
import { Slider, Button } from '@heroui/react';
import { motion } from 'framer-motion';
import { LuDollarSign, LuTrendingDown } from 'react-icons/lu';

export default function SavingsCalculator() {
  const [minutes, setMinutes] = useState(150);
  
  // Telco carrier cost ($0.35/min) vs TalkTime ($0.02/min)
  const traditionalCost = (minutes * 0.35).toFixed(2);
  const talktimeCost = (minutes * 0.02).toFixed(2);
  const savings = (traditionalCost - talktimeCost).toFixed(2);

  return (
    <div className="bg-white border border-slate-100 shadow-xl rounded-3xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
      
      <div className="lg:col-span-3 space-y-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">Stop overpaying for minutes</h3>
          <p className="text-slate-500 text-xs sm:text-sm">
            Drag the slider to match your estimated monthly cross-network calling volumes.
          </p>
        </div>

        <div className="py-4">
          <Slider
            label="Monthly Call Volume"
            step={10}
            maxValue={1000}
            minValue={10}
            value={minutes}
            onChange={setMinutes}
            getValue={(value) => `${value} Mins`}
            className="max-w-full font-semibold text-slate-700"
            color="primary"
          />
        </div>
      </div>

      <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-6 relative overflow-hidden shadow-lg">
        <div className="absolute -right-6 -bottom-6 opacity-10">
          <LuTrendingDown size={140} />
        </div>

        <div className="space-y-4 relative z-10">
          <p className="text-xs font-semibold text-blue-100 uppercase tracking-widest flex items-center gap-1.5">
            <LuDollarSign /> Estimated Monthly Savings
          </p>
          
          <div className="space-y-0.5">
            <motion.h4 
              key={savings}
              initial={{ scale: 0.95, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-4xl font-black tracking-tight"
            >
              ${savings}
            </motion.h4>
            <p className="text-xs text-blue-200">Saved every single month</p>
          </div>

          <div className="pt-3 border-t border-blue-500/40 grid grid-cols-2 gap-2 text-[11px] text-blue-100">
            <div>
              <p className="text-blue-300">Traditional Telco</p>
              <p className="font-bold text-white text-sm">${traditionalCost}</p>
            </div>
            <div>
              <p className="text-blue-300">TalkTime App</p>
              <p className="font-bold text-emerald-300 text-sm">${talktimeCost}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}