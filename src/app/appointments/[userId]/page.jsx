import { getAppointmentsDetails } from '@/app/lib/data';
import DetailsCard from '@/app/components/DetailsCard';

const Details = async ({ params }) => {
    const { userId } = await params; 
    const value = await getAppointmentsDetails(userId); 

    if (!value) {
        return <div className="min-h-screen flex items-center justify-center">Appointment data not found.</div>;
    }

    return (
       <div>
            <DetailsCard 
                key={value._id || 'details-fallback'}
                value={value}
            />
       </div>
    );
};

export default Details;