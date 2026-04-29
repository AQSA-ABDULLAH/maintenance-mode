"use client";
import React, { useState, useEffect } from "react";
import VideoScreen from "./VideoScreen";
import MaintenanceScreen from "./MaintenanceScreen";

const ScreenManager = () => {
  const [currentScreen, setCurrentScreen] = useState(null);

  useEffect(() => {
    const lastIndex = localStorage.getItem("screenIndex");
    const nextIndex = lastIndex !== null ? (parseInt(lastIndex) + 1) % 3 : 0;
    localStorage.setItem("screenIndex", nextIndex);

    const timer = setTimeout(() => {
      setCurrentScreen(nextIndex);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (currentScreen === null) return <div className="fixed inset-0 bg-black" />;

  const screens = [
    {
      type: "video",
      bg: "bg-[#FDF9F3]",
      text: "text-black",
      mainImage: "/ZIMO Logo 26 B.svg",
      subImage: "/Maintenance Mode B.svg",
       paragraph: "Scheduled maintenance is currently in progress.",
      subParagraph: "THANK YOU FOR YOUR PATIENCE.",

      footer:
        "© COPYRIGHT 2026 ZIMO GROUP LIMITED. ALL RIGHTS RESERVED.",
      footerImage: "/ZIMO OFFICIAL LICENSED.svg",
    },
    {
      type: "text",
      bg: "bg-white",
      text: "text-black",
      mainImage: "/ZIMO Logo 26 B.svg",
      subImage: "/Maintenance Mode B.svg",
       paragraph: "Scheduled maintenance is currently in progress.",
      subParagraph: "THANK YOU FOR YOUR PATIENCE.",

      footer:
        "©COPYRIGHT 2026 ZIMO GROUP LIMITED. ALL RIGHTS RESERVED.",
      footerImage: "/ZIMO OFFICIAL LICENSED GB B.svg",
    },
    {
      type: "text",
      bg: "bg-black",
      text: "text-white",
      footer: "ATS",
       mainImage: "/ZIMO Logo 26 W.svg",
      subImage: "/Maintenance Mode W.svg",
       paragraph: "Scheduled maintenance is currently in progress.",
      subParagraph: "THANK YOU FOR YOUR PATIENCE.",

      footer:
        "© COPYRIGHT 2026 ZIMO GROUP LIMITED. ALL RIGHTS RESERVED.",
      footerImage: "/ZIMO OFFICIAL LICENSED GB W.svg",
    },
  ];

  const config = screens[currentScreen];

  return (
    <main
      className={`fixed inset-0 flex items-center justify-center transition-colors duration-700 ${config.bg} ${config.text}`}
    >
      {config.type === "video" ? (
         <VideoScreen
          mainImage={config.mainImage}
          subImage={config.subImage}
          paragraph={config.paragraph}
          subParagraph={config.subParagraph}
          footer={config.footer}
          footerImage={config.footerImage}
        />
      ) : (
        <MaintenanceScreen
          mainImage={config.mainImage}
          subImage={config.subImage}
          paragraph={config.paragraph}
          subParagraph={config.subParagraph}
          footer={config.footer}
          footerImage={config.footerImage}
        />
      )}
    </main>
  );
};

export default ScreenManager;
