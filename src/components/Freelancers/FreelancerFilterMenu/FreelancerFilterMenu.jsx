import React from 'react';
import { expertiseOptions, expertiseSubOptions, skillsOptions, educationOptions, engagementOptions, workTimeOptions, workModelOptions, experienceOption, workPermitOptions, stateOptions, countryOptions } from '../Options/options.js'
import SelectMenu from './SelectMenu.jsx';
const FreelancerFilterMenu = () => {
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
                    <SelectMenu optionName={'Expertise'} options={expertiseOptions}></SelectMenu>
                    <SelectMenu optionName={'Sub Expertise'} options={expertiseSubOptions}></SelectMenu>
                    <SelectMenu optionName={'Skills'} options={skillsOptions}></SelectMenu>
                    <SelectMenu optionName={'Countries'} options={countryOptions}></SelectMenu>
                    <SelectMenu optionName={'States'} options={stateOptions}></SelectMenu>
                    <SelectMenu optionName={'Education'} options={educationOptions}></SelectMenu>
                    <SelectMenu optionName={'Engagement Type'} options={engagementOptions}></SelectMenu>
                    <SelectMenu optionName={'Experience'} options={experienceOption}></SelectMenu>
                    <SelectMenu optionName={'Work Time Zone'} options={workTimeOptions}></SelectMenu>
                    <SelectMenu optionName={'Work Model'} options={workModelOptions}></SelectMenu>
                    <SelectMenu optionName={'Work Permit Status'} options={workPermitOptions}></SelectMenu>
                </div>
            </div>
        </div>
    );
};

export default FreelancerFilterMenu;