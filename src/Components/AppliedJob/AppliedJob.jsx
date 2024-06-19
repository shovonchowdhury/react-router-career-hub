import React from 'react';
import { GrLocation } from "react-icons/gr";
import { LuCircleDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";
import './Aplliedjob.css'

const AppliedJob = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description}=job;
    return (
        <div className='flex justify-between p-12 items-center border border-[#E8E8E8]'>
            <div className='flex items-center gap-8 '>
                <div className='bg-[#F4F4F4] py-20 px-12'>
                    <img className='img-size' src={logo} alt="" />
                </div>
                <div className='space-y-3'>
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

                </div>
            </div>
            <div>
                <Link to={`/job/${id}`}>
                    <button className='font-extrabold text-xl text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-5 py-4 rounded'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default AppliedJob;