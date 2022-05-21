import React from 'react';

const Service = ({ service, setTreatment }) => {
    const {name,slots}=service
    return (
        <div className="card w-96 mx-10 bg-base-100 shadow-xl justify-center">
        <div className="card-body text-center">
          <h2 className="text-xl font-bold text-secondary mx-16">{name}</h2>
          <p>
              {
                  slots.length >0 ?
                  <span>{slots[0]}</span> :
                  <span className='text-red-500'>Try another day</span>
              }
          </p>
          <p>{slots.length} {slots.length > 1? 'Spaces' : 'Space'} Available</p>
          <div className="card-actions justify-center ">
            
            <label
             htmlFor="booking-modal-6" className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
            disabled={slots.length ===0}
            onClick={()=> setTreatment(service)}
            >Book Appointment</label>
          </div>
        </div>
      </div>
    );
};

export default Service;