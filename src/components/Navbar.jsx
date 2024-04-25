import React from 'react';
import { Menu } from 'lucide-react';

const links=[{
    title:"Home"
},
{
    title:"Eng"
},
{
    title:"Hotels"
},
{
    title:"Deals"
},
{
    title:"Features"
},


];

function Navbar() {
  return (
    <div className='padding-x flex justify-between items-center py-3 bg-[#C4C4C4]'>
        <h1 className="text-[30px] font-semibold text-[#000000]"><span className='bg-[#7E57C2] text-[#FFFFFF] p-1'>Book</span>azon</h1>

        <ul className="flex gap-10 items-center">

            {
                links.map((item,ind)=>(<>

                <li key={ind} className='text-[#000000] text-[18px] cursor-pointer font-semibold hover:text-[#7E57C2]'>{item.title}</li>
                
                </>))
            }
        <li><button className='text-[#FFFFFF] w-[140px] h-[50px] text-[18px] font-semibold bg-[#7E57C2] px-4 py-2 rounded-md'>Login</button></li>




        </ul>
        {/* <Menu/> */}
      
      
    </div>
  )
}

export default Navbar
