import React from 'react';

const Button = ({children}) => {
    return (
        <div>
             <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">{children}</button>
        </div>
    );
};

export default Button;