import React from 'react';
import ServiceBox from './ServiceBox';
import { Link } from 'react-router-dom';

const OurServices = () => {
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
        <div className=' py-14 bg-gray-200 space-y-10'>
            <h2 className='text-5xl font-bold text-primary text-center'>Our Services</h2>
            <div className='flex justify-center items-center'>
                <div className='px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10'>
                    {
                        services.map(service => <ServiceBox key={service.id} service={service} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurServices;