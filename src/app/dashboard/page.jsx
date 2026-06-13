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
   
    const { token } = await auth.api.getToken
      ({ headers: await headers() });

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user.id}`, {
      cache: 'no-store',
       headers: {
            authorization:`Bearer ${token}`
      
            },
    }
  );
     const bookingData = await res.json();

  return <DashboardClient user={user} bookingData={bookingData} deleteAction={deleteUser} />;
};

export default Dashboard;