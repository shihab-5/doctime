import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const getAppointments=async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments`);
    const data = await res.json();
    return data;
}
export const getAppointmentsDetails=async(userId)=>{
    
    const {token}=await auth.api.getToken({
        headers:await headers()
})

const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${userId}`,
        {
              headers:{
                authorization:`Bearer ${token}`
              }
            }
    );
    const data = await res.json();
    return data;
    
}