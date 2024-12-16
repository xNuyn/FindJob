import { Button, Form, Input, Typography, message } from 'antd';
import React, { memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.scss';
import { useUser } from '../../context';
import { getMe } from '../../service/Apis/auth';
import { BASE_URL } from '../../service/Apis/request';

const Login = memo(() => {
    const { setToken, setUser } = useUser();
    const navigate = useNavigate(); // Ensure this is uncommented

    const onFinish = async (values) => {
        try {
            const response = await axios.post(BASE_URL + '/auth/login', {
                email: values.email,
                password: values.password,
            });

            const token = response.data.accessToken;

            if (token) {
                setToken(token);
                localStorage.setItem('token123', token);
                const user = await getMe(token);
                setUser(user.data);
                message.success('Login successful!');
                navigate('/');
            } else {
                throw new Error('Token not found in response');
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Login failed! Please try again.';
            message.error(errorMessage);
        }
    };

    return (
        <div className="login">
            <Typography.Title>Sign in</Typography.Title>
            <span className="login--to-register">
                Don&apos;t have an account?
                <Link to="/register"> Create account</Link>
            </span>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label=""
                    name="email"
                    rules={[{ required: true, message: 'Please fill in your email' }]}
                >
                    <Input placeholder="Email address" />
                </Form.Item>
                <Form.Item
                    label=""
                    name="password"
                    rules={[{ required: true, message: 'Please fill in your password' }]}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>
                <div className="login--footer">
                    <Link to="/forgot-password">Forgot password?</Link>
                </div>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Sign In
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
});

export default Login;
