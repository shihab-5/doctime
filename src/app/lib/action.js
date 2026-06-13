"use server"

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";


const getToken = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  return session?.session?.token;
};


export const createUser = async (bookAppointment) => {

const token=await getToken()
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
       authorization:`Bearer ${token}`
    },
    body: JSON.stringify(bookAppointment)
  });
  const data = await res.json();

  if (data.insertedId) {
    revalidatePath('/dashboard');
  }
  return data;
}

export const deleteUser = async (bookingId) => {
  const { token } = await auth.api.getToken({
    headers: await headers()
})

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${bookingId}`, {
    method: 'DELETE',
     headers: {
       authorization:`Bearer ${token}`
    },
  });
  const data = await res.json();

  if (data.deletedCount > 0) {
    // revalidatePath('/dashboard');
  }
  return data;
}

export const editProfile = async (user,id) => {
  // console.log(user,id)
    const { token } = await auth.api.getToken
    ({ headers: await headers() });
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      authorization:`Bearer ${token}`

      },
      body: JSON.stringify(user),
      // credentials: "include"
    });
    const data = await res.json();

      revalidatePath('/user');

    return data;
}
export const editBooking = async (bookingInfo,bookingId) => {
  const { token } = await auth.api.getToken({
     headers: await headers() });
  console.log('SERVER ACTION CALLED', bookingId, bookingInfo)
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${bookingId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization:`Bearer ${token}`
      },
      body: JSON.stringify(bookingInfo),
      // credentials: "include"
    });
    const data = await res.json();
    revalidatePath('/appointments');
    return data;
}