

import React from 'react'
import logo from "@/asset/avatar.jpg"
import Image from 'next/image'
import logoImg from '@/asset/myimg.png'

const Navbar = () => {
  return (
    <header>
        <div className="navbar flex items-center py-6 px-10 bg-black/50 border-b border-white">
  <div className="flex-1">

   <Image src={logoImg} alt='logo image' className='w-[60px] h-[60px]'></Image>
  </div>
  {/* <div className=""> */}
   
    {/* <div className="dropdown dropdown-end"> */}
      {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar"> */}
      <div className="w-10 h-10 rounded-full">
          <Image src={logo} alt='avatar image' />
        </div>
      {/* </label> */}
  
    {/* </div> */}
  {/* </div> */}
</div>
    </header>
  )
}

export default Navbar