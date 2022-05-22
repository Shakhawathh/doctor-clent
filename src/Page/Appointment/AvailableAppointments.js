import { format, formatDistance } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)

    const formattedDate = format(date, 'PP')
    const { data: services, isLoading , refetch} = useQuery(['available', formattedDate ],() => fetch(`https://young-meadow-96167.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json())
    )


    if (isLoading) {
        return <Loading></Loading>
    }


    // useEffect(() =>{
    //     fetch(`https://young-meadow-96167.herokuapp.com/available?date=${formattedDate}`)
    //     .then(res=> res.json())
    //     .then(data => setServices(data))
    // },[formattedDate])


    return (
        <div>
            <h1 className='text-center text-xl text-secondary font-bold mb-10 mr-9'>Available Appointments on {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;