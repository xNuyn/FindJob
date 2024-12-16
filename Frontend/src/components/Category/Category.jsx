import React from 'react'
import Boxcategory from '../Boxcategory/Boxcategory'
import { FaArrowRight } from 'react-icons/fa'

export default function Category() {
  return (
    <div className="px-[300px]  bg-blur py-20">
     <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl '>Popular category</h2>
        <div className='flex gap-4 items-center'>
          <p className='text-sm text-blue-500 mx-2'>View All </p><FaArrowRight className='text-blue-500' />

        </div>
      </div>
      <div className='flex justify-between my-5'>
        <Boxcategory />
        <Boxcategory />
        <Boxcategory />
        <Boxcategory />
      </div>
      <div className='flex justify-between my-5'>
        <Boxcategory />
        <Boxcategory />
        <Boxcategory />
        <Boxcategory />
      </div>
     </div>
  )
}
