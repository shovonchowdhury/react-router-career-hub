import React, { useEffect, useState } from 'react';
import { getStoredJobs } from '../Utilities/localstorage';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {

    const [storedJobs,setStordJobs]=useState([]);
    const totalJobs=useLoaderData();

    const [displayJobs,setDisplayJobs]=useState([]);

    useEffect(()=>{
        const updatedStordJobs=getStoredJobs();
        if(updatedStordJobs.length > 0)
            {
                const appliedJobs=totalJobs.filter(job=> updatedStordJobs.includes(job.id.toString()));
                setStordJobs(appliedJobs);
                setDisplayJobs(appliedJobs);
            }
        
    },[])

    const handleFilter=(str)=>{

        if(str=='All')
            {
                setDisplayJobs(storedJobs);
            }
        else if(str=='Onsite')
            {
                const tempJobs=storedJobs.filter(job=> job.remote_or_onsite=='Onsite');
                setDisplayJobs(tempJobs);
            }
        else
            {
                const tempJobs=storedJobs.filter(job=> job.remote_or_onsite=='Remote');
                setDisplayJobs(tempJobs); 
            }

    }



    return (
        <div>
            <h2 className='text-4xl font-bold mt-7'>Number of applied Jobs : {storedJobs.length}</h2>

            <details className="dropdown ">
                <summary className="m-1 btn ">Filter By</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 ">
                    <li><a onClick={()=>handleFilter('All')}>All</a></li>
                    <li><a onClick={()=>handleFilter('Onsite')}>Onsite</a></li>
                    <li><a onClick={()=>handleFilter('Remote')}>Remote</a></li>

                </ul>
            </details>

            <div className='space-y-6 mt-4'>
                {
                    displayJobs.map(job=> <AppliedJob job={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;