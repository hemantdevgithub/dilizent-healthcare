import React, { useState } from 'react';
import { TfiArrowCircleDown, TfiArrowCircleUp } from 'react-icons/tfi';

const FAQCollapseCard = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='transition my-3'>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="p-5 border rounded-xl"
            >
                <div className='flex text-lg lg:text-2xl items-center justify-between w-full'>
                    <h3 className=' font-poppins'>{data.question}</h3>
                    <p className=''>
                        {!isOpen ? <TfiArrowCircleDown /> : <TfiArrowCircleUp />}
                    </p>
                </div>

            </div>
            {
                isOpen &&
                <div className='bg-gray-100 mt-1 rounded-xl p-5'>
                    <p>{data.answer}</p>
                </div>
            }
        </div>
    );
};

export default FAQCollapseCard;