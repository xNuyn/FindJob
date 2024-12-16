import { Button, Flex, Form, Input, Modal,Spin,Typography } from 'antd';
import React, { memo, useEffect, useState } from 'react';
import { IconCalendar } from '../../assets/icons/IconCalendar';
import { IconClock } from '../../assets/icons/IconClock';
import { IconEducation } from '../../assets/icons/IconEducation';
import { IconLink } from '../../assets/icons/IconLink';
import { IconLocationBig } from '../../assets/icons/IconLocationBig';
import { IconMail } from '../../assets/icons/IconMail';
import { IconPhoneSmall } from '../../assets/icons/IconPhoneSmall';
import { IconSalary } from '../../assets/icons/IconSalary';
import { IconSave } from '../../assets/icons/IconSave';
import './jobDetails.scss';
import JobOverviewItem from './JobOverviewItem';
import JobItem from '../../components/JobItem/JobItem';
import { useParams, useNavigate } from 'react-router-dom';
import { getJobById } from '../../service/Apis/job';


const JobDetails = memo(() => {
    const [error, setError] = useState(null);
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);
    const { jobId } = useParams(); // Retrieve job ID from URL
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [relatedJobs, setRelatedJobs] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchJob = async () => {
            try {
                setLoading(true); // Set loading to true before API call
                const response = await getJobById(jobId);
                setJob(response.data);
                setRelatedJobs(response.data.RelatedJobs);
            } catch (error) {
                console.error("Error fetching job:", error);
                console.error("Failed to fetch job details. Please try again later."); // Show user-friendly error message
            } finally {
                setLoading(false); // Set loading to false after API call
            }
        };
        
        if (jobId) {
            fetchJob();
        } else {
            console.error("Invalid job ID.");
            setLoading(false);
        }
    }, [jobId]);
    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="flex flex-col items-center">
                    <Spin size="large" />
                    <p className="mt-4 text-xl text-gray-600">Loading job details...</p>
                </div>
            </div>
        );
    }

    if (!job) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl text-red-600">No job details found.</p>
            </div>
        );
    }

    return (
        <>
            <div className="job-details">
                <Flex
                    align="center"
                    justify="space-between"
                    className="job-details-label"
                >
                    <h3>Job Details</h3>
                    <span>
                        Home / Find Job Label / Graphics & Design / Job Details
                    </span>
                </Flex>
            </div>
            <Flex justify="space-between" className="job-details-content">
                <Flex className="job-details-title" gap={24} flex={1}>
                    <div className='cursor-pointer'>
                    <img 
                        src={job.CompanyImageURL} 
                        alt={`${job.CompanyName} logo`} 
                        className="company-logo" 
                        onClick={() => navigate(`/find-employer/${job.CompanyID}`)}
                    />
                    </div>
                    <Flex justify="space-around" vertical>
                        <Flex className="job-title" align="center" gap={12}>
                            <h4>{job.JobTitle}</h4>
                            <span className="featured">Featured</span>
                            <span className="fullTime">{job.JobType}</span>
                        </Flex>
                        <Flex align="center" gap={12}>
                            <Flex align="center" gap={8}>
                                <IconLink />
                                <span>https://instagram.com</span>
                            </Flex>
                            <Flex align="center" gap={8}>
                                <IconPhoneSmall />
                                <span>(406) 555-0120</span>
                            </Flex>
                            <Flex align="center" gap={8}>
                                <IconMail />
                                <span>career@instagram.com</span>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex
                    vertical
                    gap={8}
                    justify="space-around"
                    className="apply-btn"
                >
                    <Flex align="center" gap={12}>
                        <span className="btn-save">
                            <IconSave />
                        </span>
                        <Button type="primary" onClick={() => setOpen(true)}>
                            Apply Now
                        </Button>
                    </Flex>
                    <Flex
                        align="center"
                        gap={4}
                        className="expired-date"
                        justify="flex-end"
                    >
                        <span>Job expire in:</span>
                        <span> {job.SubmissionDeadline.year} - {job.SubmissionDeadline.month} - {job.SubmissionDeadline.day} </span>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                className="job-details-description"
                align="flex-start"
                gap={30}
            >
                <div className="job-description">
                    <h3>Job Description</h3>
                    <p>
                        {job.JobDescription}
                    </p>
                    <h3>Job Benefits</h3>
                    <p>
                        {job.Benefits}
                    </p>
                    <div className="job-list-items">
                        <h3>Responsibilities</h3>
                        <ul>
                            <li>Quisque semper gravida est et consectetur.</li>
                            <li>
                                Curabitur blandit lorem velit, vitae pretium leo
                                placerat eget.
                            </li>
                            <li>Morbi mattis in ipsum ac tempus.</li>
                            <li>
                                Curabitur eu vehicula libero. Vestibulum sed
                                purus ullamcorper, lobortis lectus nec.
                            </li>
                            <li>
                                vulputate turpis. Quisque ante odio, iaculis a
                                porttitor sit amet.
                            </li>
                            <li>
                                lobortis vel lectus. Nulla at risus ut diam.
                            </li>
                            <li>
                                commodo feugiat. Nullam laoreet, diam placerat
                                dapibus tincidunt.
                            </li>
                            <li>
                                odio metus posuere lorem, id condimentum erat
                                velit nec neque.
                            </li>
                            <li>dui sodales ut. Curabitur tempus augue.</li>
                        </ul>
                    </div>
                </div>
                <div className="job-information">
                    <Flex vertical gap={20}>
                        <div className="job-overview">
                            <h3>Job Overview</h3>
                            <div className="job-overview-list">
                                <JobOverviewItem
                                    icon={<IconCalendar />}
                                    label="job posted"
                                    data="14 June, 2021"
                                />
                                <JobOverviewItem
                                    icon={<IconClock />}
                                    label="job expired in"
                                    data="14 June, 2021"
                                />
                                <JobOverviewItem
                                    icon={<IconEducation />}
                                    label="education"
                                    data="Graduation"
                                />
                                <JobOverviewItem
                                    icon={<IconSalary />}
                                    label="salery"
                                    data={job.Salary}
                                />
                                <JobOverviewItem
                                    icon={<IconLocationBig />}
                                    label="location"
                                    data= {job.JobAddress}
                                />
                                <JobOverviewItem
                                    icon={<IconEducation />}
                                    label="job type"
                                    data="Full Time"
                                />
                                <JobOverviewItem
                                    icon={<IconEducation />}
                                    label="experience"
                                    data={job.YearsofExperience}
                                />
                            </div>
                        </div>
                        <Flex vertical gap={20} className="social-overview">
                            <Flex gap={12} align="center">
                            <div>
                    <img 
                        src={job.CompanyImageURL} 
                        alt={`${job.CompanyName} logo`} 
                        className="company-logo" 
                        onClick={() => navigate(`/find-employer/${job.CompanyID}`)}
                    />
                    </div>
                                <Flex vertical gap={12} className="social-name">
                                    <h3>{job.CompanyName}</h3>
                                    <p>Social networking service</p>
                                </Flex>
                            </Flex>
                            <Flex
                                vertical
                                gap={20}
                                className="social-overview-infor"
                            >
                                <Flex
                                    align="center"
                                    justify="space-between"
                                    className="social-overview-infor-item"
                                >
                                    <span>Founded in:</span>
                                    <span>March 21, 2006</span>
                                </Flex>
                                <Flex
                                    align="center"
                                    justify="space-between"
                                    className="social-overview-infor-item"
                                >
                                    <span>Organization type:</span>
                                    <span>Private Company</span>
                                </Flex>
                                <Flex
                                    align="center"
                                    justify="space-between"
                                    className="social-overview-infor-item"
                                >
                                    <span>Company size:</span>
                                    <span>{job.CompanySize} Employers</span>
                                </Flex>
                                <Flex
                                    align="center"
                                    justify="space-between"
                                    className="social-overview-infor-item"
                                >
                                    <span>Phone:</span>
                                    <span>(406) 555-0120</span>
                                </Flex>
                                <Flex
                                    align="center"
                                    justify="space-between"
                                    className="social-overview-infor-item"
                                >
                                    <span>Email:</span>
                                    <span>twitter@gmail.com</span>
                                </Flex>
                                <Flex
                                    align="center"
                                    justify="space-between"
                                    className="social-overview-infor-item"
                                >
                                    <span>Address:</span>
                                    <span>{job.JobAddress}</span>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </div>
            </Flex>
            <div className="job-details-related">
                <h2>Related Jobs</h2>
                <div className="job-related">
                {loading ? (
                    <div className="loading-container">
                        <Spin size="large" /> {/* Display spinner */}
                    </div>
                ) : error ? (
                    <Typography.Text type="danger">{error}</Typography.Text>
                ) : (
                    relatedJobs.map((relatedJobs, index) => <JobItem key={index} job={relatedJobs} />)
                )}
                </div>
            </div>
            <Modal
                title="Apply Job: Senior UX Designer"
                open={open}
                onCancel={() => setOpen(false)}
                footer={[
                    <Flex key="footer" align="center" justify="space-between">
                        <Button key="back" onClick={() => {}}>
                            Cancel
                        </Button>
                        ,
                        <Button
                            htmlType="submit"
                            type="primary"
                            form="apply-job"
                        >
                            Apply now
                        </Button>
                    </Flex>,
                ]}
            >
                <Form
                    form={form}
                    name="apply-job"
                    id="apply-job"
                    layout="vertical"
                    onFinish={() => {}}
                >
                    <Form.Item name="resume" label="Choose Resume">
                        <Input placeholder="Select" />
                    </Form.Item>
                    <Form.Item name="coverLetter" label="Cover Letter">
                        <Input.TextArea placeholder="Cover Letter" rows={4} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
});

export default JobDetails;