import React from 'react'
import { CiStar } from 'react-icons/ci'
import { FaKickstarterK } from 'react-icons/fa6'
import './style.css'
export default function Testimonial() {
  return (
  <div className='canchinh bg-slate-100 '>
  <div className='Testimonial '>
        <div className="title">Clients Testimonial</div>
      <div className='flex justify-between items-center my-6 gap-10 '>
      <div className="Testimonialwrapper-box">
            <div className="iconstar">
                <CiStar /> <CiStar /><CiStar /><CiStar /><CiStar />
            </div>
            <div className="text">“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”</div>
            <div className="mota">
                <img src="https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/2-16716834307051333204158.jpg" alt="" />
                <div className="textanh">
                    <h5>Robert Fox</h5>
                    <p>UI/UX Designer</p>
                </div>
                <FaKickstarterK />

            </div>
        </div>
        <div className="Testimonialwrapper-box">
            <div className="iconstar">
                <CiStar /> <CiStar /><CiStar /><CiStar /><CiStar />
            </div>
            <div className="text">“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”</div>
            <div className="mota">
                <img src="https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/2-16716834307051333204158.jpg" alt="" />
                <div className="textanh">
                    <h5>Robert Fox</h5>
                    <p>UI/UX Designer</p>
                </div>
                <FaKickstarterK />

            </div>
        </div>
        <div className="Testimonialwrapper-box">
            <div className="iconstar">
                <CiStar /> <CiStar /><CiStar /><CiStar /><CiStar />
            </div>
            <div className="text">“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”</div>
            <div className="mota">
                <img src="https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/2-16716834307051333204158.jpg" alt="" />
                <div className="textanh">
                    <h5>Robert Fox</h5>
                    <p>UI/UX Designer</p>
                </div>
                <FaKickstarterK />

            </div>
        </div>
      </div>
    </div>
  </div>
  )
}
