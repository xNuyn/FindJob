import { Flex } from 'antd';
import React, { memo } from 'react';
import Logo from '../assets/icons/Logo';
import './styles.scss';

const RegisterLayout = memo(({ children }) => {
    return (
        <Flex className="register-layout">
            <div className="register-layout--left">
                <Logo />
                <div className="register-layout--content">{children}</div>
            </div>
            <div className="register-layout--right" />
        </Flex>
    );
});

export default RegisterLayout;
