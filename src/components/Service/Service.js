import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { name, img, price, description } = service
    return (
        <div className=' service-container'>
            <div>
                <img src={img} alt="" height='400px' width='600' />
                <h2>{name}</h2>
                <h4>Price: ${price}</h4>
                <p>{description}</p>
                <Link to={'/checkout'}>
                    <button className='bookNow-btn'>Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;