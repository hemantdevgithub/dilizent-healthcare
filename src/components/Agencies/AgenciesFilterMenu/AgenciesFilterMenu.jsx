import React from 'react';

const AgenciesFilterMenu = () => {
    const servicesOption = [
        {id: 1, option: 'Business' },
        {id: 2, option: 'Marketing' },
        {id: 3, option: 'Finance' },
    ]
    const countryOptions = [
        {id: 1, option: 'India' },
        {id: 2, option: 'Canada' },
        {id: 3, option: 'United States' },
        {id: 4, option: 'United Arab Emirate' },
    ]
    const stateOptions = [
        {id: 1, option: 'India' },
        {id: 2, option: 'Canada' },
        {id: 3, option: 'United States' },
        {id: 4, option: 'United Arab Emirate' },
    ]
    return (
        <div>
            <div className='flex justify-between items-center py-2 px-4 mb-3 rounded-xl text-primary'
                style={{ backgroundImage: 'linear-gradient(60deg, #EEF3FC 0%, #F0F0FF 100%)' }}
            >
                <h3 className='text-xl font-semibold'>Filter</h3>
                <button>Reset</button>
            </div>
            <div className='py-3 rounded-xl'
                style={{ backgroundImage: 'linear-gradient(60deg, #EEF3FC 0%, #F0F0FF 100%)' }}
            >
                <div className='w-[80%] mx-auto my-3'>
                    <select type="text" className='input h-[50px] w-full my-2 text-accent pl-8 bg-white  focus:border-primary focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg' placeholder='Services' name="" id="">
                        <option>Services</option>
                        {
                            servicesOption.map(s => <option key={s.id}>{s.option}</option>)
                        }
                    </select>
                    <select type="text" className='input h-[50px] w-full my-2 text-accent pl-8 bg-white  focus:border-primary focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg' placeholder='Services' name="" id="">
                        <option>Countries</option>
                        {
                            countryOptions.map(s => <option key={s.id}>{s.option}</option>)
                        }
                    </select>
                    <select type="text" className='input h-[50px] w-full my-2 text-accent pl-8 bg-white  focus:border-primary focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg' placeholder='Services' name="" id="">
                        <option>States</option>
                        {
                            stateOptions.map(s => <option key={s.id}>{s.option}</option>)
                        }
                    </select>
                </div>
            </div>
        </div>
    );
};

export default AgenciesFilterMenu;