import React from 'react'
import './style.css'
import { FaAddressBook } from "react-icons/fa6";

export default function BoxFeatured() {
  return (
    <div className='wrapper-box'>
        <div className="icon">
            <img src="https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/2-16716834307051333204158.jpg" alt="" />
              <div>
              <div className="title-img">Senior UX Designer <span>Contract Base</span></div>
              <div className='mota-img'><span>Australia</span><span>$30K-$35K</span> <span>4 Days Remaining</span></div>
              </div>
        </div>
        <div className="applynow">
            <div className="iconluu">
                <FaAddressBook />
            </div>
            <div className='btn-apply'>
            Appley Now <span>
            <FaAddressBook />

            </span>
            </div>
        </div>
    </div>
  )
}
