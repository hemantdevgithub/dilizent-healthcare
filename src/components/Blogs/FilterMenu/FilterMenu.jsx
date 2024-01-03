import React from 'react';
import CategoryButton from './CategoryButton';

const FilterMenu = () => {
    const categories = [
        { id: 1, category: 'business' },
        { id: 2, category: 'consulting' },
        { id: 3, category: 'digital marketing' },
        { id: 4, category: 'strategy' },
        { id: 5, category: 'finance' }
    ]
    return (
        <div>
            <div className='flex justify-between items-center py-2 px-4 mb-3 rounded-xl text-primary'
                style={{ backgroundImage: 'linear-gradient(60deg, #EEF3FC 0%, #F0F0FF 100%)' }}
            >
                <h3 className='text-xl font-semibold'>Filter</h3>
                <p >Reset</p>
            </div>
            <div className='py-5 rounded-xl'
                style={{ backgroundImage: 'linear-gradient(60deg, #EEF3FC 0%, #F0F0FF 100%)' }}
            >
                <h2 className='text-[25px] font-bold text-secondary ml-9'>Categories</h2>
                <div>
                    {
                        categories.map(category => <CategoryButton key={category.id} category={category}></CategoryButton>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FilterMenu;