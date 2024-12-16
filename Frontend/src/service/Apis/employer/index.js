import request from "../request";

export const getEmployerId = async (jobId) => {
    return request.get(`/companies/${jobId}`);
}

export const getJobByCompanyId = async (companyId,filterDto) => {
    return request.get(`/companies/${companyId}/jobs`, { params: filterDto });
}