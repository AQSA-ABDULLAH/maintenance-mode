"use client";
import React from 'react';

const MaintenanceScreen = ({ title, subtitle, footer }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl md:text-6xl font-bold tracking-[0.3em] uppercase">
          {title}
        </h1>
        <p className="text-xs md:text-sm font-light tracking-widest opacity-90 uppercase">
          {subtitle}
        </p>
      </div>
      
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