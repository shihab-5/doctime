"use server"

import { revalidatePath } from "next/cache";

export const createUser = async (bookAppointment) => {

  const res = await fetch('http://localhost:5000/bookings', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(bookAppointment)
  });
  const data = await res.json();

  if (data.insertedId) {
    revalidatePath('/dashboard'); // ✅ your Next.js page URL
  }
  return data;
}

export const deleteUser = async (bookingId) => {

  const res = await fetch(`http://localhost:5000/bookings/${bookingId}`, {
    method: 'DELETE'
  });
  const data = await res.json();

  if (data.deletedCount > 0) {
    // revalidatePath('/dashboard');
  }
  return data;
}

export const editProfile = async (user,id) => {
  console.log(user,id)
     const res = await fetch(`http://localhost:5000/user/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
      // credentials: "include"
    });
    const data = await res.json();

      revalidatePath('/user');

    return data;
}
export const editBooking = async (bookingInfo,bookingId) => {

 console.log('SERVER ACTION CALLED', bookingId, bookingInfo) 
      const res = await fetch(`http://localhost:5000/bookings/${bookingId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
      // credentials: "include"
    });
    const data = await res.json();
    revalidatePath('/bookings');
    return data;
}