import React, { useEffect, useState } from 'react';
import banner from '../../images/banner.jpg'
import './Home.css'
import Service from '../Service/Service';
import Review from '../Review/Review';

const reviews = [
    { id: 1, name: '​Lucy Eagles', review: '"Rob is great, always there with help and advise which you can trust to talk to. I can now train at home saving time whilst being more efficient."' },
    { id: 2, name: '​Alison Salkeld-Brown', review: '"Robs online coaching has helped me feel more comfortable within myself and given me the confidence to eat better foods and train with my goals in mind."' },
    { id: 3, name: 'Beth Price', review: '"During my plan with Rob, I exceeded even my own expectations by losing 13lb and dropping 2 dress sizes from a size 12 to a size 8!"' },
]
const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='row'>
                <div className="col-sm-12 col-lg-6 bg-black pe-0 d-flex justify-content-center align-items-center">
                    <div className='px-5'>
                        <h1 className='title'><span>Take Your Fitness To</span><br /> The Next Level</h1>
                        <h4 className='text-white py-3'>PREMIUM ONLINE & INDIVIDUAL PERSONAL TRAINING IN FAREHAM WITH ROBERT COTTERILL</h4>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6 ps-0">
                    <img src={banner} alt="" />
                </div>
            </div>
            <div className="services" >
                <h1 className='text-center text-black p-5'>UpComing Services</h1>
                <div className='service' id='service'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
            <div className="reviews">
                <h1 className='text-center text-black p-5'>What My Amazing Clients Say</h1>
                <div className="review">
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;