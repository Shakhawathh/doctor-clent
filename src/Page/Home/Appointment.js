import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';

const Appointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }}
        
        className='flex justify-center items-center mt-14 px-14 mx-14 rounded-xl'>
            <div className='flex-1'>
                  <img className='mt-[-130px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 hidden lg:block'>
                <h3 className='text-5xl text-primary font-bold'>
                    Appointment
                </h3>
                <br/>
                <h3 className='text-2xl text-white'>Make an appointment Today</h3>
                <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                <br/>
                <Button>GET START</Button>
            </div>
        </section>
    );
};

export default Appointment;