import React from 'react';
import Rating1 from "../assets/rating/rating1.png"
import Rating2 from "../assets/rating/rating2.png"
import Rating3 from "../assets/rating/rating3.png"
import Rating4 from "../assets/rating/rating4.png"

export const Recommend = () => {
  return (
    <div className="max-w-[1150px] w-11/12 flex md:flex-row flex-col md:gap-[10px] gap-[30px] mx-auto justify-around items-center py-[80px]">
      <img src={Rating1} alt="TrustPilot" className="md:w-1/5 w-3/5 my-[20px]" />
      <img src={Rating2} alt="Google" className="md:w-1/5 w-3/5" />
      <img src={Rating3} alt="Hostadvice" className="md:w-1/5 w-3/5" />
      <img src={Rating4} alt="Wpbeginner" className="md:w-1/5 w-3/5" />
    </div>
  );
};
