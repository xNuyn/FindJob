import React from 'react'
import { BiLocationPlus, BiSearch, BiSelection, BiSolidLocationPlus } from 'react-icons/bi'

export default function FindEmpoyee() {
    return (
        <div className='bg-[#F1F2F4] px-[300px]  py-10'><div className="flex justify-between py-12 items-center  ">
            <div className='text-lg font-semibold '>Find Employers</div>
            <div className='flex gap-5'>
                <span className='text-[#767F8C]'>Home/ <span className='text-[#18191C]'>Find Employers</span></span>
            </div>
        </div>
            <div className="flex p-2 gap-4 justify-between bg-white">
                <div className="flex gap-4 items-center">
                    <BiSearch />
                    <input className='py-4 px-2 w-[512px]' type="text" placeholder='Job tittle, Keyword...' />
                </div>
                <div className="flex gap-4 items-center">
                    <BiLocationPlus />
                    <input type="text" className='py-4 px-2 w-[321px]' placeholder='Location' />
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex gap-3 items-center">
                        <BiSolidLocationPlus />
                        <input type="text" className='py-4 px-2 w-[321px]' placeholder='Select Category' />
                    </div>
                    <BiSelection />
                    <div className="bg-[#0A65CC] py-4 px-2 w-max text-white">
                        Find Job
                    </div>
                </div>
            </div></div>
    )
}
