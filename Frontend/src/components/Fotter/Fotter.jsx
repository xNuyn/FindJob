import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import './style.css';

export default function Footer() {
  return (
    <div className="bg-black text-white py-10 mt-8">
      <div className="container mx-auto px-4 lg:px-48">
        <div className="wrapperfotter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 text-center lg:text-left">
          
          {/* Company Info */}
          <div className="boxft space-y-3">
            <div className="title text-xl font-semibold flex justify-center lg:justify-start items-center space-x-2">
              <FaShoppingBag />
              <span>MyJob</span>
            </div>
            <div className="call">Call now: <span>(319) 555-0115</span></div>
            <div className="address">6391 Elgin St. Celina, Delaware 10299, New York, USA</div>
          </div>

          {/* Quick Links */}
          <div className="boxft space-y-2">
            <div className="title text-lg font-semibold">Quick Links</div>
            <div className="link cursor-pointer">About</div>
            <div className="link cursor-pointer">Contact</div>
            <div className="link cursor-pointer">Pricing</div>
            <div className="link cursor-pointer">Blog</div>
          </div>

          {/* Candidate Section */}
          <div className="boxft space-y-2">
            <div className="title text-lg font-semibold">Candidate</div>
            <div className="link cursor-pointer">Browse Jobs</div>
            <div className="link cursor-pointer">Browse Employers</div>
            <div className="link cursor-pointer">Candidate Dashboard</div>
            <div className="link cursor-pointer">Saved Jobs</div>
          </div>

          {/* Employers Section */}
          <div className="boxft space-y-2">
            <div className="title text-lg font-semibold">Employers</div>
            <div className="link cursor-pointer">Post a Job</div>
            <div className="link cursor-pointer">Browse Candidates</div>
            <div className="link cursor-pointer">Employer Dashboard</div>
            <div className="link cursor-pointer">Applications</div>
          </div>

          {/* Support Section */}
          <div className="boxft space-y-2">
            <div className="title text-lg font-semibold">Support</div>
            <div className="link cursor-pointer">FAQs</div>
            <div className="link cursor-pointer">Privacy Policy</div>
            <div className="link cursor-pointer">Terms & Conditions</div>
          </div>
        </div>
      </div>
    </div>
  );
}
