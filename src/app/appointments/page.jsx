import React from 'react';
import { getAppointments } from '../lib/data';
import DoctorCard from '../components/DoctorCard';

const Appointments = async() => {
  // Direct server data retrieval 
  const appointments = await getAppointments();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 min-h-screen bg-slate-50">
      
      {/* Page Heading Section */}
      <div className="mb-10 text-center sm:text-left space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
          Available Medical Openings
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
          Browse through our vetted grid of medical operators. Select a specialist card to see active clinic time frameworks and secure your appointment.
        </p>
        <div className="inline-block bg-blue-100 border border-blue-200 px-3 py-1 rounded-full text-xs font-semibold text-blue-800">
          Total Specialists: {appointments.length}
        </div>
      </div>

      {/* Main Grid Render Logic */}
      {appointments.length === 0 ? (
        <div className="text-center py-20 bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
          <p className="text-slate-500 font-medium">
            No available medical schedules were discovered in the records catalog.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {appointments.map((doctor) => (
            <DoctorCard
              key={doctor.id} 
              doctor={doctor} 
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default Appointments;