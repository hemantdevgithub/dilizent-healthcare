import React, { useState } from 'react';
import { BsFillGridFill, BsListUl } from 'react-icons/bs'
import AgencyCard from './AgencyCard';
import AgencyGridCard from './AgencyGridCard';
const AgencySection = () => {
    const companies = [
        {
            id: 1,
            companyName: "ABC Corporation",
            companyAddress: "123 Main Street, Cityville",
            companyDescription: "ABC Corporation is a leading provider of innovative solutions for...",
            services: ["Internet of things", "Cloud computing"],
            socialLinks: [
                { platform: "Facebook", link: "https://www.facebook.com/abccorp" },
                { platform: "Twitter", link: "https://www.twitter.com/abccorp" }
            ],
            companyLogo: "https://don-my-uploads.s3.ap-south-1.amazonaws.com/images/57707a09a0491ec8325901f17ec7b4dd"
        },
        {
            id: 2,
            companyName: "XYZ Industries",
            companyAddress: "456 Elm Avenue, Townsville",
            companyDescription: "XYZ Industries specializes in manufacturing high-quality products...",
            services: ["Internet of things", "Cloud computing"],
            socialLinks: [
                { platform: "LinkedIn", link: "https://www.linkedin.com/company/xyzindustries" },
                { platform: "Instagram", link: "https://www.instagram.com/xyzindustries" },
                { platform: "Twitter", link: "https://www.twitter.com/xyzindustries" }
            ],
            companyLogo: "https://don-my-uploads.s3.ap-south-1.amazonaws.com/images/d461981ac08b227b39f016905aa6ef60"
        },
        {
            id: 3,
            companyName: "PQR Limited",
            companyAddress: "789 Oak Road, Villagetown",
            companyDescription: "PQR Limited is a global leader in providing comprehensive services...",
            services: ["Internet of things", "Cloud computing"],
            socialLinks: [
                { platform: "LinkedIn", link: "https://www.linkedin.com/company/pqrlimited" },
                { platform: "Facebook", link: "https://www.facebook.com/pqrlimited" },
                { platform: "Instagram", link: "https://www.instagram.com/pqrlimited" },
                { platform: "Twitter", link: "https://www.twitter.com/pqrlimited" }
            ],
            companyLogo: "https://don-my-uploads.s3.ap-south-1.amazonaws.com/images/d1679115495e07bb09e65ffe3a00b328"
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
                <div className='flex flex-col gap-5'>
                    {
                        companies?.map(company => <AgencyCard
                            key={company.id} company={company}
                        >
                        </AgencyCard>)
                    }
                </div>
            }
            {/* Grid layout */}
            {
                isGrid || 
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                    {
                        companies?.map(company => <AgencyGridCard
                            key={company.id} company={company}
                        >
                        </AgencyGridCard>)
                    }
                </div>
            }
        </div>
    );
};

export default AgencySection;