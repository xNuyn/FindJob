import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import './style.css'
export default function Beecome() {
    return (
        <div className="Beecome canchinh">
            <div className="Beecomewrapper">
                <div className="box bg-slate-400">
                    <div className="title">Become a Candidate</div>
                    <div className="mota">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur.</div>
                    <div className="buttonbee">Register now <span><FaArrowRight />
                    </span></div>
                </div>
                <div className="box bg-blue-500">
                    <div className="title text-white">Become a Candidate</div>
                    <div className="mota text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur.</div>
                    <div className="buttonbee bg-white text-blue-500">Register now <span><FaArrowRight />
                    </span></div>
                </div>
            </div>
        </div>
    )
}
