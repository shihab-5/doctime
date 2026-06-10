'use client'
import React, { useState } from 'react';
import { Button, Card,  Description, FieldError, Label ,DateField} from '@heroui/react';
import Image from 'next/image';
import { LuActivity, LuBriefcase, LuCalendarCheck, LuMapPin, LuStar } from 'react-icons/lu';
import { FaRegHospital } from 'react-icons/fa';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
const DetailsCard = ({value}) => {
    const { data: session,isPending } = authClient.useSession()
     const user=session?.user
     const [appointDate,setDate]=useState(null)
     
    if (isPending) {
    return <div>Loading your profile...</div>;
       }
    if (!user) {
    return <div>Please log in to continue.</div>;
     }
    console.log(user.id,'user')
    const handle=async()=>{
     const bookAppointment={
        userId :user.id,
        userName :user.name,
        useEmail:user.email,
        appointmentDate:new Date(appointDate),
        appointmentId:value._id,
        appointName:value.name,
        specialty:value.specialty,
        Image:value.image,
        fee:value.fee,
     }
         console.log(bookAppointment)
             const res=await fetch('http://localhost:5000/bookings',{
                 method:'POST',
                 headers:{
                     'Content-type':'application/json'
                 },
                 body:JSON.stringify(bookAppointment)
             });
             const data=await res.json()

toast.success("A healthier tomorrow begins today. Your appointment is confirmed.");            
            //  if(data.insertedId){
            //      revalidatePath('/bookings')
            //  }
             return data;

    }

    return (
        <div>
             <main className="min-h-screen bg-slate-50/60 py-8 px-4 sm:px-6">
                        <div className="max-w-4xl mx-auto">
                            {/* Fixed: Flat Card Component Structure */}
                            <Card className="bg-white border border-slate-100 shadow-xl rounded-3xl overflow-hidden p-6 sm:p-10">
                                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
                                    
                                    {/* BIG IMAGE CONTAINER */}
                                    <div className="md:col-span-2 relative aspect-[4/5] md:h-full w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-sm">
                                        <Image
                                            src={value?.image || "https://randomuser.me/api/portraits/men/67.jpg"} 
                                            alt={value?.name || "Doctor Profile"} 
                                            fill
                                            priority
                                            className="object-cover transition-transform duration-300 hover:scale-105"
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
            
                                            {/* Location Details & Date Input Section */}
                                            <div className="space-y-4 pt-2">
                                                <div className="flex items-start gap-2.5 text-sm text-slate-600">
                                                    <FaRegHospital className="text-slate-400 text-lg mt-0.5 flex-shrink-0" />
                                                    <div>
                                                        <p className="font-bold text-slate-800 leading-tight">{value?.hospital}</p>
                                                        <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                                                            <LuMapPin className="text-slate-400 text-xs" /> {value?.location}
                                                        </p>
                                                    </div>
                                                </div>
            
                                                {/* Fixed: Valid HeroUI DatePicker API */}
                                                <div className="w-full max-w-[280px] pt-2">
              <DateField onChange={setDate}>
                <Label />
                <DateField.Group>
                  <DateField.Input>
                    {(segment) => <DateField.Segment segment={segment} />}
                  </DateField.Input>
                </DateField.Group>
                <Description />
                <FieldError />
              </DateField>
                                                </div>
                                            </div>
                                        </div>
            
                                        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                                            <div className="text-center sm:text-left">
                                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Consultation Fee</p>
                                                <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">৳{value?.fee}</p>
                                            </div>
                                            
                                            <Button
                                            onClick={handle}
                                                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-md shadow-blue-600/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                                            >
                                                <LuCalendarCheck className="text-base" /> Book Appointment Now
                                            </Button>
                                        </div>
                                    </div>
            
                                </div>
                            </Card>
                        </div>
                    </main>
        </div>
    );
};

export default DetailsCard;