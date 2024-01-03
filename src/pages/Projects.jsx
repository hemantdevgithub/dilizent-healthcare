import React from 'react';
import TopBanner from '../components/TopBanner/TopBanner';

const Projects = () => {
    return (
        <div>
            <TopBanner
                heading={'Projects'}
                pageName={'Projects'}
                img={'/projects/top-banner.jpg'}
            />
        </div>
    );
};

export default Projects;