"use client";

import { CldImage } from "next-cloudinary";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const View = ({ src }: { src: string }) => {
  return (
    <div className="relative">
      <CldImage
        className="rounded-md"
        width="600"
        height="400"
        src={src}
        sizes="100vw"
        alt="Description of my image"
      />
        {/* Favourite icons added  */}
      <div className="absolute top-1 right-1">
      <AiOutlineHeart
        className="w-6 h-6 text-white
     hover:text-red-600 duration-300 cursor-pointer"
      />
      </div>
    </div>
  );
};

export default View;
