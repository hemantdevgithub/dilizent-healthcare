import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CategoryButton = ({category}) => {
    return (
        <button className='bg-white w-[80%] my-2 mx-auto rounded-xl py-2 px-4 flex justify-between items-center
            hover:bg-primary text-secondary hover:text-white focus:bg-primary focus:text-white duration-200'
        >
            <span className='text-[16px]  uppercase'>{category.category}</span>
            <FaArrowRight className=''/>
        </button>
    );
};

export default CategoryButton;