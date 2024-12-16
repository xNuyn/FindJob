import React from 'react'
import { FaExpandArrowsAlt } from 'react-icons/fa'

export default function Boxcategory() {
  return (
    <div className='px-4 py-2  flex gap-5 items-center'>
        <div>
        <FaExpandArrowsAlt className='text-blue-500 text-sm bg-blue-200 p-6' />

        </div>
        <div className='my-3 py-2'>
            <p className='text-sm font-medium'> 
            Graphics & Design
            </p>
            <p className=''>357 Open position</p>
        </div>
    </div>
  )
}
