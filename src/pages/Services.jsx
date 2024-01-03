import React from 'react';
import TopBanner from '../components/TopBanner/TopBanner';
import ServicesSection from '../components/Services/ServicesSection/ServicesSection';
import PartnershipSection from '../components/Services/PartnershipSection/PartnersSection';
import ServicesOverview from '../components/Services/ServicesOverview/ServicesOverview';

const Services = () => {
    return (
        <div>
            <TopBanner
                heading={'Services'}
                img={'/services/service-bg.jpg'}
                pageName={'Services'}
            />
            <ServicesOverview />
            <ServicesSection />
        
            {/* <PartnershipSection></PartnershipSection> */}
        </div>
    );
};

export default Services;