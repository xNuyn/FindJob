import React, { useState, useEffect } from 'react';
import './profile.scss';
import { Form, Input, Button, Upload, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useUser } from '../../context';
import { updateUser } from '../../service/Apis/user';

const Profile = () => {
    const { user, setUser } = useUser();

    const [form] = Form.useForm();
    const [avatar, setAvatar] = useState(user?.profilePicture || 'https://cdn.flowerstore.vn/wp-content/uploads/2024/09/anh-avatar-doi-ngau-1.jpg');

    useEffect(() => {
        if (user) {
            form.setFieldsValue({
                username: user?.username,
                email: user?.email || '',  // Default to empty if email is missing
                bio: user?.bio || '',       // Default to empty if bio is missing
            });
        }
    }, [user, form]);

    const handleFormSubmit = (values) => {
        // Determine the changed fields by comparing form values with the original user data
        const updatedFields = {};
        
        if (values.username !== user.username) updatedFields.username = values.username;
        if (values.email !== user.email) updatedFields.email = values.email;
        if (values.bio !== user.bio) updatedFields.bio = values.bio;
        if (avatar !== user.profilePicture) updatedFields.profilePicture = avatar;

        // Only call updateUser if there are changes
        if (Object.keys(updatedFields).length > 0) {
            updateUser(user.id, updatedFields)
                .then(() => {
                    setUser({ ...user, ...updatedFields }); // Update the local user state
                    form.setFieldsValue(updatedFields); // Set the updated form values
                })
                .catch((error) => {
                    console.error("Failed to update user:", error);
                });
        }
    };

    const handleChangeAvatar = (info) => {
        if (info.fileList.length > 0) {
            const file = info.fileList[0].originFileObj;
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="settings-page">
            <Typography.Title level={3}>Profile</Typography.Title>
            <Form
                layout="vertical"
                onFinish={handleFormSubmit}
                form={form}
                className="settings-form"
                initialValues={{
                    username: user.username,
                    email: user.email,
                    bio: user.bio,
                }}
            >
                <div className="form-grid">
                    <Form.Item label="Avatar" name="avatar">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img 
                                src={avatar} 
                                alt="Avatar" 
                                style={{ width: 100, height: 100, borderRadius: '50%', marginRight: 16 }} 
                            />
                            <Upload 
                                beforeUpload={() => false}
                                maxCount={1}
                                onChange={handleChangeAvatar}
                            >
                                <Button icon={<UploadOutlined />}>Change Avatar</Button>
                            </Upload>
                        </div>
                    </Form.Item>

                    <div className="form-row">
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please enter your username!' }]}
                        >
                            <Input placeholder="Enter username" />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: 'Please enter your email!' },
                                { type: 'email', message: 'Please enter a valid email!' },
                            ]}
                        >
                            <Input placeholder="Enter email" />
                        </Form.Item>
                    </div>
                </div>

                <Form.Item
                    label="Biography"
                    name="bio"
                >
                    <Input.TextArea
                        placeholder="Write down your biography here. Let the employers know who you are..."
                        rows={4}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Save Changes
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Profile;
