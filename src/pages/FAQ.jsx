import React from 'react';
import FAQCollapseCard from '../components/FAQ/FAQCollapseCard';
import TopBanner from '../components/TopBanner/TopBanner';

const FAQ = () => {
    const faqData = [
        {
            id: 1,
            question: "What is your return policy?",
            answer:
                "Our return policy allows you to return items within 30 days of purchase for a full refund. Please make sure the item is unused and in its original packaging.",
        },
        {
            id: 2,
            question: "How can I track my order?",
            answer:
                "You can easily track your order by logging into your account on our website and navigating to the 'Order History' section. There, you'll find detailed information about your order's status and shipping progress.",
        },
        {
            id: 3,
            question: "Do you offer international shipping?",
            answer:
                "Yes, we offer international shipping to most countries. Shipping costs and delivery times may vary depending on your location. Please check our Shipping & Delivery page for more information.",
        },
        {
            id: 4,
            question: "What payment methods do you accept?",
            answer:
                "We accept major credit cards, including Visa, MasterCard, and American Express. Additionally, we also accept PayPal and Apple Pay for your convenience.",
        },
        {
            id: 5,
            question: "Can I change or cancel my order?",
            answer:
                "You can change or cancel your order within 24 hours of placing it. After that, our processing may have already begun, and changes may not be possible. Please contact our customer support for assistance.",
        },
        {
            id: 6,
            question: "What is your warranty policy?",
            answer:
                "We offer a standard one-year warranty on all our products. If you encounter any issues with your purchase within this period, please contact our customer support, and we'll assist you with warranty claims.",
        },
        {
            id: 7,
            question: "How do I reset my password?",
            answer:
                "To reset your password, click on the 'Forgot Password' link on the login page. You'll receive instructions via email on how to reset your password securely.",
        },
        {
            id: 8,
            question: "What are your customer support hours?",
            answer:
                "Our customer support team is available Monday through Friday from 9:00 AM to 6:00 PM (local time). You can reach us via email at support@example.com or by phone at +1-123-456-7890.",
        },
        {
            id: 9,
            question: "How can I return a defective product?",
            answer:
                "If you receive a defective product, please contact our customer support immediately. We will provide you with instructions on how to return the item, and we'll cover the return shipping costs.",
        },
        {
            id: 10,
            question: "Do you offer bulk discounts?",
            answer:
                "Yes, we offer bulk discounts on large orders. Please contact our sales team at sales@example.com to inquire about bulk pricing and discounts for your specific needs.",
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
                        faqData.map(data => <FAQCollapseCard key={data.id} data={data} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default FAQ;