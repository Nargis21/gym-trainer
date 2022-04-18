import React from 'react';
import banner from '../../images/banner.jpg'
import './Home.css'
import service1 from '../../images/service1.jpg'
import service2 from '../../images/service2.jpg'
import service3 from '../../images/service3.jpg'
import service4 from '../../images/service4.jpg'
import Service from '../Service/Service';

const services = [
    {
        id: 1,
        name: 'SMALL GROUP PERSONAL TRAINING', price: '599',
        description: "Our Small Group Personal Training is unlike anything you'll have experienced before. In micro training groups of just 6:1, all your workouts are customised, recorded and coached by an experienced personal trainer. The balance of the motivational group environment and 1-2-1 attention makes it the perfect mix to produce fast results, without the bounce back ",
        img: service1
    },
    {
        id: 2,
        name: '1-2-1 PERSONAL TRAINING', price: '1599',
        description: "1-2-1 personal training is the ultimate investment in your health. You'll be working directly with your coach in our private studio, following a bespoke plan to ensure you hit your goals in record time. Whether you want to slim down, add muscle or anything in between, our personal training packages will get you there in a fun and sustainable way",
        img: service2
    },
    {
        id: 3,
        name: 'NUTRITION Guide', price: '299',
        description: "We'll teach you how to take control of your health and weight, without relying on any specific diet or products, with our 1-2-1 nutrition coaching. You'll working alongside a qualified nutritionist to build a sustainable approach together, so you'll not only hit your physique goals, but be able to stay there without rigid diets or unrealistic restrictions",
        img: service3
    },
    {
        id: 4,
        name: 'ONLINE TRAINING', price: '1099',
        description: "The Armoury's Online Coaching Packages have been created to take the guesswork out of getting in the best shape of your life. You'll be working 1-2-1 with your Personal Trainer through our Armoury Coaching app- where you'll get workouts designed specifically for you, progress monitored, regular check-ins and nutrition support for unrivalled results, anywhere in the world ",
        img: service4
    },

]
const Home = () => {
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
            <h1 className='text-center text-black'>My Services</h1>
            <div className='service'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Home;