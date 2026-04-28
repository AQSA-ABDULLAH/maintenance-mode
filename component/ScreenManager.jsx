"use client";
import React, { useState, useEffect } from 'react';
import VideoScreen from './VideoScreen';
import MaintenanceScreen from './MaintenanceScreen';

const ScreenManager = () => {
  const [currentScreen, setCurrentScreen] = useState(null);

  useEffect(() => {
    const lastIndex = localStorage.getItem('screenIndex');
    const nextIndex = lastIndex !== null ? (parseInt(lastIndex) + 1) % 3 : 0;
    localStorage.setItem('screenIndex', nextIndex);

    const timer = setTimeout(() => {
      setCurrentScreen(nextIndex);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (currentScreen === null) return <div className="fixed inset-0 bg-black" />;

  const screens = [
    { type: 'video', bg: 'bg-[#FDF9F3]', text: 'text-black' },
    { type: 'text', bg: 'bg-white', text: 'text-black', footer: 'ATS' },
    { type: 'text', bg: 'bg-black', text: 'text-white', footer: 'ATS' }
  ];

  const config = screens[currentScreen];

  return (
    <main className={`fixed inset-0 flex items-center justify-center transition-colors duration-700 ${config.bg} ${config.text}`}>
      {config.type === 'video' ? (
        <VideoScreen title="AGZIMA" />
      ) : (
        <MaintenanceScreen 
          title="AGZIMA" 
          subtitle="PLANNED MAINTENANCE IN PROGRESS" 
          footer={config.footer} 
        />
      )}
    </main>
  );
};

export default ScreenManager;