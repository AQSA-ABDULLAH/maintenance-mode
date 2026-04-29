"use client";
import React, { useEffect } from 'react';
import ScreenManager from '../component/ScreenManager.jsx';
import "./globals.css"

function App() {

  useEffect(() => {
    // Disable right click
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable text selection
    const handleSelectStart = (e) => {
      e.preventDefault();
    };

    // Disable drag (images, links, etc.)
    const handleDragStart = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <div className="App">
      <ScreenManager />
    </div>
  );
}

export default App;