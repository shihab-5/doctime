"use client";

import React from "react";
import { Card, CardHeader, CardContent } from "@heroui/react"; 
import { motion } from "framer-motion";
import { FaSearch, FaUserCheck, FaCalendarPlus } from "react-icons/fa";

const steps = [
  {
    step: "01",
    title: "Search Doctors",
    description: "Find the right specialist by browsing our extensive list of verified medical professionals.",
    icon: <FaSearch className="text-3xl text-blue-500" />,
  },
  {
    step: "02",
    title: "Select & View",
    description: "Check doctor profiles, read their experience, and choose the slot that fits your schedule.",
    icon: <FaUserCheck className="text-3xl text-blue-500" />,
  },
  {
    step: "03",
    title: "Book Appointment",
    description: "Confirm your visit with a single click and manage everything from your personal dashboard.",
    icon: <FaCalendarPlus className="text-3xl text-blue-500" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
          Your Health Journey, Simplified
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-none bg-transparent">
                <CardHeader className="flex justify-center pb-0">
                   <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col items-center text-center gap-2 pt-4">
                  <span className="text-sm font-bold text-blue-600 tracking-widest uppercase">
                    Step {item.step}
                  </span>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}