import React from 'react';

export default function BoxFindJob({ so, chu, imgSrc }) {
    return (
        <div className='flex items-center gap-3 py-8 pl-8 pr-20 bg-white'>
            <div className='bg-blue-300 w-10 h-10 flex justify-center items-center'>
                <img src={imgSrc} alt={chu} className='w-8 h-8' />
            </div>
            <div>
                <p className='text-sm font-bold'>{so}</p>
                <p className='text-xs font-thin'>{chu}</p>
            </div>
        </div>
    );
}
