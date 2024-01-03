import React from 'react';
import FAQCollapseCard from '../components/FAQ/FAQCollapseCard';
import TopBanner from '../components/TopBanner/TopBanner';

const FAQ = () => {
    const faqs = [
        {
            id: 1,
            question: "What healthcare IT solutions do you provide?",
            answer:
                "We offer a range of healthcare IT solutions, including Electronic Health Records (EHR), Health Information Exchange (HIE), Telehealth services, and more. Our solutions are designed to enhance patient care, streamline operations, and improve overall healthcare management.",
        },
        {
            id: 2,
            question: "How can your IT solutions benefit healthcare providers?",
            answer:
                "Our healthcare IT solutions aim to improve efficiency, reduce administrative burdens, and enhance the overall quality of patient care. By implementing our systems, healthcare providers can experience streamlined workflows, improved data accuracy, and better collaboration among healthcare professionals.",
        },
        {
            id: 3,
            question: "What security measures do you have in place to protect patient data?",
            answer:
                "Ensuring the security and privacy of patient data is a top priority. We implement robust security measures, including encryption, access controls, and regular security audits, to safeguard patient information and comply with healthcare data protection regulations.",
        },
        {
            id: 4,
            question: "Can your IT solutions integrate with existing healthcare systems?",
            answer:
                "Yes, our healthcare IT solutions are designed to seamlessly integrate with existing systems, such as Electronic Medical Records (EMR) and laboratory information systems. This integration helps in maintaining data continuity and facilitates a more cohesive healthcare ecosystem.",
        },
        {
            id: 5,
            question: "How do you ensure compliance with healthcare regulations?",
            answer:
                "Ensuring compliance with healthcare regulations is a fundamental aspect of our IT solutions. We stay updated with the latest healthcare regulations and tailor our systems to adhere to standards such as HIPAA, ensuring that healthcare organizations remain compliant and avoid legal issues.",
        },
        {
            id: 6,
            question: "Do you provide training for healthcare staff using your IT solutions?",
            answer:
                "Yes, we offer comprehensive training programs for healthcare staff to ensure they are proficient in using our IT solutions. Training includes system functionalities, data security best practices, and ongoing support to maximize the benefits of our healthcare IT systems.",
        },
        {
            id: 7,
            question: "What is the implementation process for your healthcare IT solutions?",
            answer:
                "Our implementation process involves a thorough assessment of the healthcare environment, customization of solutions to meet specific needs, and a phased rollout plan. We work closely with healthcare organizations to ensure a smooth transition and minimal disruptions during implementation.",
        },
        {
            id: 8,
            question: "How can healthcare providers contact your support team?",
            answer:
                "Our customer support team is available 24/7 to assist healthcare providers. You can contact us through our dedicated support portal, via email at support@healthcareitcompany.com, or by phone at +1-123-456-7890 for immediate assistance.",
        },
        {
            id: 9,
            question: "Can your IT solutions assist in improving patient engagement?",
            answer:
                "Yes, our healthcare IT solutions include features aimed at improving patient engagement. This may include patient portals, appointment scheduling systems, and secure communication channels, all designed to enhance the overall patient experience and involvement in their healthcare journey.",
        },
        {
            id: 10,
            question: "What advancements in healthcare technology are you currently working on?",
            answer:
                "We are committed to staying at the forefront of healthcare technology. Our research and development team is actively working on advancements such as AI-driven diagnostics, interoperability enhancements, and innovative solutions to address emerging challenges in the healthcare industry.",
        },
    ];
    return (
        <div>
            <TopBanner
                heading={"Frequently Asked Questions"}
                pageName={"FAQ"}
                img={"/blog/top-banner.jpg"}
            />
            <div className='my-20 px-2'>
                <div className='lg:w-[500px] cursor-pointer group mx-auto'>
                    <h2 className='text-xl lg:text-4xl text-center text-black font-rubik font-bold'>
                        Frequently Asked Questions
                    </h2>
                    <div className='h-2 w-[150px] group-hover:w-full duration-300 mt-3 mx-auto bg-gradient-to-l to-[#291fbc] from-[#488fed]' />
                </div>
                <div className='lg:w-[70%] mx-auto transition my-10'>
                    {
                        faqs.map(data => <FAQCollapseCard key={data.id} data={data} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default FAQ;