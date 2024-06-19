import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs,setJobs]=useState([]);

    const [displayJobLength,setDisplayJobLength]=useState(4);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=> setJobs(data))
    },[])

    const handleViewMore=()=>{
        if(displayJobLength==4)
            setDisplayJobLength(jobs.length);
        else
            setDisplayJobLength(4);
    }

    return (
        <div className="space-y-10">
            <div className="text-center">
                <h2 className="text-5xl">Featured Jobs:{jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6 ">
                {
                    jobs.slice(0,displayJobLength).map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>

            <div className="text-center">
                <button onClick={handleViewMore} className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-3 px-5 rounded text-[#FFF] text-xl font-extrabold '>{displayJobLength==4 ? 'See All Jobs' : 'See less'}</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;