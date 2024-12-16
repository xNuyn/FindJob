import { Flex } from 'antd';
import React, { memo } from 'react';
import { LocationIcon } from '../../assets/icons/LocationIcon';
import './jobItem.scss';
import { useNavigate } from 'react-router-dom';

const JobItem = memo(({ job }) => { // Add job prop
    const navigate = useNavigate();

    // Set default values for job properties
    const companyName = job?.CompanyName || "Unknown Company";
    const companyImageURL = job?.CompanyImageURL || "path/to/default-image.jpg"; // Provide a default image URL
    const jobAddress = job?.JobAddress || "Not specified";
    const jobTitle = job?.JobTitle || "Job Title Not Available";
    const jobType = job?.JobType || "Job Type Not Specified";
    const salary = job?.Salary || "Salary Not Specified";
    const careerLevel = job?.CareerLevel || "Career Level Not Specified";

    return (
        <div className="job-item" onClick={() => navigate(`/job-details/${job?.JobID}`)}>   
            <Flex gap={8} align="center" className="job-item-info">
                <img src={companyImageURL} alt={`${companyName} logo`} className="company-logo" />
                <Flex vertical gap={12}>
                    <Flex align="center" gap={4}>
                        <span>{companyName}</span>
                        <span className="featured">{careerLevel}</span>
                    </Flex>
                    <Flex gap={4} align="center" className="location">
                        <LocationIcon />
                        <span>{jobAddress}</span> {/* Job Address */}
                    </Flex>
                </Flex>
            </Flex>
            <h3 className="job-item-title">{jobTitle}</h3> {/* Job Title */}
            <Flex className="job-item-details">
                <span>{jobType}</span> {/* Job Type */}
                <span>{salary}</span> {/* Salary */}
            </Flex>
        </div>
    );
});

export default JobItem;
