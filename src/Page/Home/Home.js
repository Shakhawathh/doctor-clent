import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Care from './Care';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';
import From from './From';
import Footer from './Footer';



const Home = () => {
    return (
        <div className='bg-[#E5E5E5]' >
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Care></Care>
            <Appointment></Appointment>
            <Testimonials></Testimonials>
            <From></From>
            <Footer></Footer>
        </div>
    );
};

export default Home;