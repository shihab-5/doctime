import React from 'react';
import { getAppointmentsDetails } from '@/app/lib/data';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import { LuActivity, LuBriefcase, LuCalendarCheck, LuClock, LuMapPin, LuStar } from 'react-icons/lu';
import { FaRegHospital } from 'react-icons/fa';

const Details = async ({ params }) => {
    const { userId } =await params; 
    const value = await getAppointmentsDetails(userId); // ✅ fetch the data
    console.log(value);

return (
        <main className="min-h-screen bg-slate-50/60 py-8 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
                <Card className="bg-white border border-slate-100 shadow-xl rounded-3xl overflow-hidden">
                    <Card.Content className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
                        
                        {/* BIG IMAGE CONTAINER */}
                        <div className="md:col-span-2 relative aspect-[4/5] md:h-full w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-sm">
                            <Image
                                src={value?.image || "https://randomuser.me/api/portraits/men/67.jpg"} 
                                alt={value?.name || "Doctor Profile"} 
                                fill
                                priority
                                className="object-cover transition-scale duration-300 hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        </div>

                        {/* DATA & DETAILS COLUMN */}
                        <div className="md:col-span-3 space-y-6 flex flex-col justify-between h-full">
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 rounded-full uppercase tracking-wider">
                                        <LuActivity className="text-xs animate-pulse" /> Verified Specialist
                                    </span>
                                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{value?.name}</h1>
                                    <p className="text-base sm:text-lg font-bold text-blue-600">{value?.specialty}</p>
                                </div>

                                {/* Core Metrics Strip */}
                                <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100/50 w-fit">
                                    <div className="flex items-center gap-1">
                                        <LuBriefcase className="text-slate-400" />
                                        <span className="font-medium">{value?.experience || "7 years"} Exp</span>
                                    </div>
                                    <div className="h-4 w-[1px] bg-slate-200" />
                                    <div className="flex items-center gap-1">
                                        <LuStar className="text-amber-500 fill-amber-500" />
                                        <span className="font-bold text-slate-900">{value?.rating || "4.5"}</span>
                                        <span className="text-slate-400">Rating</span>
                                    </div>
                                </div>

                                <p className="text-sm text-slate-500 leading-relaxed bg-slate-50/40 p-4 rounded-xl border border-dashed border-slate-200">
                                    {value?.description}
                                </p>

                                {/* Location Details info board */}
                                <div className="space-y-2.5 pt-2">
                                    <div className="flex items-start gap-2.5 text-sm text-slate-600">
                                        <FaRegHospital className="text-slate-400 text-lg mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-bold text-slate-800 leading-tight">{value?.hospital}</p>
                                            <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                                                <LuMapPin className="text-slate-400 text-xs" /> {value?.location}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2.5 text-sm text-slate-600">
                                        <LuClock className="text-slate-400 text-lg flex-shrink-0" />
                                        <div className="flex flex-wrap gap-1.5">
                                            {value?.availability?.map((slot, index) => (
                                                <span key={index} className="text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-1 rounded-md">
                                                    {slot}
                                                </span>
                                            )) || <span className="text-xs italic text-slate-400">No scheduled slots today</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Booking CTA segment */}
                            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                                <div className="text-center sm:text-left">
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Consultation Fee</p>
                                    <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">৳{value?.fee}</p>
                                </div>
                                
                                <Button
                                    className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-md shadow-blue-600/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                                >
                                    <LuCalendarCheck className="text-base" /> Book Appointment Now
                                </Button>
                            </div>
                        </div>

                    </Card.Content>
                </Card>
            </div>
        </main>
    );
};


export default Details;


