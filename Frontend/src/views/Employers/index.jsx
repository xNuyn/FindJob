import { Button, Flex, Spin, Typography } from 'antd';
import React, {useRef, memo, useState } from 'react';
import { IconCalendar } from '../../assets/icons/IconCalendar';
import { IconClock } from '../../assets/icons/IconClock';
import { IconEducation } from '../../assets/icons/IconEducation';
import { IconMail } from '../../assets/icons/IconMail';
import { IconPhone } from '../../assets/icons/IconPhone';
import { IconSalary } from '../../assets/icons/IconSalary';
import './singleEmployers.scss';
import { useEffect } from 'react';
import JobOverviewItem from '../JobDetails/JobOverviewItem';
import ContactOverviewItem from './SingleEmployers';
import JobItem from '../../components/JobItem/JobItem';
import { IconLink } from '../../assets/icons/IconLink';
import FacebookIcon from '../../assets/icons/FacebookIcon';
import TwitterIcon from '../../assets/icons/TwitterIcon';
import PinterestIcon from '../../assets/icons/PinterestIcon';
import YoutubeIcon from '../../assets/icons/YoutubeIcon';
import InstagramIcon from '../../assets/icons/InstagramIcon';
import { useParams } from 'react-router-dom';
import { getEmployerId, getJobByCompanyId } from '../../service/Apis/employer';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
const SingleEmployers = memo(() => {
    const positionRef = useRef(null);

    const scrollToPosition = () => {
        if (positionRef.current) {
            positionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    const [totalJobs, setTotalJobs] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const { employerId } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [jobCompany, setJobCompany] = useState([]);
    const [error, setError] = useState(null);

    // Fetch employer details once on mount
    useEffect(() => {
        const fetchEmployerDetails = async () => {
            setError(null);
            try {
                const jobResponse = await getEmployerId(employerId);
                setJob(jobResponse.data);
            } catch (error) {
                console.error("Error fetching employer details:", error);
                setError("Failed to fetch employer details.");
            }
        };
        
        if (employerId) {
            fetchEmployerDetails();
        } else {
            console.error("Invalid employer ID.");
        }
    }, [employerId]);

    // Fetch job listings when currentPage or employerId changes
    useEffect(() => {
        const fetchJobListings = async () => {
            setError(null);
            setLoading(true);
            try {
                const jobCompanyResponse = await getJobByCompanyId(employerId, { page: currentPage, limit: 3 });
                setJobCompany(jobCompanyResponse.data.docs);
                setTotalJobs(jobCompanyResponse.data.totalDocs);
            } catch (error) {
                console.error("Error fetching job listings:", error);
                setError("Failed to fetch job listings. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        
        if (employerId) {
            fetchJobListings();
        }
    }, [employerId, currentPage]);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    if (loading && !job) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Spin size="large" />
                <p className="mt-4 text-xl text-gray-600">Loading job details...</p>
            </div>
        );
    }

    if (!job) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl text-red-600">No Employer details found.</p>
            </div>
        );
    }


    return (
        <>
            <div className="company-details">
                <Flex
                    align="center"
                    justify="space-between"
                    className="company-details-label"
                >
                    {/* <h3>{job.CompanyName}</h3> */}
                    <span>Home / Find Job / Single Employers</span>
                </Flex>
            </div>
            <Flex justify="space-between" className="company-details-content">
                <Flex className="company-details-title" gap={24} flex={1}>
                    <div>
                    <img 
                        src={job.CompanyImageURL} 
                        alt={`${job.CompanyName} logo`} 
                        className="company-logo" 
                    />
                    </div>
                    <Flex justify="space-around" vertical>
                        <Flex className="company-title" align="center" gap={12}>
                            <h4>{job.CompanyName}</h4>
                        </Flex>
                        <Flex align="center" gap={12}>
                            <Flex align="center" gap={8}>
                                <span>Information Technology(IT)</span>
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
                        <Button type="primary" onClick={scrollToPosition}>
                            View Open Position
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                className="company-details-description"
                align="flex-start"
                gap={30}
            >
                <div className="company-description">
                    <h3>Description</h3>
                    <p>
                       {job.CompanyOverview}
                    </p>
                    <br></br>
                    <div className="company-list-items">
                        <h3>Company Benefits</h3>
                        <p>
                            Donec dignissim nunc eu tellus malesuada fermentum.
                            Sed blandit in magna at accumsan. Etiam imperdiet
                            massa aliquam, consectetur leo in, auctor neque.
                        </p>
                        <br></br>
                        <ul>
                            <li>In hac habitasse platea dictumst.</li>
                            <li>
                                Sed aliquet, arcu eget pretium bibendum, odio
                                enim rutrum arcu.
                            </li>
                            <li>Vestibulum id vestibulum odio.</li>
                            <li>
                                Etiam libero ante accumsan id tellus venenatis
                                rhoncus vulputate velit.
                            </li>
                            <li>
                                Nam condimentum sit amet ipsum id malesuada.
                            </li>
                        </ul>
                    </div>
                    <br></br>
                    <h3>Company Vision</h3>
                    <p>
                        Praesent ultrices mauris at nisi euismod, ut venenatis
                        augue blandit. Etiam massa risus, accumsan nec tempus
                        nec, venenatis in nisl. Maecenas nulla ex, blandit in
                        magna id, pellentesque facilisis sapien. In feugiat
                        auctor mi, eget commodo lectus convallis ac.
                    </p>
                    <br></br>
                    <div className="custom-share-profile">
                        <span className="custom-share-title">
                            Share profile:
                        </span>
                        <div className="share-item">
                            <FacebookIcon />
                            <span className="share-label icon-facebook">
                                Facebook
                            </span>
                        </div>
                        <div className="share-item">
                            <TwitterIcon />
                            <span className="share-label icon-twitter">
                                Twitter
                            </span>
                        </div>
                        <div className="share-item">
                            <PinterestIcon />
                            <span className="share-label icon-pinterest">
                                Pinterest
                            </span>
                        </div>
                    </div>
                </div>
                <div className="company-information">
                    <Flex vertical gap={20}>
                        <div className="company-overview">
                            <div className="company-overview-list">
                                <JobOverviewItem
                                    icon={<IconCalendar />}
                                    label="founder in"
                                    data="14 June, 2021"
                                />
                                <JobOverviewItem
                                    icon={<IconClock />}
                                    label="organization type"
                                    data="Private Company"
                                />
                                <JobOverviewItem
                                    icon={<IconSalary />}
                                    label="Team Size"
                                    data={`${job.CompanySize} Candidates`} // Fixed syntax
                                />
                                <JobOverviewItem
                                    icon={<IconEducation />}
                                    label="industry types"
                                    data="Technology"
                                />
                            </div>
                        </div>
                        <Flex
                            vertical
                            gap={20}
                            className="company-social-overview"
                        >
                            <Flex gap={12} align="center">
                                <Flex
                                    vertical
                                    gap={12}
                                    className="company-social-name"
                                >
                                    <h3>Contact Information</h3>
                                </Flex>
                            </Flex>
                            <Flex
                                vertical
                                gap={20}
                                className="company-social-overview-infor"
                            >
                                <ContactOverviewItem
                                    icon={<IconLink />}
                                    label="website"
                                    data="www.estherhoward.com"
                                />
                                <hr></hr>
                                <ContactOverviewItem
                                    icon={<IconPhone />}
                                    label="phone"
                                    data="+1-202-555-0141"
                                />
                                <hr></hr>
                                <ContactOverviewItem
                                    icon={<IconMail />}
                                    label="Address"
                                    data={job.CompanyAddress}
                                />
                            </Flex>
                        </Flex>
                        <div className="company-overview">
                            <h3>Follow us on:</h3>
                            <div className="social-container">
                                <div className="social--icon">
                                    <FacebookIcon />
                                </div>
                                <div className="social--icon">
                                    <TwitterIcon />
                                </div>
                                <div className="social--icon">
                                    <InstagramIcon />
                                </div>
                                <div className="social--icon">
                                    <YoutubeIcon />
                                </div>
                            </div>
                        </div>
                    </Flex>
                </div>
            </Flex>
            <br></br>
            <hr></hr>
            <div className="company-details-related" ref={positionRef} id='position'>
                <h2>Open Position</h2>
                <div className="company-related">
                {loading && <Typography.Text>Loading jobs...</Typography.Text>}
                {error && <Typography.Text type="danger">{error}</Typography.Text>}
                {jobCompany.map((jobCompany, index) => <JobItem key={index} job={jobCompany} />)}
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Stack spacing={2}>
                    <Pagination count={Math.ceil(totalJobs / 3)} page={currentPage} onChange={handlePageChange} />
                </Stack>
            </div>
        </>
    );
});

export default SingleEmployers;
