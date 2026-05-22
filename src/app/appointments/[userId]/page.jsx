import React from 'react';
import { getAppointmentsDetails } from '@/app/lib/data';

const Details = async ({ params }) => {
    const { userId } =await params; // ✅ matches [userId] folder name
    const value = await getAppointmentsDetails(userId); // ✅ fetch the data
    console.log(value);

    return (
        <div>
            <p>Name: {value.name}</p>
            <p>Specialty: {value.specialty}</p>
            <p>Fee: ৳{value.fee}</p>
        </div>
    );
};


export default Details;


