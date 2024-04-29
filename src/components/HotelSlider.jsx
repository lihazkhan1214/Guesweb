import React,{useRef} from 'react';
import managerimg from "../assets/manager.png";
import hoteimg from "../assets/hotel.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const slideitems=[{
  heading:"Find The Best Hotel For Accommodation",
  para1:"Discover an oasis of luxury at our exquisite hotel, nestled in the heart of Egypt. Experience unrivaled comfort in our elegantly designed rooms and suites.  Explore the vibrant city with ease from our convenient central location.",
  para2:`Book your stay today and let us create an unforgettable experience for you.`,
  img:`${hoteimg}`


},
{
  heading:"Find The Best Hotel For Accommodation",
  para1:"Discover an oasis of luxury at our exquisite hotel, nestled in the heart of Egypt. Experience unrivaled comfort in our elegantly designed rooms and suites.  Explore the vibrant city with ease from our convenient central location.",
  para2:`Book your stay today and let us create an unforgettable experience for ME.`,
  img:`${hoteimg}`


},
{
  heading:"Find The Best Hotel For Accommodation",
  para1:"Discover an oasis of luxury at our exquisite hotel, nestled in the heart of Egypt. Experience unrivaled comfort in our elegantly designed rooms and suites.  Explore the vibrant city with ease from our convenient central location.",
  para2:`Book your stay today and let us create an unforgettable experience for you.`,
  img:`${hoteimg}`


},

]


function HotelSlider() {

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return ( <>

    <Slider
        
        {...settings}
      >
{
  slideitems.map((item,ind)=>(<>
      <div className='flex jusitfy-center flex-wrap gap-5 padding-x py-10 bg-[#FFFFFF]'>
  
  
 
        <div className="left xl:pt-[140px] flex flex-col gap-5">

            <h1 className=" text-[36px] sm:text-[56px] font-medium text-[#000000] sm:w-[588px]">{item.heading}</h1>
<p className="text-[#000000] text-lg text-justify sm:w-[588px] ">{item.para1}</p>

<p className="text-[#000000] text-lg text-justify sm:w-[588px] ">{item.para2}</p>

<div className="flex gap-5 ">
<img className='w-[70px] h-[70px] rounded-full' src={managerimg} alt="" />
<div className="flex flex-col gap-2">
    <h2 className="text-[#FF9200] font-medium text-[20px]">Manager</h2>
    
    <h2 className="text-[#000000] font-medium italic text-[20px]">George</h2>


</div>


</div>
        </div>


        <div className="right sm:w-[563px]">

            <img className='sm:h-[550px]w-[320px] w-full' src={hoteimg} alt="" />
        </div>
        </div>
        </>))
}
        </Slider>
    
   


   

<div style={{ textAlign: "center" ,top:"50px"}}>
        <button className="button" onClick={previous}>
          P
        </button>
        <button className="button" onClick={next}>
          N
        </button>
      </div> 
    
    </>
  )
}

export default HotelSlider
