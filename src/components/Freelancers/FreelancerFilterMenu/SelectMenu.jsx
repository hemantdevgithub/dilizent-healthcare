import React from 'react';

const SelectMenu = ({optionName, options}) => {
    return (
        <>
            <select type="text" className='input h-[50px] w-full my-2 text-accent pl-8 bg-white  focus:border-primary focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg' placeholder='Services' name="" id="">
                <option>{optionName}</option>
                {
                    options.map(s => <option key={s.id}>{s.option}</option>)
                }
            </select>
        </>
    );
};

export default SelectMenu;