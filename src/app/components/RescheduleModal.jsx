'use client'
import React from 'react';
import { Button, Modal, Surface } from "@heroui/react";
import { FiCalendar, FiDollarSign, FiLock, FiUser } from 'react-icons/fi';
import Image from 'next/image';
import toast from 'react-hot-toast';

const RescheduleModal = ({ bookingInfo, onUpdateAction }) => {
  return (
    <div>
      <Modal>
        <Button variant="secondary">Reschedule Appointment</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                </Modal.Icon>
                <Modal.Heading>Modify Appointment</Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Review and update your appointment details below. Restricted fields remain locked for data integrity.
                </p>
              </Modal.Header>
              
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form 
                    // onSubmit={async (e) => {
                    //   e.preventDefault();
                    //   const formData = new FormData(e.target);
                      
                    //   // Packaging values for controlled verification
                    //   const updatedPayload = {
                    //     ...bookingInfo,
                    //     userName: formData.get("userName"),
                    //     appointmentDate: new Date(formData.get("appointmentDate")).toString()
                    //   };
                      
                    //   try {
                    //     if (onUpdateAction) {
                    //       await onUpdateAction(updatedPayload);
                    //     }
                    //     toast.success("Appointment modified successfully!");
                    //   } catch (err) {
                    //     toast.error("Failed to update booking modifications.");
                    //   }
                    // }} 
                    className="space-y-5 text-slate-800"
                  >
                    
                    {/* READ-ONLY SECTION: DOCTOR / CLINIC DATA SUMMARY */}
                    <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl flex items-center gap-4 select-none">
                      {/* Next.js Optimized Image Wrapper Container */}
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
                        <Image
                          src={bookingInfo?.Image || bookingInfo?.image || "https://randomuser.me/api/portraits/men/80.jpg"} 
                          alt={bookingInfo?.appointName || "Doctor profile"} 
                          fill
                          sizes="48px"
                          className="object-cover"
                          priority
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md mb-1">
                          {bookingInfo?.specialty}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm truncate">
                          {bookingInfo?.appointName}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium mt-0.5 flex items-center gap-0.5">
                          <FiDollarSign className="w-3 h-3 text-slate-400" /> Fee: <span className="text-slate-700 font-bold">৳{bookingInfo?.fee || 750}</span>
                        </p>
                      </div>
                      <div className="text-slate-400 p-2" title="Doctor details cannot be altered">
                        <FiLock className="w-4 h-4" />
                      </div>
                    </div>

                    {/* EDITABLE SECTION: PATIENT & SCHEDULE UPDATE SLOTS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                          <FiUser className="w-3.5 h-3.5" /> Patient Name
                        </label>
                        <input
                          type="text"
                          name="userName"
                          defaultValue={bookingInfo?.userName || ""}
                          className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white transition-all shadow-2xs"
                          required
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                          <FiCalendar className="w-3.5 h-3.5" /> Appointment Date & Time
                        </label>
                        <input
                          type="datetime-local"
                          name="appointmentDate"
                          defaultValue={bookingInfo?.appointmentDate ? new Date(bookingInfo.appointmentDate).toISOString().slice(0, 16) : ""}
                          className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white transition-all shadow-2xs"
                          required
                        />
                      </div>
                    </div>

                    {/* READ-ONLY SECTION: USER IDENTITY REFERENCE INTEGRITY KEYS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                      <div className="flex flex-col gap-1.5 opacity-75">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                          <FiLock className="w-3 h-3" /> Registered Email
                        </label>
                        <input
                          type="email"
                          defaultValue={bookingInfo?.useEmail || ""}
                          readOnly
                          disabled
                          className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-500 cursor-not-allowed select-all font-medium"
                         required
                        />
                      </div>

                      <div className="flex flex-col gap-1.5 opacity-75">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                          <FiLock className="w-3 h-3" /> Booking Reference ID
                        </label>
                        <input
                          type="text"
                          defaultValue={bookingInfo?.appointmentId || ""}
                          readOnly
                          disabled
                          className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-500 cursor-not-allowed select-all font-mono text-[11px]"
                          required
                        />
                      </div>
                    </div>

                    {/* MODAL ACTION CONTROLS */}
                    <div className="flex justify-end gap-2 pt-4 border-t border-slate-100 mt-6">
                      <Button slot="close" type="button" variant="secondary" className="px-4 py-2 text-xs font-bold uppercase tracking-wider">
                        Cancel
                      </Button>
                      <button 
                        type="submit"
                        className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-95 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-500/10 transition-opacity"
                      >
                        Save Changes
                      </button>
                    </div>

                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
}

export default RescheduleModal;