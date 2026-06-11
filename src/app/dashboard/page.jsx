import React from 'react';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import DashboardClient from '../components/DashboardClient';
import { deleteUser } from '../lib/action';

const Dashboard = async () => {
  const session =await auth.api.getSession({
    headers: await headers(),
  });
  
  const user = session?.user;

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h2>
        <p className="text-gray-600">Please sign in to view your medical dashboard.</p>
      </div>
    );
  }

  // Fetching booking data on the server side
  // let bookingData = [];
  // try {
    const res = await fetch(`http://localhost:5000/bookings/${user.id}`, {
      cache: 'no-store', // Ensures fresh data on load
    });
    // if (res.ok) {
     const bookingData = await res.json();
  //   }
  // } catch (error) {
  //   console.error("Failed to fetch bookings:", error);
  // }

  return <DashboardClient user={user} initialBookings={bookingData} deleteAction={deleteUser} />;
};

export default Dashboard;