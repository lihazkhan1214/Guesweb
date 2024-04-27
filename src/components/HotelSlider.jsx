import React from 'react';
import managerimg from "../assets/manager.png";
import hoteimg from "../assets/manager.png";

function HotelSlider() {
  return (
    <div className='flex jusitfy-center padding-x py-10 bg-[#FFFFFF]'>

        <div className="left flex flex-col gap-5">

            <h1 className="text-[56px] font-medium text-[#000000] w-[588px]">Find The Best Hotel For
Accommodation</h1>
<p className="text-[#000000] text-lg text-justify w-[588px] ">Discover an oasis of luxury at our exquisite hotel, nestled in the heart of
Egypt. Experience unrivaled comfort in our elegantly designed rooms 
and suites.  Explore the vibrant city with ease from our convenient central location.</p>

<p className="text-[#000000] text-lg text-justify w-[588px] ">Book your stay today and let us create an unforgettable experience for you.</p>

<div className="flex gap-5 ">
<img className='w-[70px] h-[70px] rounded-full' src={managerimg} alt="" />
<div className="flex flex-col gap-2">
    <h2 className="text-[#FF9200] font-medium text-[20px]">Manager</h2>
    
    <h2 className="text-[#000000] font-medium italic text-[20px]">George</h2>


</div>


</div>
        </div>


        <div className="right">

            rightside
        </div>
    
    </div>
  )
}

export default HotelSlider
