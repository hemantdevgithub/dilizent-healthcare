import React from 'react';
import Container from '../../Container/Container';
import ProjectMapCard from './ProjectMapCard';
const ProjectMap = () => {
    return (
        <Container>
            <div className='flex flex-col lg:flex-row justify-center'>
                <ProjectMapCard
                    cardNumber={'01'}
                    imgUrl={'/home/rectangle-412@2x.png'}
                    heading={'Post a Project'}
                    subHeading={'Publish your projects and start receiving quotes within hours.'}>    
                </ProjectMapCard>
                <ProjectMapCard
                    cardNumber={'02'}
                    heading={'Project Completion'}
                    imgUrl={'/home/rectangle-412@2x.png'}
                    subHeading={'Use meeting spaces to communicate, share, and work together on projects with clients.'}>    
                </ProjectMapCard>
                <ProjectMapCard
                    cardNumber={'03'}
                    heading={'Form a Team'}
                    imgUrl={'/home/rectangle-412@2x.png'}
                    subHeading={'Form effective teams rapidly and deploy them as needed.'}>    
                </ProjectMapCard>
                <ProjectMapCard
                    cardNumber={'04'}
                    heading={'Social Code Tester'}
                    imgUrl={'/home/rectangle-412@2x.png'}
                    subHeading={'Publish your projects and start receiving quotes within hours.'}>    
                </ProjectMapCard>
            </div>
        </Container>
    );
};

export default ProjectMap;