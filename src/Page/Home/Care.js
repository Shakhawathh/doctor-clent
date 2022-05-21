import React from 'react';
import Treatment from '../../assets/images/treatment.png'
import Button from '../Shared/Button';


const Care = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100 px-14  bg-[#E5E5E5]">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={Treatment} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='px-16'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, </h1>
                        <h1 className="text-5xl font-bold">on Your Terms</h1>
                        <p className="py-6 text-sm-bold">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        
                        <Button>GET START</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Care;