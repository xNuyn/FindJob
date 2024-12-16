import React, { memo } from 'react';
import './jobDetails.scss';
const JobOverviewItem = memo(({ icon, label, data }) => {
    return (
        <div className="overview-item">
            {icon}
            <span className="label">{label}</span>
            <span className="data">{data}</span>
        </div>
    );
});
export default JobOverviewItem;