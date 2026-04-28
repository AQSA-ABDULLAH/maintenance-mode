"use client";
import React from 'react';
import Image from 'next/image';

const VideoScreen = ({ title }) => {
  return (
    <div className="relative w-full h-full text-black bg-transparent">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          src="/346449 ZG Maintenance Mode.mp4" 
          autoPlay loop muted playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content over Video */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex flex-col items-start self-start space-y-2">
          <h1 className="text-xl font-bold tracking-wider">{title}</h1>
          <p className="text-[10px] opacity-70 uppercase tracking-widest">Zimo Group</p>
        </div>
         
     

        <div className="absolute bottom-0 flex justify-between items-end w-full">
            <p className='text-[8px]'>
          LOREM IPSUM DOLOR SIT AMET. CONSECTETUR ADIPISCING ELIT. SED DO EIUSMOD TEMPOR INCIDIDUNT.
          </p>
          <div>
            <img src="/ZIMO OFFICIAL LICENSED.svg" alt='Logo' className="h-[40px] w-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoScreen;