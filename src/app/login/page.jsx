'use client'
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form"
import { FaGoogle } from 'react-icons/fa';


const Login= () => {

const handleGoogleLogin=async()=>{
  const data = await authClient.signIn.social({
    provider: "google",
  });
}
const onSubmit=async(e)=>{
e.preventDefault();

const formData=new FormData(e.currentTarget);
const data=Object.fromEntries(formData.entries())

console.log(data)
        const { data:res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});
if(error){
    alert('not correct')
}
console.log(res,error)
    }



  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

//     const handle=async(data)=>{
       
//         console.log(data)



    return (

        <div className='min-h-screen flex flex-col items-center justify-center px-4 py-6 sm:py-10 bg-gradient-to-br from-sky-100 to-sky-50'>
    <div className='w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden'>
    <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-white border-0 rounded-0 w-full border-0 p-4 sm:p-6 md:p-8">
  <legend className="fieldset-legend font-bold text-xl sm:text-2xl text-center mb-6">Login</legend>

  <div className="space-y-4">
  <div>
  <label className="label text-sm sm:text-base">Email</label>
  <input type="email"  className="input input-bordered w-full text-sm sm:text-base" placeholder="your@email.com"
  {...register("email", { required: "Email is required" })} />
  {errors.email && <p className='text-error text-xs sm:text-sm mt-1'>{errors.email.message}</p>}
  </div>

  <div>
  <label className="label text-sm sm:text-base">Password</label>
  <input type="password"  className="input input-bordered w-full text-sm sm:text-base" placeholder="••••••••" 
    {...register("password", { required: "password field is required" })} />
    {errors.password && (
       <p className='text-error text-xs sm:text-sm mt-1'>{errors.password.message}</p>)
    }
  </div>
  </div>

  <Button type="submit" variant="secondary" className="w-full mt-6 text-sm sm:text-base">Login</Button>
</fieldset>
    </form>
    
    <div className="px-4 sm:px-6 md:px-8 py-4 text-center border-t">
    <p className="text-xs sm:text-sm">{`don't have a account ?`}<Link href={'/register'} className='text-red-600 font-semibold hover:underline'> Register</Link></p>
    </div>
    
    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6">
        <p className='whitespace-nowrap text-center my-2'>or login with google</p>
        <button onClick={handleGoogleLogin}
         className="btn bg-sky-300 hover:bg-sky-400 w-full text-black border-[#e5e5e5] text-sm sm:text-base flex justify-center items-center gap-2">
            <FaGoogle></FaGoogle>  Login with Google
</button>
    </div>
    </div>
        </div>
    );
};

export default Login;