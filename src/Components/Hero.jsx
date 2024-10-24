import React from 'react';
import { Timerbox } from './Timerbox'; // Corrected filename capitalization
import { IoMdCloudDone  } from "react-icons/io";
import { FaRegQuestionCircle } from 'react-icons/fa';
import HeroIMG from "../assets/Hero.png"

export const Hero = () => {
  return (
    <div className="max-w-[1400px] w-11/12 flex flex-col md:flex-row mx-auto justify-between items-center gap-20 my-12 md:pt-5 relative z-10">
    
      <div className="md:w-4/12 flex flex-col gap-2">
        <h1 className="font-semibold text-2xl md:text-4xl text-center md:text-left text-[#FFD801]">
          Everything You Need to Create a Website
        </h1>
        <h2 className="font-semibold text-center md:text-left text-black text-xl">
          Up to <span className="text-blue-700">100%</span> off Hosting + website builder + insta hacking
        </h2>
        <div className="flex gap-1 pt-5 justify-center md:justify-start">
          <IoMdCloudDone color="green" className='w-5 h-5 ' />
          <span className="text-black">Free Domain</span>
          <FaRegQuestionCircle className="w-5 h-6" />
        </div>
        <div className="flex gap-1 justify-center md:justify-start">
          <IoMdCloudDone color="green" className='w-5 h-5 ' />
          <span className="text-black">Free website migration</span>
          <FaRegQuestionCircle className="w-5 h-6 text-blue" />
        </div>
        <div className="flex gap-1 pb-5 justify-center md:justify-start">
          <IoMdCloudDone color="green" className='w-5 h-5 ' />
          <span className="text-black">24/7 Customer Support</span>
          <FaRegQuestionCircle className="w-5 h-6" />
        </div>
        <div className="flex flex-col gap-2 pb-5 justify-center items-center md:items-start text-center md:text-left">
          <div className="flex items-end gap-1 text-black justify-center">
            <span className="font-normal text-xl">₹</span>
            <span className="font-bold text-4xl text-[#2554C7] md:text-5xl">149.00</span>
            <span className="font-normal text-xl">/mo</span>
          </div>
          <h2 className="font-semibold text-black text-xl">
            + 2 Months Free
          </h2>
        </div>
        <div className="max-w-[310px] flex flex-col gap-6 mx-auto md:mx-0">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <Timerbox value="00" />
            <span className="text-black">:</span>
            <Timerbox value="00" />
            <span className="text-black">:</span>
            <Timerbox value="00" />
            <span className="text-black">:</span>
            <Timerbox value="00" />
          </div>
          <button className="text-white  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            <span className='font-bold' >Claim Deal</span> 
          </button>
        </div>
      </div>

      <div className="my-auto mx-auto flex items-center justify-end">
        <img 
          src={HeroIMG} 
          alt="Hero Section Image"
          className="max-w-[840px] md:w-11/12 w-full" 
        />
      </div>
    </div>
  );
};
