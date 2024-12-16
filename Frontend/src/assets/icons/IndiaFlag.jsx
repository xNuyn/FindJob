import React, { memo } from 'react';

export const VietnamFlag = memo(() => {
    return (
        <svg
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect width="24" height="16" fill="url(#pattern0)" />
            <defs>
                <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="#image0"
                        transform="scale(0.000833333 0.00125)"
                    />
                </pattern>
                <image
                    id="image0"
                    width="1200"
                    height="800"
                    xlinkHref="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1024px-Flag_of_Vietnam.svg.png"
                />
            </defs>
        </svg>
    );
});
