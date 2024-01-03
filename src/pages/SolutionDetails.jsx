import React from 'react';
import TopBanner from '../components/TopBanner/TopBanner';
import { useParams } from 'react-router-dom';
import { solutions } from '../constants/solutions';
import Container from '../components/Container/Container';

const SolutionDetails = () => {
    const { redirect } = useParams();
    const filteredSolution = solutions.find(s => s.redirect === redirect);
    console.log(filteredSolution);
    return (
        <div>

            {
                filteredSolution && (
                    <div className='font-poppins'>
                        <TopBanner
                            heading={filteredSolution.name}
                            img={'/TopBanner/solutions.webp'}
                            pageName={filteredSolution.name}
                        />
                        <div className='py-20 bg-gray-100'>
                            <Container>
                                <div className='space-y-10'>
                                    <h1 className='text-3xl text-primary font-semibold font-rubik '>
                                        {filteredSolution.detailPageHeading}
                                    </h1>
                                    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                        {
                                            filteredSolution.services?.map(s => (
                                                <div className='space-y-5 p-7 border border-primary rounded-md'>
                                                    <img
                                                        className='w-[60px]'
                                                        src="https://www.symplr.com/hubfs/_website/Solutions/Workforce%20Management/solution_WFM_challenge_01.svg" alt="Sub Service Image" />
                                                    <h4 className='text-xl text-black font-semibold'>{s.serviceName}</h4>
                                                    <p className='text-accent'>
                                                        {s.subHeading}
                                                    </p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default SolutionDetails;