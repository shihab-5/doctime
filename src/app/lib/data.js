import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const getAppointments=async()=>{
    const res=await fetch('http://localhost:5000/appointments');
    const data=await res.json();
    return data;
}
export const getAppointmentsDetails=async(userId)=>{
    
    const {token}=await auth.api.getToken({
        headers:await headers()
})

const res=await fetch(`http://localhost:5000/appointments/${userId}`,
        {
              headers:{
                authorization:`Bearer ${token}`
              }
            }
    );
    const data=await res.json();
    return data;
    
}