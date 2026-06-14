'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiOutlineExclamationCircle, HiOutlineHeart, HiOutlineHome } from 'react-icons/hi';
import { Button } from '@heroui/react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">

      {/* Background floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 left-20 w-32 h-32 bg-blue-200/40 rounded-full blur-2xl"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-200/40 rounded-full blur-2xl"
      />


      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-lg w-full bg-white rounded-3xl shadow-xl p-10 text-center border border-gray-100"
      >

        {/* Icon */}
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
          className="mx-auto mb-6"
        >
          <div className="w-28 h-28 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
            <HiOutlineExclamationCircle className="text-7xl text-blue-600" />
          </div>
        </motion.div>


        <h1 className="text-7xl font-black text-gray-900">
          404
        </h1>


        <h2 className="mt-3 text-3xl font-bold text-gray-800">
          Doctor Not Found!
        </h2>


        <p className="mt-4 text-gray-500 leading-relaxed">
          The page you are looking for doesn't exist. 
          It may have been removed or the appointment link is incorrect.
        </p>


        {/* Healthcare badge */}
        <div className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-blue-50 text-blue-600 font-medium">
          <HiOutlineHeart className="text-xl" />
          Your health journey matters
        </div>


        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          <Link href="/">
            <Button
              color="primary"
              size="lg"
              radius="full"
              startContent={<HiOutlineHome />}
              className="px-8"
            >
              Back Home
            </Button>
          </Link>


          <Link href="/appointments">
            <Button
              variant="bordered"
              size="lg"
              radius="full"
              className="px-8"
            >
              Find Doctors
            </Button>
          </Link>

        </div>


        <p className="mt-8 text-sm text-gray-400">
          Need medical assistance? Explore our trusted doctors and book an appointment.
        </p>

      </motion.div>

    </div>
  );
};

export default NotFoundPage;