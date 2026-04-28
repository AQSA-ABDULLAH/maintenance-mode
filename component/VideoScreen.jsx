"use client";
import React from "react";
import Image from "next/image";

const VideoScreen = ({
  mainImage,
  subImage,
  paragraph,
  subParagraph,
  footer,
  footerImage,
}) => {
  return (
    <div className="relative w-full h-full">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/346449 ZG Maintenance Mode.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-[60px]">

        {/* Top Content */}
        <div className="space-y-[30px] 2xl:space-y-[50px]">

          {mainImage && (
            <img
              src={mainImage}
              alt="Main"
              className="w-[238px] h-[40px] object-contain"
            />
          )}

          {subImage && (
            <img
              src={subImage}
              alt="Sub"
              className="w-[238px] h-[14px] object-contain"
            />
          )}
           </div>

          {paragraph && (
            <p className="text-[12px] 2xl:text-[18px] pt-[80px] 2xl:pt-[197px] uppercase tracking-[2px]">
              {paragraph}
            </p>
          )}

          {subParagraph && (
            <p className="text-[12px] 2xl:text-[18px] pt-[20px] 2xl:pt-[40px] uppercase tracking-[2px]">
              {subParagraph}
            </p>
          )}
            </div>
       

        {/* Bottom */}
        <div className="absolute bottom-0 w-full flex justify-between items-end p-[20px]">
          
          {footer && (
            <p className="text-[8px] tracking-[1px]">{footer}</p>
          )}

          {footerImage && (
          <img
          src={footerImage}
          alt="Footer Logo"
          className="object-contain h-[40px] w-auto"
        />
          )}
        </div>
    
    </div>
  );
};

export default VideoScreen;