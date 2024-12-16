import React, { useState } from 'react'
import { BiBell, BiSearch } from 'react-icons/bi'
import { BsBag } from 'react-icons/bs'
import ReactFlagsSelect from "react-flags-select";
 
export default function SearchJob() {
 
    const [selected, setSelected] = useState("VN");
    return (
        <header className="flex items-center justify-around px-4 py-2 shadow-md">
            <div className="flex-none items-center space-x-2">
                <div className="flex justify-between items-center">
                    <div className="btn-logo flex gap-2 items-center">
                        <BsBag /> <span className="font-bold text-lg">My Job</span>
                    </div>
                </div>
            </div>
            <div className="flex-initial justify-between gap-2 max-w-lg mx-4">
                <div className="btn-drop flex items-center gap-3">
                    {/* <BsBag /> <select name="" id="">
                                    <option value="">India</option>
                                </select> */}
                    <div className="flex flex-row items-center w-50 relative border border-1 w-full p-2 pl-4 ">
                        <div className='flex flex-row gap-2 items-center justify-center'>
                            <ReactFlagsSelect
                                selected={selected}
                                onSelect={(code) => setSelected(code)}
                                // showSelectedLabel={false}
                                selectedSize={18}
                                optionsSize={14}
                                className='flex-none' />
                            {/* Divider */}
                            <span className="border-l h-6 mx-2 flex-initial" />
                            <BiSearch className="text-blue-500 flex-initial" size={32} />
                            <input
                                className="flex-initial p-2 pl-4 outline-none w-full max-w-xl ml-2"
                                type="text"
                                placeholder="Job title, keyword, company"
                            />
                        </div>
                        {/* REact flag selector */}
 
                        {/* Search Input */}
 
                    </div>
                    {/* Search Icon */}
 
 
                </div>
 
 
            </div>
            <div className='flex-initial justify-between gap-2 max-w-lg mx-4'>
                <div className="flex gap-4 items-center">
                    <button className="px-4 py-2 bg-slate-100 text-[#0A65CC] rounded-md w-32">
                        <span>Sign In</span>
                    </button>
                    <button className="px-4 py-2 bg-[#0A65CC] text-slate-100 rounded-md w-32">
                        <span>Post a job</span>
                    </button>
                </div>
            </div>
        </header>
    )
}