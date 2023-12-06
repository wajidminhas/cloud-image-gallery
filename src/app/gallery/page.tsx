

import React from 'react'
import Uploadbtn from './Uploadbtn'
import cloudinary from 'cloudinary'
import View from './view'

interface MyImage {
  public_id : string,
}

const Page =  async () => {
  const res = await cloudinary.v2.search
  .expression('resource_type:image ')
  .sort_by('public_id','desc')
  // .max_results(5)
  .execute() as {resources:MyImage[]}
 
 
  // console.log(res)
  
  return (
    <>
   <div className='flex items-center justify-between mt-5 px-7'> 
    <h2 className="scroll-m-20 text-white text-4xl font-semibold tracking-tight transition-colors first:mt-0">
      Gallery
    </h2>
    <Uploadbtn />
    
   </div>
   <div className='columns-4 space-y-4 gap-4 mx-auto p-5 '>
      {res.resources.map((items, i)=>{
        return <div key={i} className='break-inside-avoid'>
            <View src={items.public_id} />
           
        </div>
})}
   </div>
   </>
  )
}

export default Page