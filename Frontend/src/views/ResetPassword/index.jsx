import { Button, Form, Input, Typography } from 'antd';
import React, { memo } from 'react';
import Logo from '../../assets/icons/Logo';
import './resetPassword.scss';

const ResetPassword = memo(() => {
    return (
        <div className="reset">
            <div className="reset--logo">
                <Logo />
            </div>
            <div className="reset--content">
                <Typography.Title>Reset Password</Typography.Title>
                <Typography.Text type="secondary" className="reset--intro">
                    Duis luctus interdum metus, ut consectetur ante consectetur
                    sed. Suspendisse euismod viverra massa sit amet mollis.
                </Typography.Text>
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
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please fill in your pasword',
                            },
                        ]}
                    >
                        <Input placeholder="Password" />
                    </Form.Item>
                    <Form.Item
                        label=""
                        name="confirmPassword"
                        rules={[
                            {
                                required: true,
                                message: 'Please fill in your confirm password',
                            },
                        ]}
                    >
                        <Input placeholder="Confirm password" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Reset password
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
});

export default ResetPassword;
