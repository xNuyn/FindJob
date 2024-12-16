import React from 'react'
import { BiLocationPlus } from 'react-icons/bi'

export default function BoxCandidate({onClick }) {
    return (
        <div onClick={onClick}>

            <div className="border-blur flex justify-between  p-5  my-3 cursor-pointer ">
                <div className="flex gap-4 items-center ">
                    <img className='w-24' src="https://images2.thanhnien.vn/528068263637045248/2023/4/23/edit-truc-anh-16822518118551137084698.png" alt="" />
                    <div><p className='font-bold text-xl'>Cody Fisher</p>
                        <p>Marketing Officer</p>
                        <div className='flex gap-3 items-center'>
                            <span>New York</span> <BiLocationPlus />

                            <span>3 Years experience</span>
                        </div>

                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <BiLocationPlus />
                    <div className="py-2 px-1 bg-[#E7F0FA] text-[#0A65CC]">
                        View profile
                    </div>
                </div>
            </div>
        </div>
    )
}
