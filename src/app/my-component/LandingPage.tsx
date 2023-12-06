"use client";
import React, { useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";

type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

const LandingPage = () => {
  const [imageId, setImageId] = useState("knggb2n6ruslwx5sprum");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* UPLOAD IMAGE BUTTON IS HERE  */}

      <CldUploadButton
        onUpload={(result) => {
          let res = result as UploadResult;
          setImageId(res.info.public_id);
        }}
        uploadPreset="fkkps40m"
        className="mb-6"
      />

      {/* cloud image VIEW is starting here  */}

      {imageId && (
        <CldImage
          width="600"
          height="400"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
};

export default LandingPage;
