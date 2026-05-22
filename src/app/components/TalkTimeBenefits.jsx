'use client';

import React from 'react';
import { Card } from '@heroui/react';
import { motion } from 'framer-motion';
import { LuClock, LuVideo, LuHeartHandshake, LuShieldCheck } from 'react-icons/lu';

export default function TalkTimeGuarantee() {
  const features = [
    {
      icon: <LuClock className="text-blue-600 text-xl sm:text-2xl" />,
      title: "Guaranteed 20+ Min Sessions",
      desc: "No rushed 2-minute check-ins. Every appointment locks in dedicated, uninterrupted TalkTime so you can fully discuss your health."
    },
    {
      icon: <LuVideo className="text-purple-600 text-xl sm:text-2xl" />,
      title: "HD Telehealth Streaming",
      desc: "Connect seamlessly via high-definition video and crystal-clear audio consultations directly inside your web browser."
    },
    {
      icon: <LuHeartHandshake className="text-emerald-600 text-xl sm:text-2xl" />,
      title: "Patient-First Care Plans",
      desc: "Your dedicated consultation window includes digital prescription generation and personalized follow-up recovery targets."
    },
    {
      icon: <LuShieldCheck className="text-amber-500 text-xl sm:text-2xl" />,
      title: "100% Encrypted & Private",
      desc: "All virtual appointments and doctor-patient talk channels are secured with medical-grade end-to-end data privacy."
    }
  ];

  return (
    <section className="py-12 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-100">
      <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Consultation TalkTime Designed Around You
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm">
          Traditional clinic visits often feel hurried. Our medical network guarantees standard time frames to prioritize proper clinical discovery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Card className="border border-slate-200/60 shadow-sm bg-white hover:shadow-md transition-shadow">
              <Card.Content className="flex gap-4 p-5 items-start">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100/80 flex-shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-800 text-base sm:text-lg">{item.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Card.Content>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}