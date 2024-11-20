import React from 'react';
import Banner from '../Banner/Banner';
import HeroSection from '../HeroSection/HeroSection';
import { NavLink, useLoaderData } from 'react-router-dom';
import AdventureCard from '../AdventureCard/AdventureCard';
import FeedBack from '../FeedBack/FeedBack';

const Home = () => {
    const adventures = useLoaderData();
    
    const {adventuresData,feedBackData} =adventures
    return (
        <div className=''>
            <Banner></Banner>
            <HeroSection></HeroSection>
            <h1 className='text-center mt-6 mb-10 text-2xl font-semibold'>ROAMING ADVENTURE'S EXPERIENCES </h1>
            <div className='grid grid-cols-3 mt-4 w-[80%] mx-auto max-w-[1200px] gap-6  '>
                {
                    adventuresData.slice(0,3).map(adventure =><AdventureCard adventure={adventure}></AdventureCard>)
                }
            </div>
           <button className='mx-auto block btn bg-blue-700 text-white mt-4'>
            <NavLink to="/AllBlogs">Show More</NavLink>
           </button>
           <h1 className='text-center mt-6 mb-10 text-2xl font-semibold'>OUR HAPPY CLIENTS</h1>
           <FeedBack feedBackData={feedBackData}></FeedBack>
           
        </div> 
    );

};

export default Home;




