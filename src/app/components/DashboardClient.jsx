'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  FiUser, 
  FiCalendar, 
  FiEdit3, 
  FiTrash2, 
  FiClock, 
  FiDollarSign, 
  FiAlertCircle,
  FiActivity
} from 'react-icons/fi';
import { AlertDialog, Button } from '@heroui/react';
import toast from 'react-hot-toast';
import RescheduleModal from './RescheduleModal';
import ProfileUpdateModal from './ProfileUpdateModal';

const DashboardClient = ({ user, bookingData,deleteAction }) => {
  const [activeTab, setActiveTab] = useState('profile'); // 
  const [bookings, setBookings] = useState(bookingData);
  // const [tst, setToast] = useState(null);

  // const showToast = (message, type = 'success') => {
  //   setToast({ message, type });
  //   setTimeout(() => setToast(null), 4000);
  // };

  
  // const handleDelete = async (bookingId) => {
  //   console.log(bookingId)
  //   await deleteAction(bookingId);

  // };
const handleDelete = async (bookingId) => {
  const data = await deleteAction(bookingId);
  if (data.deletedCount > 0) {
    setBookings((prev) => prev.filter((b) => b._id !== bookingId));
    toast.success('Appointment cancelled successfully');
  } else {
    toast.error('Failed to cancel appointment');
  }
};
  const formatDate = (dateString, timeString) => {
  const date = new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return timeString ? `${date} at ${timeString}` : date;
};

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 min-h-screen bg-slate-50/50 selection:bg-blue-500 selection:text-white relative">
      
      {/* Dynamic Notification Toast System */}
      {/* <AnimatePresence>
        {tst && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl border text-sm font-medium backdrop-blur-md ${
              tst.type === 'error' ? 'bg-rose-50/90 border-rose-100 text-rose-800' :
              tst.type === 'info' ? 'bg-amber-50/90 border-amber-100 text-amber-800' :
              'bg-emerald-50/90 border-emerald-100 text-emerald-800'
            }`}
          >
            <FiAlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{tst.message}</span>
          </motion.div>
        )}
      </AnimatePresence> */}

      
      <div className="mb-10 flex flex-col md:items-center md:justify-between gap-6 pb-6 border-b border-slate-200/60">
        <div>
          <div className="flex items-center gap-2 text-blue-600 font-semibold text-xs tracking-wider uppercase mb-1">
            <FiActivity className="w-4 h-4" />
            Patient Workspace
          </div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Welcome back, <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{user?.name || 'User'}</span>
          </h1>
          <p className="text-slate-500 text-sm mt-0.5">Manage your medical profiles, historical timelines, and appointments.</p>
        </div>

        <div className="relative bg-slate-100 p-1 rounded-xl flex items-center w-full md:w-80 border border-slate-200/40 shadow-inner">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 flex items-center justify-center gap-2 text-center py-2.5 text-xs font-bold rounded-lg relative z-10 transition-all uppercase tracking-wider ${
              activeTab === 'profile' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {activeTab === 'profile' && (
              <motion.div
                layoutId="activeTabBackground"
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg -z-10 shadow-md shadow-blue-500/20"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <FiUser className="w-3.5 h-3.5" />
            My Profile
          </button>
          
          <button
            onClick={() => setActiveTab('bookings')}
            className={`flex-1 flex items-center justify-center gap-2 text-center py-2.5 text-xs font-bold rounded-lg relative z-10 transition-all uppercase tracking-wider ${
              activeTab === 'bookings' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {activeTab === 'bookings' && (
              <motion.div
                layoutId="activeTabBackground"
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg -z-10 shadow-md shadow-blue-500/20"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <FiCalendar className="w-3.5 h-3.5" />
            Bookings ({bookings.length})
          </button>
        </div>
      </div>

      <main className="bg-white rounded-2xl border border-slate-200/70 p-6 md:p-10 shadow-sm overflow-hidden min-h-[420px]">
        <AnimatePresence mode="wait">
          {activeTab === 'profile' ? (
            
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="max-w-3xl mx-auto flex flex-col items-center md:items-start md:flex-row gap-10 py-4"
            >
              <div className="relative w-36 h-36 flex-shrink-0 group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-400 opacity-20 blur-md group-hover:opacity-40 transition-opacity" />
                <Image
                  src={user?.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"}
                  alt={user?.name || "User Avatar"}
                  fill
                  className="rounded-full object-cover ring-4 ring-white shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex-1 w-full space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-slate-50/60 p-4 rounded-xl border border-slate-100">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Full Name</label>
                    <p className="text-lg font-bold text-slate-800">{user?.name || 'Not Provided'}</p>
                  </div>
                  <div className="bg-slate-50/60 p-4 rounded-xl border border-slate-100">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Email Address</label>
                    <p className="text-sm font-semibold text-slate-700 break-all">{user?.email || 'No email associated'}</p>
                  </div>
                </div>
                
                <div className="pt-2 flex justify-center md:justify-start">
               <ProfileUpdateModal user={user} ></ProfileUpdateModal>
                </div>
              </div>
            </motion.div>
          ) : (
            
            <motion.div
              key="bookings"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="text-base font-bold text-slate-800">Your Appointment History</h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Syncing
                </span>
              </div>

              {bookings.length === 0 ? (
                <div className="text-center py-16 max-w-sm mx-auto flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 text-slate-400 mb-4">
                    <FiCalendar className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-bold text-slate-700">No scheduled appointments</p>
                  <p className="text-xs text-slate-400 mt-1">When you lock in times with medical professionals, your active schedules will appear straight here.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <AnimatePresence mode="popLayout">
                    {bookings.map((booking) => (
                      <motion.div
                        key={booking._id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, x: -30, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                        className="bg-white border border-slate-200/80 hover:border-blue-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-4 relative group"
                      >
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-100">
                          <Image
                            src={booking.Image || booking.image || "https://randomuser.me/api/portraits/men/54.jpg"}
                            alt={booking.appointName || "Doctor profile"}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          <div>
                            <div className="flex items-start justify-between gap-4">
                              <h4 className="font-bold text-slate-900 truncate text-base group-hover:text-blue-600 transition-colors">
                                {booking.appointName || 'Medical Professional'}
                              </h4>
                              <span className="inline-flex items-center text-slate-900 font-black text-sm bg-slate-50 border border-slate-100 px-2.5 py-0.5 rounded-lg">
                                <FiDollarSign className="w-3 h-3 text-slate-400 mr-0.5" />
                                {booking.fee}
                              </span>
                            </div>
                            
                            <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mt-0.5">
                              {booking.specialty || 'General Practitioner'}
                            </p>
                            
                            <div className="flex items-center gap-2 text-slate-500 mt-3 text-xs bg-slate-50/80 border border-slate-100 w-fit px-2.5 py-1 rounded-lg">
                              <FiClock className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-medium text-slate-600">{formatDate(booking.appointmentDate, booking.appointTime)}</span>                            </div>
                          </div>

                          <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-100/80 mt-4">
                            <RescheduleModal bookingInfo={booking}></RescheduleModal>
                            {/* <button
                              onClick={() => handleUpdateBooking(booking._id)}
                              className="px-3 py-1.5 border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 rounded-lg text-xs font-bold tracking-wide transition-colors bg-white shadow-2xs"
                            >
                              Reschedule
                            </button> */}
                            {/* <button
                              onClick={() => handleDelete(booking._id)}
                              className="px-3 py-1.5 bg-rose-50/60 hover:bg-rose-100/80 text-rose-600 border border-rose-100/40 rounded-lg text-xs font-bold tracking-wide transition-colors flex items-center gap-1.5"
                            >
                              <FiTrash2 className="w-3 h-3" />
                              Cancel
                            </button> */}
                                <AlertDialog>
                                  <Button className="px-3 py-1.5 bg-rose-50/60 hover:bg-rose-100/80 text-rose-600 border border-rose-100/40 rounded-lg text-xs font-bold tracking-wide transition-colors flex items-center gap-1.5">
                                  <FiTrash2 className="w-3 h-3" />
                                  Cancel</Button>
                                  <AlertDialog.Backdrop>
                                    <AlertDialog.Container>
                                      <AlertDialog.Dialog className="sm:max-w-[400px]">
                                        <AlertDialog.CloseTrigger />
                                        <AlertDialog.Header>
                                          <AlertDialog.Icon status="danger" />
                                          <AlertDialog.Heading>Delete appointment permanently?</AlertDialog.Heading>
                                        </AlertDialog.Header>
                                        <AlertDialog.Body>
                                          <p>
                                            This will permanently delete <strong>My Awesome specialist doctor</strong> and all of its
                                            data. This action cannot be undone.
                                          </p>
                                        </AlertDialog.Body>
                                        <AlertDialog.Footer>
                                          <Button slot="close" variant="tertiary">
                                            Cancel
                                          </Button>
                                          <Button slot="close" variant="danger" onClick={() => handleDelete(booking._id)}>
                                            Delete 
                                          </Button>
                                        </AlertDialog.Footer>
                                      </AlertDialog.Dialog>
                                    </AlertDialog.Container>
                                  </AlertDialog.Backdrop>
                                </AlertDialog>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default DashboardClient;