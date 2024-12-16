import React from 'react'
import './style.css'
import BoxFeatured from './BoxFeatured'
import { FaArrowRight } from 'react-icons/fa6'
export default function Featured() {
    return (
     <div className="px-[300px]">
          <div className="wrapperfetu" >
               <div className='flex justify-between items-center'>
               <div className='text-job'>
                    Featured job
                </div>
               
            <div className='v-all flex items-center gap-4'>
                    view All <span><FaArrowRight />
                    </span>
                </div>
               </div>
        </div>
        <div >
            <BoxFeatured />
            <BoxFeatured />
            <BoxFeatured />
            <BoxFeatured />
            <BoxFeatured />
            <BoxFeatured />
            <BoxFeatured />
        </div>
     </div>
    )
}
