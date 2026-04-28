"use client";
import React from "react";
import Image from "next/image";

const MaintenanceScreen = ({ mainImage, subImage, footer }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 space-y-6">
      
      {/* Main Image */}
      <Image
        src={mainImage}
        alt="Main"
        width={300}
        height={100}
        className="object-contain"
      />

      {/* Second Image */}
      <Image
        src={subImage}
        alt="Sub"
        width={200}
        height={80}
        className="object-contain"
      />

      <div className="w-12 h-[1px] bg-current opacity-60"></div>

      <p className="text-[10px] md:text-xs max-w-xs leading-relaxed opacity-80 uppercase tracking-tighter">
        Scheduled maintenance is currently in progress. <br />
        Thank you for your patience.
      </p>

      <div className="pt-12 text-sm font-black tracking-[0.4em]">
        {footer}
      </div>
    </div>
  );
};

export default MaintenanceScreen;