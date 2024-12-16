import React, { memo } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Fotter/Fotter';
import './styles.scss';

const FindJobLayout = memo(({ children }) => {
    return (
        <div className="find-job--layout">
            <Header />
            {children}
            <Footer />
        </div>
    );
});

export default FindJobLayout;
