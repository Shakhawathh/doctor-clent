import React from 'react';



const Service = ({service}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl pt-8">
                <figure className="px-10 pt-10">
                <img src={service.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service.name}</h2>
                    <p>{ service.description   }</p>
                    <div className="card-actions">
                        <button className="btn bg-19D3AE text-white">Buy Now</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Service;