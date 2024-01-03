import React from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import ServiceBox from '../../Home/OurServices/ServiceBox';

const ServicesSection = () => {
    const services = [
        {
            id: 1,
            heading: 'Custom Software Development',
            subHeading: 'Our IT company specializes in developing tailor-made software solutions to meet your unique business requirements, ensuring seamless operations and improved efficiency.'
        },
        {
            id: 2,
            heading: 'Web Development and Design',
            subHeading: 'We offer professional web development and design services, creating visually appealing and user-friendly websites that engage your target audience and drive online success.'
        },
        {
            id: 3,
            heading: 'IT Consulting and Strategy',
            subHeading: 'Our experienced consultants provide expert guidance on technology strategies, helping you align your IT infrastructure with your business goals, optimize processes, and make informed decisions.'
        },
        {
            id: 4,
            heading: 'Cybersecurity Solutions',
            subHeading: 'We prioritize the security of your digital assets. Our comprehensive cybersecurity services include risk assessments, vulnerability testing, threat detection, and robust measures to safeguard your sensitive information.'
        },
        {
            id: 5,
            heading: 'Managed IT Services',
            subHeading: 'We take care of your IT infrastructure, providing proactive monitoring, network management, software updates, and technical support to ensure smooth operations, minimize downtime, and enhance overall productivity.'
        },
        {
            id: 6,
            heading: "Mobile App Development",
            subHeading: "Building native and cross-platform mobile applications"
        },
        {
            id: 7,
            heading: "Cloud Services",
            subHeading: "Deploying and managing applications on cloud platforms"
        },
        {
            id: 8,
            heading: "UI/UX Design",
            subHeading: "Creating visually appealing and intuitive user interfaces"
        },
        {
            id: 9,
            heading: "E-commerce Solutions",
            subHeading: "Setting up online stores with secure payment gateways"
        },
        {
            id: 10,
            heading: "Data Analytics",
            subHeading: "Extracting insights from large datasets to aid decision-making"
        },
        {
            id: 11,
            heading: "IT Infrastructure Management",
            subHeading: "Managing and optimizing network and server environments"
        },
        {
            id: 12,
            heading: "Software Testing and Quality Assurance",
            subHeading: "Thoroughly testing software to ensure reliability and performance"
        }
    ]
    return (
        <div className='bg-gray-200 min-h-screen py-5 lg:py-16'>
            <div className='flex justify-center items-center my-7'>
                <div className='relative '>
                    <h2 className="text-2xl lg:text-[50px] text-center text-secondary font-bold">
                        We Serve The Best Work    
                    </h2>
                    <div
                        className="border-[5px] border-b-0 border-r-0 absolute -top-4 -left-8 border-primary h-7 w-7 lg:h-12 lg:w-12"
                    ></div>
                    <div
                        className="border-[5px] border-b-0 border-l-0 absolute -top-4 -right-8 border-primary h-7 w-7 lg:h-12 lg:w-12"
                    ></div>
                </div>
            </div>
            {/* Service Cards */}
            <div className='px-4 lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-7 my-10'>
                {
                    services.map(service => <ServiceBox key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default ServicesSection;