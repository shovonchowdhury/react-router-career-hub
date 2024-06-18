import React from 'react';
import './Job.css'
import { CiLocationOn } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { LuCircleDollarSign } from "react-icons/lu";

const Job = ({job}) => {

    const {logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description}=job;
    return (
        <div className='border-[#E8E8E8] border p-10 rounded-lg space-y-4'>
            <img src={logo} alt="" className='img-size' />
            <h3 className='text-[#474747] text-2xl font-extrabold'>{job_title}</h3>
            <h3 className='text-[#757575] text-xl font-semibold'>{company_name}</h3>

            <div className='space-x-4'>
                <button className='button-style'>{remote_or_onsite}</button>
                <button className='button-style'>{job_type}</button>
            </div>

            <div className='text-[#757575] text-xl font-semibold flex gap-6'>
                <div className='flex items-center gap-2'>
                    <GrLocation />
                    <p >{location}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <LuCircleDollarSign />
                    <p >Salary: {salary}</p>
                </div>

            </div>

            <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-3 px-5 rounded text-[#FFF] text-xl font-extrabold'>View Details</button>
        </div>
    );
};

export default Job;