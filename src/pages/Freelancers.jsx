import React from 'react';
import TopBanner from '../components/TopBanner/TopBanner';
import FreelancerFilterMenu from '../components/Freelancers/FreelancerFilterMenu/FreelancerFilterMenu';
import FreelancersSection from '../components/Freelancers/FreelancersSection/FreelancersSection';

const Freelancers = () => {
    return (
        <div>
            <TopBanner
                heading={'Talent'}
                pageName={'Talent'}
                img={'/blog/top-banner.jpg'}
            ></TopBanner>
            <div>
                <div className='lg:w-[90%] my-20 mx-auto flex flex-col lg:flex-row gap-5'>
                    <div className='w-full lg:w-[25%]'>
                        <FreelancerFilterMenu></FreelancerFilterMenu>
                    </div>
                    <div className='w-full px-3 lg:px-0 lg:w-[75%]'>
                        <FreelancersSection></FreelancersSection>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Freelancers;