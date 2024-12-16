import { Avatar } from 'antd'
import React from 'react'
import { BiAbacus, BiUpload } from 'react-icons/bi'
import { FaIntercom } from 'react-icons/fa'

export default function Modal() {
    return (
        <div className='w-[1024px] mx-auto p-4 bg-white absolute top-[1%] left-[20%]'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <div className='w-20 object-contain rounded-full'><Avatar /></div>
                    <div>
                        <div className='font-bold '>Esther Howard</div>
                        <div className='font-light'>Website Designer (UI/UX)</div>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <BiAbacus />
                    <div className='bg-[#0A65CC] px-3 py-1 text-white '>Send Mail</div>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className="left">
                    <p className='font-bold text-xl '>BIOGRAPHY</p>
                    <p className='text-sm'>
                        I've been passionate about graphic design and digital art from an early age with a keen interest in Website and Mobile Application User Interfaces. I can create high-quality and aesthetically pleasing designs in a quick turnaround time. Check out the portfolio section of my profile to see samples of my work and feel free to discuss your designing needs. I mostly use Adobe Photoshop, Illustrator, XD and Figma. *Website User Experience and Interface (UI/UX) Design - for all kinds of Professional and Personal websites. *Mobile Application User Experience and Interface Design - for all kinds of IOS/Android and Hybrid Mobile Applications. *Wireframe Designs.
                    </p>
                    <div className='my-4'>
                        <p className='font-bold text-xl '>BIOGRAPHY</p>
                        <p className='my-4'>Dear Sir,</p>
                        <p>I am writing to express my interest in the fourth grade instructional position that is currently available in the Fort Wayne Community School System. I learned of the opening through a notice
                            posted on JobZone, IPFW’s job database. I am confident that my academic background and curriculum development skills would be successfully utilized in this teaching position.
                        </p>
                        <p>I have just completed my Bachelor of Science degree in Elementary Education and have successfully completed Praxis I and Praxis II. During my student teaching experience, I developed and initiated a three-week curriculum sequence on animal species and earth resources. This collaborative unit involved working with three other third grade teachers within my team, and culminated in a field trip to the Indianapolis Zoo Animal Research Unit.


                        </p>

                    </div>
                    <p className='font-bold text-xl'>Follow me Social Media</p>
                </div>
                <div className="right">
                    <div className="my-5 px-10 py-2 border-blur ">
                        <div className='flex gap-10 items-center w-[264px]  '>
                            <div className='text-left '>
                                <BiAbacus />
                                <div className=''>
                                    <p className=''>DATE OF BIRTH</p>
                                    <p className='font-bold from-black'>14 June, 2021</p>
                                </div>
                            </div>
                            <div className='text-left '>
                                <BiAbacus />
                                <div className=''>
                                    <p className=''>DATE OF BIRTH</p>
                                    <p className='font-bold from-black'>14 June, 2021</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-10 items-center w-[264px] '>
                            <div className='text-left '>
                                <BiAbacus />
                                <div className=''>
                                    <p className=''>DATE OF BIRTH</p>
                                    <p className='font-bold from-black'>14 June, 2021</p>
                                </div>
                            </div>
                            <div className='text-left '>
                                <BiAbacus />
                                <div className=''>
                                    <p className=''>DATE OF BIRTH</p>
                                    <p className='font-bold from-black'>14 June, 2021</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-10 items-center w-[264px] '>
                            <div className='text-left '>
                                <BiAbacus />
                                <div className=''>
                                    <p className=''>DATE OF BIRTH</p>
                                    <p className='font-bold from-black'>14 June, 2021</p>
                                </div>
                            </div>
                            <div className='text-left '>
                                <BiAbacus />
                                <div className=''>
                                    <p className=''>DATE OF BIRTH</p>
                                    <p className='font-bold from-black'>14 June, 2021</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-10 items-center w-[264px] '>
                            <div className='text-left '>
                                <BiAbacus />
                                <div className=''>
                                    <p className=''>DATE OF BIRTH</p>
                                    <p className='font-bold from-black'>14 June, 2021</p>
                                </div>
                            </div>
                            <div className='text-left '>
                                <BiAbacus />
                                <div className=''>
                                    <p className=''>DATE OF BIRTH</p>
                                    <p className='font-bold from-black'>14 June, 2021</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='my-4 border-blur py-2 px-10'>
                        <div className='text-xl'>Download My Resume</div>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-4 items-center'>
                                <BiAbacus />
                                <div>
                                    <p className=''>Esther Howard</p>
                                    <p className='font-bold'>PDF</p>
                                </div>
                            </div>
                            <div className='w-20'>
                                <BiUpload />
                            </div>
                        </div>
                    </div>

                    <div className="my-4 border-blur px-10">
                        <div className='px-4 py-2'>
                            <div className='text-lg'>Contact Information</div>
                            <div className='flex gap-4 items-center'>
                                <FaIntercom />
                                <div>
                                    <p >website</p>
                                    <p className='font-bold '>www.estherhoward.com</p>
                                </div>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <FaIntercom />
                                <div>
                                    <p >website</p>
                                    <p className='font-bold '>www.estherhoward.com</p>
                                </div>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <FaIntercom />
                                <div>
                                    <p >website</p>
                                    <p className='font-bold '>www.estherhoward.com</p>
                                </div>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <FaIntercom />
                                <div>
                                    <p >website</p>
                                    <p className='font-bold '>www.estherhoward.com</p>
                                </div>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <FaIntercom />
                                <div>
                                    <p >website</p>
                                    <p className='font-bold '>www.estherhoward.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
