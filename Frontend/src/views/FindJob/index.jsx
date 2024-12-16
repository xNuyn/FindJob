import React, { memo, useCallback, useMemo, useState, useEffect } from 'react';
import './findJob.scss';
import { Button, Checkbox, Flex, Form, Input, Radio, Typography,Spin } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { IconSearch } from '../../assets/icons/IconSearch';
import { IconLocation } from '../../assets/icons/IconLocation';
import { IconStack } from '../../assets/icons/IconStack';
import JobItem from '../../components/JobItem/JobItem';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { getJobs } from '../../service/Apis/job';
import { useSearch } from '../../context/SearchContext';
const FindJob = memo(() => {
   
    const [jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalJobs, setTotalJobs] = useState(0);
    const [experienceValue, setExperienceValue] = useState(null);
    const [salary, setSalary] = useState(null);
    const [jobLevel, setJobLevel] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { searchQuery } = useSearch();
    const fetchJobs = useCallback(async (page = 1) => {
        setLoading(true);
        setError(null);
        try {
            const params = { 
                experience: experienceValue, 
                salary: salary, 
                jobLevel: jobLevel, 
                page: page,
                limit: 9,
                Query: searchQuery,
            };
            const response = await getJobs(params);
            setJobs(response.data.docs);
            setTotalJobs(response.data.totalDocs);
        } catch (error) {
            console.error("Error fetching jobs:", error);
            setError("Failed to fetch jobs. Please try again later.");
        } finally {
            setLoading(false);
        }
    }, [experienceValue, salary, jobLevel, searchQuery]);

    useEffect(() => {
        fetchJobs(currentPage);
    }, [fetchJobs, currentPage]);

    const companySizeOptions = useMemo(() => [
        { label: '100-499', value: '100-499' },
        { label: '25-99', value: '25-99' },
        { label: '500-999', value: '500-999' },
        { label: '1000-3000', value: '1000-3000' },
        { label: '10-24', value: '10-24' },
        { label: '3000+', value: '3000+' },
        { label: '1-9', value: '1-9' },
    ], []);

    const experienceOptions = useMemo(() => [
        { label: 'Không yêu cầu kinh nghiệm', value: 'no-experience' },
        { label: 'Dưới 1 năm', value: 'under-1-year' },
        { label: '1-3 năm', value: '1-3-years' },
        { label: '3-5 năm', value: '3-5-years' },
        { label: '5-10 năm', value: '5-10-years' },
        { label: 'Trên 10 năm', value: '10-plus-years' },
    ], []);

    const salaryOptions = useMemo(() => [
        { label: 'Thỏa thuận', value: 'negotiable' },
        { label: '5,000,000 - 10,000,000', value: '5000000-10000000' },
        { label: '10,000,000 - 15,000,000', value: '10000000-15000000' },
        { label: '15,000,000 - 20,000,000', value: '15000000-20000000' },
        { label: '20,000,000 - 40,000,000', value: '20000000-40000000' },
        { label: '1,000,000 - 5,000,000', value: '1000000-5000000' },
        { label: 'Trên 40,000,000', value: '40000000-plus' },
    ], []);

    const jobTypeOptions = useMemo(() => [
        { label: 'Full time', value: 'fullTime' },
        { label: 'Part time', value: 'partTime' },
        { label: 'Internship', value: 'internship' },
        { label: 'Remote', value: 'remote' },
        { label: 'Others', value: 'others' },
    ], []);

    const educationOptions = useMemo(() => [
        { label: 'Đại học', value: 'bachelor' },
        { label: 'Cao đẳng', value: 'college' },
        { label: 'Năm 3', value: 'year3' },
        { label: 'Năm 4', value: 'year4' },
        { label: 'Tốt nghiệp', value: 'graduate' },
    ], []);

    const jobLevelOptions = useMemo(() => [
        { label: 'Trưởng nhóm', value: 'teamLead' },
        { label: 'Trưởng/Phó phòng', value: 'departmentHead' },
        { label: 'Nhân viên', value: 'staff' },
        { label: 'Thực tập sinh', value: 'intern' },
        { label: 'Quản lý / Giám sát', value: 'manager' },
    ], []);

    const locationOptions = useMemo(() => [
        { label: 'Hà Nội', value: 'hanoi' },
        { label: 'Hồ Chí Minh', value: 'hochiminh' },
        { label: 'Bình Dương', value: 'binhduong' },
        { label: 'Đà Nẵng', value: 'danang' },
        { label: 'Đồng Nai', value: 'dongnai' },
    ], []);

    const onExperienceChange = e => {
        setExperienceValue(e.target.value);
        setCurrentPage(1);
    };

    const onSalaryChange = e => {
        setSalary(e.target.value);
        setCurrentPage(1);
    };

    const onJobLevelChange = e => {
        setJobLevel(e.target.value);
        setCurrentPage(1);
    };

    const toggleDropdown = useCallback(() => {
        setDropdownVisible(prev => !prev);
    }, []);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <>
            <div className="find-job">
                <Flex align="center" justify="space-between" className="find-job-title">
                    <Typography.Title level={3}>Find Job</Typography.Title>
                </Flex>
                <div className="find-job-details">
                    <Form name="basic" layout="vertical" autoComplete="off" className="form-find-job">
                        <Form.Item name="job">
                            <Input placeholder="Job title, Keyword..." prefix={<IconSearch />} />
                        </Form.Item>
                        <Form.Item name="location">
                            <Input placeholder="Location" prefix={<IconLocation />} />
                        </Form.Item>
                        <Form.Item name="category">
                            <Input placeholder="Select Category" prefix={<IconStack />} />
                        </Form.Item>
                        <div className={`dropdown--label ${dropdownVisible && 'active'}`} onClick={toggleDropdown}>
                            Advance Filter <DownOutlined />
                        </div>
                        <Form.Item>
                            <Button type="primary" onClick={() => fetchJobs(1)}>
                                Find job
                            </Button>
                        </Form.Item>
                    </Form>
                    {dropdownVisible && (
                        <div className="dropdown--menu">
                            <div className="dropdown--item">
                                <Typography.Title level={4}>Experience</Typography.Title>
                                <Radio.Group options={experienceOptions} onChange={onExperienceChange} value={experienceValue} className="options--group" />
                            </div>
                            <div className="dropdown--item">
                                <Typography.Title level={4}>Salary</Typography.Title>
                                <Radio.Group options={salaryOptions} onChange={onSalaryChange} value={salary} className="options--group" />
                            </div>
                            <div className="dropdown--item">
                                <Typography.Title level={4}>Job Type</Typography.Title>
                                <Checkbox.Group options={jobTypeOptions} className="options--group" />
                            </div>
                            <div className="dropdown--item">
                                <Typography.Title level={4}>Education</Typography.Title>
                                <Checkbox.Group options={educationOptions} className="options--group" />
                            </div>
                            <div className="dropdown--item">
                                <Typography.Title level={4}>Job Level</Typography.Title>
                                <Radio.Group options={jobLevelOptions} onChange={onJobLevelChange} value={jobLevel} className="options--group" />
                            </div>
                            <div className="dropdown--item">
                                <Typography.Title level={4}>Location</Typography.Title>
                                <Checkbox.Group options={locationOptions} className="options--group" />
                            </div>
                            <div className="dropdown--item">
                                <Typography.Title level={4}>ComPany size</Typography.Title>
                                <Checkbox.Group options={companySizeOptions} className="options--group" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="find-job-alls">
                {loading ? (
                    <div className="loading-container">
                        <Spin size="large" /> {/* Display spinner */}
                    </div>
                ) : error ? (
                    <Typography.Text type="danger">{error}</Typography.Text>
                ) : (
                    jobs.map((job, index) => <JobItem key={index} job={job} />)
                )}
            </div>
            <div className="flex justify-center items-center">
                <Stack spacing={2}>
                    <Pagination count={Math.ceil(totalJobs / 9)} page={currentPage} onChange={handlePageChange} />
                </Stack>
            </div>
        </>
    );
});

export default FindJob;
