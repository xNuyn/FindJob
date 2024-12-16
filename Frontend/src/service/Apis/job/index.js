import request from "../request";

export const getJobs = async (dtoFilter) => {
    return request.get("/jobs", { params: dtoFilter });
}
export const getJobById = async (jobId) => {
    return request.get(`/jobs/${jobId}`);
}
