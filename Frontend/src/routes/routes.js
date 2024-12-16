// import React from 'react'
import { useRoutes } from 'react-router-dom';
import FindJobLayout from '../layouts/FindJobLayout';
import RegisterLayout from '../layouts/RegisterLayout';
import FindJob from '../views/FindJob';
import ForgotPassword from '../views/ForgotPassword';
import Login from '../views/Login';
import Register from '../views/Register';
import ResetPassword from '../views/ResetPassword';
import JobDetails from '../views/JobDetails';
import Home from '../views/Home/home';
import Profile from '../views/Profile';
import SingleEmployers from '../views/Employers';

export default function RouteComponent() {
    const routeElements = useRoutes([
        {
            path: '/',
            element: (
                <FindJobLayout>
                    <Home />
                </FindJobLayout>
            ),
        },
        {
            path: '/login',
            element: (
                <RegisterLayout>
                    <Login />
                </RegisterLayout>
            ),
        },
        {
            path: '/register',
            element: (
                <RegisterLayout>
                    <Register />
                </RegisterLayout>
            ),
        },
        {
            path: '/forgot-password',
            element: (
                <RegisterLayout>
                    <ForgotPassword />
                </RegisterLayout>
            ),
        },
        {
            path: '/reset-password',
            element: <ResetPassword />,
        },
        {
            path: '/find-job',
            element: (
                <FindJobLayout>
                    <FindJob />
                </FindJobLayout>
            ),
        },
        {
            path: '/find-employer/:employerId',
            element: (
                <FindJobLayout>
                    <SingleEmployers />
                </FindJobLayout>
            ),
        },
        {
            path: '/job-details/:jobId',
            element: (
                <FindJobLayout>
                    <JobDetails />
                </FindJobLayout>
            ),
        },
        {
            path: '/profile-page',
            element: (
                <FindJobLayout>
                    <Profile />
                </FindJobLayout>
            ),
        },
    ]);
    return routeElements;
}
