import React from 'react';
import { CheckmarkIcon } from './CustomSVG';
import rating from '../assets/rating/rating.webp';
import trustpilot from '../assets/trustpilot.webp';
import Vector1 from '../assets/Vector1.webp';

function Promo(){
  return (
    <div className="w-full">
      <div className="max-w-[1150px] w-11/12 flex flex-col gap-[50px] mx-auto justify-around items-center py-[80px]">
        <div className="flex md:flex-row flex-col items-center justify-between gap-[70px]">
          <div className="flex flex-col">
            <h1 className="font-semibold md:text-4xl text-2xl text-[#2F1C6A]">
              All-In-One Website Solution
            </h1>
            <div className="flex flex-row gap-[5px] pt-[30px]">
              <CheckmarkIcon />
              <span className="text-[#727272]">Manage up to 100 websites.</span>
            </div>
            <div className="flex flex-row gap-[5px] pt-[25px]">
              <CheckmarkIcon />
              <span className="text-[#727272]">Register a domain name for free.</span>
            </div>
            <div className="flex flex-row gap-[5px] pt-[25px]">
              <CheckmarkIcon />
              <span className="text-[#727272]">Set up a professional business email address.</span>
            </div>
            <div className="flex flex-row gap-[5px] pt-[25px]">
              <CheckmarkIcon />
              <span className="text-[#727272]">Optimize your workflow with managed WordPress hosting.</span>
            </div>
            <div className="flex flex-row gap-[5px] pt-[25px]">
              <CheckmarkIcon />
              <span className="text-[#727272]">Launch websites quickly with our Website Builder.</span>
            </div>
          </div>
          <div className="my-auto mx-auto flex items-center md:justify-end justify-center">
            <img src={Vector1} className="max-w-[624px] w-11/12" alt="Vector Illustration" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-[30px] md:justify-between items-center">
          <div className="md:w-11/12 w-full max-w-[360px] bg-[#FAFBFF]">
            <div className="flex flex-col p-8">
              <div className="flex flex-col gap-[15px]">
                <img src={trustpilot} className="w-8/12" alt="Trustpilot" />
                <span style={{ color: '#2F1C6A' }}>
                  Easy to use, intuitive and fluid interface, support always willing to assist in problems that may appear.
                </span>
              </div>
              <div className="flex flex-row pt-[10px] justify-between">
                <img src={rating} className="w-6/12" alt="Rating" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-label="arrow-right"
                  style={{ width: '24px', height: '24px' }}
                >
                  <path fill="#673EE6" d="M8.29498 16.885L12.875 12.295L8.29498 7.705L9.70498 6.295L15.705 12.295L9.70498 18.295L8.29498 16.885Z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="md:w-11/12 w-full max-w-[360px] bg-[#FAFBFF]">
            <div className="flex flex-col p-8">
              <div className="flex flex-col gap-[15px]">
                <img src={trustpilot} className="w-8/12" alt="Trustpilot" />
                <span style={{ color: '#2F1C6A' }}>
                  Easy to use platform. Very good and fast support. Highly recommended for students and professionals.
                </span>
              </div>
              <div className="flex flex-row pt-[10px] justify-between">
                <img src={rating} className="w-6/12" alt="Rating" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-label="arrow-right"
                  style={{ width: '24px', height: '24px' }}
                >
                  <path fill="#673EE6" d="M8.29498 16.885L12.875 12.295L8.29498 7.705L9.70498 6.295L15.705 12.295L9.70498 18.295L8.29498 16.885Z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="md:w-11/12 w-full max-w-[360px] bg-[#FAFBFF]">
            <div className="flex flex-col p-8">
              <div className="flex flex-col gap-[15px]">
                <img src={trustpilot} className="w-8/12" alt="Trustpilot" />
                <span style={{ color: '#2F1C6A' }}>
                  Even though I am a newbie in this world it has been very easy for me to understand and manage my site.
                </span>
              </div>
              <div className="flex flex-row pt-[10px] justify-between">
                <img src={rating} className="w-6/12" alt="Rating" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-label="arrow-right"
                  style={{ width: '24px', height: '24px' }}
                >
                  <path fill="#673EE6" d="M8.29498 16.885L12.875 12.295L8.29498 7.705L9.70498 6.295L15.705 12.295L9.70498 18.295L8.29498 16.885Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
