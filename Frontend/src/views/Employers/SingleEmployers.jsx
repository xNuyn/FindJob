import React, { memo } from 'react';
import './singleEmployers.scss';
const ContactOverviewItem = memo(({ icon, label, data }) => {
    return (
        <div className="contact-overview-item">
            {icon}
            <div className="text-container">
                <span className="label">{label}</span>
                <span className="data">{data}</span>
            </div>
        </div>
    );
});
export default ContactOverviewItem;