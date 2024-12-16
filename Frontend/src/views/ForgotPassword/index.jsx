import { Button, Form, Input, Typography } from 'antd';
import React, { memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './forgotPassword.scss';

const ForgotPassword = memo(() => {
    const navigate = useNavigate();

    return (
        <div className="forgot">
            <Typography.Title>Forgot Password</Typography.Title>
            <p className="go-back">
                Go back to
                <Link to="/login"> Sign in</Link>
            </p>
            <p className="go-back">
                Dont have account?
                <Link to="/register"> Create account</Link>
            </p>
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={() => {}}
                autoComplete="off"
            >
                <Form.Item
                    label=""
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please fill in your email',
                        },
                    ]}
                >
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        onClick={() => navigate('/reset-password')}
                    >
                        Reset password
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
});

export default ForgotPassword;
