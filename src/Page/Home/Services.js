import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'A Dentist, or Dental Surgeon, is responsible for performing oral surgery and routine cleanings on patients. Their duties include repairing and removing teeth, diagnosing conditions and communicating with patients about how to best care for their teeth and gums.',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'A Dentist, or Dental Surgeon, is responsible for performing oral surgery and routine cleanings on patients. Their duties include repairing and removing teeth, diagnosing conditions and communicating with patients about how to best care for their teeth and gums.',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'A Dentist, or Dental Surgeon, is responsible for performing oral surgery and routine cleanings on patients. Their duties include repairing and removing teeth, diagnosing conditions and communicating with patients about how to best care for their teeth and gums.',
            img: whitening
        },
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-3xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl font-bold mb-5'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-2 px-28  mt-12 '>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;