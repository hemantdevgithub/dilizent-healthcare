import React from 'react';
import TopBanner from '../components/TopBanner/TopBanner';
import AgenciesFilterMenu from '../components/Agencies/AgenciesFilterMenu/AgenciesFilterMenu';
import AgencySection from '../components/Agencies/AgencySection/AgencySection';

const Agencies = () => {
    return (
        <div>
            <TopBanner
                heading={'Agencies'}
                pageName={'Agencies'}
                img={'/blog/top-banner.jpg'}
            ></TopBanner>
            <div>
                <div className='w-[90%] my-20 mx-auto flex flex-col lg:flex-row gap-5'>
                    <div className='w-full lg:w-[25%]'>
                        <AgenciesFilterMenu />
                    </div>
                    <div className='w-full lg:w-[75%]'>
                        <AgencySection />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agencies;