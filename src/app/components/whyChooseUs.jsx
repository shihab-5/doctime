"use client";

import React from "react";
import { Card } from "@heroui/react";
import { motion } from "framer-motion";
import { FaUserMd, FaCalendarCheck, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    title: "Verified Specialists",
    description: "Connect with highly qualified, board-certified doctors who prioritize your health.",
    icon: <FaUserMd className="text-4xl text-blue-600" />,
  },
  {
    title: "Instant Booking",
    description: "Skip the long phone calls. Schedule your appointments in seconds.",
    icon: <FaCalendarCheck className="text-4xl text-green-600" />,
  },
  {
    title: "Secure & Private",
    description: "Your health records are protected with industry-leading encryption.",
    icon: <FaShieldAlt className="text-4xl text-purple-600" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Why Choose DocTime?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-4 hover:shadow-lg transition-shadow duration-300">
                <Card.Header className="flex justify-center pb-0">
                  {feature.icon}
                </Card.Header>
                <Card.Content className="text-center pt-4">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card.Content>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}