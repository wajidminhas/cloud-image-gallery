"use client"

import { CldImage } from 'next-cloudinary';

const View = ({src} : {src: string}) => {
  return (
    <div>
        <CldImage
        className='rounded-md'
width="600"
height="400"
src={src}
sizes="100vw"
alt="Description of my image"
/>
    </div>
  )
}

export default View