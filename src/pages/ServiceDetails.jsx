import React from 'react';
import TopBanner from '../components/TopBanner/TopBanner';
import ServiceDetail from '../components/ServiceDetails/ServiceDetail/ServiceDetail';
import { useLocation } from 'react-router-dom';

const ServiceDetails = () => {
    const details = [
        {
            id: 1,
            heading: 'Custom Software Development',
            description: 'Our team of experienced developers specialize in creating custom software solutions tailored to meet the unique needs of your business. Whether you require a mobile application, enterprise software, or a specialized web application, we employ cutting-edge technologies and industry best practices to deliver high-quality, scalable, and user-friendly software that enhances your operational efficiency and productivity.',
            services: [
                "Requirement gathering and analysis",
                "Custom application development",
                "Quality assurance and testing",
                "Deployment and ongoing support",
            ]
        },
        {
            id: 2,
            heading: 'Web Development and Design',
            description: 'Our web development and design services aim to create visually stunning and highly functional websites that reflect your brand identity and engage your target audience. From responsive design to intuitive user interfaces, we ensure that your website is optimized for both desktop and mobile devices. With a focus on usability and conversion rates, we employ the latest web development technologies to deliver a seamless user experience that drives traffic and boosts your online presence.',
            services: [
                "Responsive website design",
                "Front-end and back-end development",
                "E-commerce development",
                "Content management system integration",
            ]
        },
        {
            id: 3,
            heading: 'IT Consulting and Strategy',
            description: 'Our IT consulting and strategy services help businesses align their technology infrastructure with their overall business objectives. Our experienced consultants work closely with you to assess your current IT systems, identify gaps and opportunities, and develop a comprehensive roadmap to optimize your technology investments. From IT infrastructure planning to software selection and implementation, we provide strategic recommendations that enhance efficiency, reduce costs, and drive business growth.',
            services: [
                "Technology assessments and audits",
                "IT infrastructure planning and optimization",
                "Digital transformation strategy",
                "Cloud migration planning",
                "Cloud computing strategy",
                "Technology roadmap development"
            ]
        },
        {
            id: 4,
            heading: 'Cybersecurity Solutions',
            description: "In today's digital landscape, safeguarding your business from cyber threats is of paramount importance.Our cybersecurity solutions offer comprehensive protection against a wide range of threats, including malware, ransomware, data breaches, and unauthorized access attempts.Our team of experts employs advanced security measures such as network monitoring, vulnerability assessments, firewall configuration, and employee training to ensure your business remains secure and compliant with industry regulations.",
            services: [
                "Vulnerability assessments",
                "Firewall and network security",
                "Intrusion detection and prevention",
                "Employee cybersecurity training",
                "Incident response and disaster recovery planning"
            ]
        },
        {
            id: 5,
            heading: 'Managed IT Services',
            description: "Our managed IT services offer proactive, round-the-clock monitoring and support to keep your IT infrastructure running smoothly. With our team of dedicated experts, we provide continuous monitoring, maintenance, and troubleshooting services to identify and resolve potential issues before they impact your business operations. From hardware and software management to system upgrades and data backups, our managed IT services ensure that your technology is reliable, secure, and optimized for maximum performance.",
            services: [
                "24/7 system monitoring and maintenance",
                "Help desk and technical support",
                "Hardware and software asset management",
                "IT infrastructure optimization",
                "Data backup and disaster recovery",
                "IT vendor management"
            ]
        },
        {
            id: 6,
            heading: 'Mobile App Development',
            description: 'Our mobile app development team creates native and cross-platform mobile applications that cater to your business needs. We focus on delivering user-friendly and feature-rich apps that provide seamless experiences across different devices and platforms.',
            services: [
                "iOS and Android app development",
                "UI/UX design for mobile applications",
                "Integration with backend systems",
                "App testing and debugging",
                "App deployment to app stores",
                "Post-launch support and updates"
            ]
        },
        {
            id: 7,
            heading: 'Cloud Services',
            description: 'Our cloud services enable you to harness the power of cloud computing for scalability, flexibility, and cost-efficiency. From cloud strategy development to migration and management, we help you leverage cloud technologies for improved business outcomes.',
            services: [
                "Cloud migration planning and execution",
                "Cloud architecture design",
                "Infrastructure as a Service (IaaS)",
                "Platform as a Service (PaaS)",
                "Software as a Service (SaaS)",
                "Cloud security and compliance"
            ]
        }, {
            id: 8,
            heading: 'UI/UX Design',
            description: 'Our UI/UX design services focus on creating intuitive and visually appealing user interfaces. We combine user-centered design principles with modern aesthetics to enhance user engagement and satisfaction across various digital platforms.',
            services: [
                "User research and persona development",
                "Wireframing and prototyping",
                "Visual design and branding",
                "Usability testing and refinement",
                "Responsive design for multiple devices",
                "User experience optimization"
            ]
        },
        {
            id: 9,
            heading: 'E-commerce Solutions',
            description: 'Our e-commerce solutions help you establish a robust online store that drives sales and enhances customer experiences. From building secure payment gateways to implementing inventory management, we ensure a seamless e-commerce journey.',
            services: [
                "E-commerce website development",
                "Payment gateway integration",
                "Shopping cart and checkout optimization",
                "Inventory and order management",
                "Security and fraud prevention",
                "Performance monitoring and optimization"
            ]
        },
        {
            id: 10,
            heading: 'Data Analytics',
            description: 'Our data analytics services empower you to make informed business decisions by extracting valuable insights from your data. We use advanced analytics techniques to uncover patterns, trends, and opportunities for growth.',
            services: [
                "Data collection and cleansing",
                "Data visualization and reporting",
                "Predictive and prescriptive analytics",
                "Business intelligence solutions",
                "Data-driven decision-making support",
                "Data privacy and compliance"
            ]
        },
        {
            id: 11,
            heading: 'IT Infrastructure Management',
            description: 'Our IT infrastructure management services ensure that your network and server environments operate efficiently and securely. We handle hardware and software updates, monitor performance, and implement disaster recovery strategies.',
            services: [
                "Network design and configuration",
                "Server setup and maintenance",
                "Performance monitoring and optimization",
                "Patch management and updates",
                "Backup and disaster recovery planning",
                "Network security and compliance"
            ]
        },
        {
            id: 12,
            heading: 'Software Testing and Quality Assurance',
            description: 'Our software testing and quality assurance services ensure that your applications are reliable, functional, and user-friendly. We conduct thorough testing processes to identify and address issues before they impact users.',
            services: [
                "Test planning and strategy",
                "Functional and regression testing",
                "Performance and load testing",
                "User acceptance testing (UAT)",
                "Bug tracking and reporting",
                "Continuous quality improvement"
            ]
        }
    ]
    const location = useLocation();
    const serviceDetail = details.find(s => s.id === location.state.id);
    return (
        <div>
            <div>
                <TopBanner
                    heading={"Service Details"}
                    img={'/services/service-bg.jpg'}
                    pageName={'Service Details'}
                ></TopBanner>
                <ServiceDetail serviceDetail={serviceDetail} />
            </div>
        </div>
    );
};

export default ServiceDetails;