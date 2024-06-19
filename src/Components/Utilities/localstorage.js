const getStoredJobs=()=>{
    const storedJobs=localStorage.getItem('applied-jobs');
    if(storedJobs)
        {
            return JSON.parse(storedJobs) ;
        }
    return [];
}

const storeJobById=(id)=>{
    const storedJobs=getStoredJobs();
    const exist=storedJobs.find(jobId=> jobId===id);
    if(!exist)
        {
            storedJobs.push(id);
            localStorage.setItem('applied-jobs', JSON.stringify(storedJobs));
        } 

}

export {storeJobById,getStoredJobs};