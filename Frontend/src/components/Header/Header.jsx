import { UserOutlined } from '@ant-design/icons';
import { Avatar, Flex, Input } from 'antd';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { IconPhone } from '../../assets/icons/IconPhone';
import { IconSearch } from '../../assets/icons/IconSearch';
import { VietnamFlag } from '../../assets/icons/IndiaFlag';
import Logo from '../../assets/icons/Logo';
import './header.scss';
import { useUser } from '../../context';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { getJobs } from '../../service/Apis/job';
import { useState } from 'react';
import { useSearch } from '../../context/SearchContext';
const Header = memo(() => {
    const [ currentSearch, setCurrentSearch ] = useState();
    const { searchQuery, setSearchQuery } = useSearch();
    const { user, logout } = useUser();
    const navigate = useNavigate();
    const handleProfileClick = () => {
        if (!user) {
            navigate('/login');
        } else {
            navigate('/profile-page');
        }
    };
    const handleLogout = () => {
        logout();  // Clear user session and token
        navigate('/');  // Redirect to home page
    };
    const handleSearchInput = (e) => {
        const value = e.target.value;
        setCurrentSearch(value);
        if (value === '') {
            setSearchQuery('');  // Set search data to empty
        }
    };
    const handleSearchEnter = (e) => {
        if (e.key === 'Enter') {
            setSearchQuery(currentSearch);
        }
    };
    return (
        <>
            <div className="header">
                <Flex align="center" justify="space-between" className="header-top">
                    <Flex align="center" gap={24} className="left-content">
                        <Link to="/">Home</Link>
                        <Link to="/find-job">Find Job</Link>
                        <Link to="/#">Find Employers</Link>
                        <Link to="">Dashboard</Link>
                        <Link to="">Job Alerts</Link>
                        <Link to="">Customer Supports</Link>
                    </Flex>
                    <Flex align="center" gap={24} className="right-content">
                        <Flex align="center" gap={8}>
                            <IconPhone />
                            <span>0766748566</span>
                        </Flex>
                        <Flex align="center" gap={8}>
                            <VietnamFlag />
                            <span>  </span>
                        </Flex>
                    </Flex>
                </Flex>
            </div>
            <Flex justify="space-between" className="header-bottom">
                <Flex gap={12}>
                    <Logo />
                    <Flex align="center" className="search-wrapper">
                        <Flex align="center" gap={8} className="flag-wrapper">
                            <VietnamFlag />
                            <span>VietNamese</span>
                        </Flex>
                        <Input
                            placeholder="Job title, keyword, company"
                            prefix={<IconSearch />}
                            value={currentSearch}
                            onChange={handleSearchInput}
                            onKeyDown={handleSearchEnter}
                        />
                    </Flex>
                </Flex>
                <div 
                    onClick={handleProfileClick} 
                    className="flex items-center cursor-pointer p-2 hover:bg-gray-100 rounded transition duration-150"
                >
                    <Avatar className='mr-2' size={48} src={user?.profilePicture || <UserOutlined />} />
                    <Button className="mx-6 flex items-center h-8 hover:h-full" variant="outlined">{user ? user.username : 'Login'}</Button>
                </div>
                {user && (
                    <div className='flex items-center'>
                        <Button className='flex items-center h-8 hover:h-full' variant="outlined" onClick={handleLogout} >Logout</Button>
                    </div>
                )}
            </Flex>
        </>
    );
});

export default Header;
