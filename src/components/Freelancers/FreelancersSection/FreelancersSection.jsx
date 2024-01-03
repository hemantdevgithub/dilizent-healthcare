import React, { useState } from 'react';
import { BsFillGridFill, BsListUl } from 'react-icons/bs'
import FreelancersCard from './FreelancersCard';
import FreelancersGridCard from './FreelancersGridCard';

const FreelancersSection = () => {
    const professionals = [
        {
            id: 1,
            img: "https://don-my-uploads.s3.ap-south-1.amazonaws.com/images/0ab63ac00fa10eb61907cc91c8f46a99",
            name: "John Doe",
            skills: ["React Js", "HTML", "Including Planing"],
            availableDays: ["MO", "TU", "WE", "TH", "FR"],
            slot: "10:00 AM - 12:00 PM",
            experience: '1 year of experience'
        },
        {
            id: 2,
            img: "https://don-my-uploads.s3.ap-south-1.amazonaws.com/images/0ab63ac00fa10eb61907cc91c8f46a99",
            name: "Jane Smith",
            skills: ["React Js", "HTML", "Including Planing"],
            availableDays: ["MO", "TU", "WE", "TH"],
            slot: "2:00 PM - 4:00 PM",
            experience: '1 year of experience'
        },
        {
            id: 3,
            img: "https://don-my-uploads.s3.ap-south-1.amazonaws.com/images/0ab63ac00fa10eb61907cc91c8f46a99",
            name: "Alice Johnson",
            skills: ["React Js", "HTML", "Including Planing"],
            availableDays: ["MO", "TU", "WE", "TH", "FR"],
            slot: "9:00 AM - 11:00 AM",
            experience: '1 year of experience'
        }
    ];
    const [isGrid, setIsGrid] = useState(false)
    return (
        <div>
            <div className=''>
                <input
                    type="text"
                    placeholder='Search By Name, Skills and Experience'
                    className='input h-[50px] py-4 text-accent pl-10 w-full bg-[#F7F7F7E6]  focus:border-primary focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg mb-3'
                    style={{ backgroundImage: 'linear-gradient(60deg, #EEF3FC 0%, #F0F0FF 100%)' }}
                />
                <div className='flex justify-end mb-2'>
                    {
                        isGrid
                            ?
                            <button onClick={() => setIsGrid(!isGrid)}>
                                <BsFillGridFill className='text-2xl ' />
                            </button>
                            : <button onClick={() => setIsGrid(!isGrid)}>
                                <BsListUl className='text-2xl ' />
                            </button>
                    }
                </div>
            </div>
            {/* List layout */}
            {
                isGrid && 
                <div className='flex flex-col  gap-5'>
                    {
                        professionals.map(prof => <FreelancersCard
                            key={prof.id} prof={prof}
                        ></FreelancersCard>)
                    }
                </div>
            }
            {/* grid layout */}
            {
                isGrid || 
                <div className='grid grid-cols-1 gap-3 lg:grid-cols-3'>
                    {
                        professionals.map(prof => <FreelancersGridCard
                            key={prof.id} prof={prof}
                        ></FreelancersGridCard>)
                    }
                </div>
            }
        </div>
    );
};

export default FreelancersSection;