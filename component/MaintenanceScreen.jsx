"use client";
import React from "react";

const MaintenanceScreen = ({
  mainImage,
  subImage,
  paragraph,
  subParagraph,
  footer,
  footerImage,
}) => {
  return (
    <div className="relative w-full h-full text-center">

      {/* 🔥 Main Image - PERFECT CENTER */}
      {mainImage && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src={mainImage}
            alt="Main"
            className="w-[238px] h-[40px] object-contain"
          />
        </div>
      )}

      {/* Content BELOW center image */}
      <div className="absolute top-[53%] pt-[30px] 2xl:pt-[60px] left-1/2 -translate-x-1/2 flex flex-col items-center">

        {subImage && (
          <img
            src={subImage}
            alt="Sub"
            className="w-[238px] h-[14px] object-contain"
          />
        )}

        {paragraph && (
          <p className="text-[12px] 2xl:text-[18px] pt-[40px] 2xl:pt-[60px] uppercase tracking-[2px]">
            {paragraph}
          </p>
        )}

        {subParagraph && (
          <p className="text-[12px] 2xl:text-[18px] pt-[10px] 2xl:pt-[20px] uppercase tracking-[2px] opacity-80">
            {subParagraph}
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 p-[10px] 2xl:py-[20px] w-full flex flex-col justify-between items-center space-y-[30px] 2xl:space-y-[60px]">
        
      

        {footerImage && (
          <img
            src={footerImage}
            alt="Footer Logo"
            className="h-[60px] w-auto object-contain"
          />
        )}
          {footer && (
          <p className="text-[8px] tracking-[1px]">{footer}</p>
        )}
      </div>
    </div>
  );
};

export default MaintenanceScreen;