import React from 'react'
import { ChevronDown } from 'lucide-react';
import { X } from 'lucide-react';


function Menucmp({Menu,setMenu}) {
  const links=[
{
    title:"Hotels"
},
{
    title:"Deals"
},
{
    title:"Features"
},


{
  title:"Contact Us"
}


];
  return (
    <div className='padding-x flex justify-between py-3  absolute top-0  w-full  left-0 bg-[#C4C4C4]'>
        <div className='flex flex-col gap-5'>
    <h1 className="text-[30px] font-semibold text-[#000000]"><span className='bg-[#7E57C2] text-[#FFFFFF] p-1'>Book</span>azon</h1>

    <ul className="flex flex-col gap-10">
      <li className='text-[#000000] text-[18px] cursor-pointer font-semibold hover:text-[#7E57C2] flex  flex-row ' >Home <ChevronDown /></li>
      <li className='text-[#000000] text-[18px] cursor-pointer font-semibold hover:text-[#7E57C2] flex flex-row'>En <ChevronDown /></li>

        {
            links.map((item,ind)=>(<>

            <li key={ind} className='text-[#000000] text-[18px] cursor-pointer font-semibold hover:text-[#7E57C2]'>{item.title}</li>
            
            </>))
        }
    <li><button className='text-[#FFFFFF] w-[140px] h-[50px] text-[18px] font-semibold bg-[#7E57C2] px-4 py-2 rounded-md'>Login</button></li>




    </ul>
    </div>
    <X onClick={()=>setMenu(!Menu)}/>

  
</div>
  )
}

export default Menucmp;