// import { Button, Form, Input, Typography } from 'antd';
// import React, { memo } from 'react';
// import { Link } from 'react-router-dom';
// import './register.scss';

// const Register = memo(() => {
//     return (
//         <div className="register">
//             <Typography.Title>Create account</Typography.Title>
//             <span className="register--to-login">
//                 Already have account?
//                 <Link to="/login"> Login</Link>
//             </span>
//             <Form
//                 name="basic"
//                 initialValues={{
//                     remember: true,
//                 }}
//                 onFinish={() => {}}
//                 autoComplete="off"
//             >
//                 <div className="register__form--name">
//                     <Form.Item
//                         label=""
//                         name="firstname"
//                         rules={[
//                             {
//                                 required: true,
//                                 message: 'Please fill in your fullname',
//                             },
//                         ]}
//                     >
//                         <Input placeholder="Full name" />
//                     </Form.Item>

//                     <Form.Item
//                         label=""
//                         name="lastname"
//                         rules={[
//                             {
//                                 required: true,
//                                 message: 'Please fill in your username',
//                             },
//                         ]}
//                     >
//                         <Input placeholder="Username" />
//                     </Form.Item>
//                 </div>
//                 <Form.Item
//                     label=""
//                     name="email"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please fill in your email',
//                         },
//                     ]}
//                 >
//                     <Input placeholder="Email address" />
//                 </Form.Item>
//                 <Form.Item
//                     label=""
//                     name="password"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please fill in your password',
//                         },
//                     ]}
//                 >
//                     <Input.Password placeholder="Password" />
//                 </Form.Item>
//                 <Form.Item
//                     label=""
//                     name="confirm_password"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please fill in your confirm password',
//                         },
//                     ]}
//                 >
//                     <Input.Password placeholder="Confirm password" />
//                 </Form.Item>
//                 <Form.Item>
//                     <Button type="primary" htmlType="submit">
//                         Sign up
//                     </Button>
//                 </Form.Item>
//             </Form>
//         </div>
//     );
// });

// export default Register;

import { Button, Form, Input, Typography } from 'antd';
import React, { memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.scss';
import { BASE_URL } from '../../service/Apis/request';

const Register = memo(() => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const { username, email, password } = values;
            const response = await axios.post(BASE_URL + '/auth/register', {
                username,
                email,
                password,
            });

            if (response.status === 200) {
                navigate('/login'); 
            }
        } catch (error) {
            console.error('Registration failed:', error);
            if (error.response) {
                alert(error.response.data.message || 'Registration failed! Please try again.');
            } else {
                alert('Network error! Please try again later.');
            }
        }
    };

    return (
        <div className="register">
            <Typography.Title>Create account</Typography.Title>
            <span className="register--to-login">
                Already have an account?
                <Link to="/login"> Login</Link>
            </span>
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish} // Gọi hàm khi form được gửi
                autoComplete="off"
            >
                <div className="register__form--name">
                    <Form.Item
                        label=""
                        name="fullname" // Đổi tên thành fullname
                        rules={[{ required: true, message: 'Please fill in your fullname' }]}
                    >
                        <Input placeholder="Full name" />
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="username" // Đổi tên thành username
                        rules={[{ required: true, message: 'Please fill in your username' }]}
                    >
                        <Input placeholder="Username" />
                    </Form.Item>
                </div>
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
                <Form.Item
                    label=""
                    name="confirm_password"
                    rules={[{ required: true, message: 'Please fill in your confirm password' }]}
                >
                    <Input.Password placeholder="Confirm password" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Sign up
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
});

export default Register;
