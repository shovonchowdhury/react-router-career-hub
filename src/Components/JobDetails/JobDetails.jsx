import { useLoaderData, useParams } from "react-router-dom";
import { LuCircleDollarSign } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { FiMail } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storeJobById } from "../Utilities/localstorage";

const JobDetails = () => {

    const jobs=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id);
    // console.log(jobs);

    const job= jobs.find(job=> job.id === idInt);

    const {job_description,job_responsibility,educational_requirements,experiences,salary,job_title,contact_information}=job;

    const {phone,email,address}=contact_information;

    const handleApplyNow=()=>{
        
        toast('Applied Successfully!!!');
        storeJobById(id);
    }
   
    return (
        <div>
            <h2 className="text-3xl font-extrabold text-center mt-8 mb-24">Job Details</h2>
            <div className="grid grid-cols-4">
                <div className=" col-span-3 space-y-6 p-4">
                    <div>
                        <span className="font-extrabold">Job Description: </span>
                        <span className="text-[#757575]">{job_description}</span>
                    </div>
                    <div>
                        <span className="font-extrabold">Job Responsibility: </span>
                        <span className="text-[#757575]">{job_responsibility}</span>
                    </div>
                    <div>
                        <span className="font-extrabold">Educational Requirements: </span>
                        <span className="text-[#757575] font-semibold">{educational_requirements}</span>
                    </div>
                    <div>
                        <span className="font-extrabold">Experience: </span>
                        <span className="text-[#757575] font-semibold">{experiences}</span>
                    </div>
                </div>
                <div>
                    <div className="p-7 bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF19] rounded-lg space-y-8">
                        <div className="space-y-6">
                            <h2 className="text-xl font-extrabold ">Job Details</h2>
                            <div className="border-b-2 border-[#9873FF] opacity-30"></div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <LuCircleDollarSign className="text-[#9873FF] text-xl"/>
                                    <p className="text-xl font-extrabold">Salary : <span className="font-semibold text-[#757575]">{`${salary} (Per Month)`} </span> </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <IoCalendarOutline className="text-[#9873FF] text-xl"/>
                                    <p className="text-xl font-extrabold">Job Title : <span className="font-semibold text-[#757575]">{`${job_title}`} </span> </p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-xl font-extrabold ">Contact Information</h2>
                            <div className="border-b-2 border-[#9873FF] opacity-30"></div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <LuPhone className="text-[#9873FF] text-xl"/>
                                    <p className="text-xl font-extrabold">Phone : <span className="font-semibold text-[#757575]">{`${phone}`} </span> </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FiMail className="text-[#9873FF] text-xl"/>
                                    <p className="text-xl font-extrabold">Email : <span className="font-semibold text-[#757575]">{`${email}`} </span> </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <GrLocation className="text-[#9873FF] text-3xl"/>
                                    <p className="text-xl font-extrabold">Address : <span className="font-semibold text-[#757575]">{`${address}`} </span> </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button onClick={handleApplyNow} className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF]  w-full mt-6 rounded-lg py-5 text-xl font-extrabold text-white">Apply Now</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default JobDetails;