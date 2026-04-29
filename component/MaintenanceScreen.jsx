"use client";
import React, { useEffect, useState } from "react";

// ✅ Safe Typewriter (no warnings)
const useTypewriter = (text = "", start, speed = 30) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!start || !text) return;

    let i = 0;

    const interval = setInterval(() => {
      i++;
      setDisplayText(text.slice(0, i));

      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [start, text, speed]);

  return start ? displayText : "";
};

const MaintenanceScreen = ({
  mainImage,
  subImage,
  paragraph,
  subParagraph,
  footer,
  footerImage,
}) => {
  const [step, setStep] = useState(0);

  // ✅ Sequence controller
  useEffect(() => {
    const timings = [800, 1600, 2400, 3200, 4000, 5500];

    timings.forEach((time, index) => {
      setTimeout(() => {
        setStep(index + 1);
      }, time);
    });
  }, []);

  const typedParagraph = useTypewriter(paragraph || "", step >= 5);
  const typedSubParagraph = useTypewriter(subParagraph || "", step >= 6);

  return (
    <div className="relative w-full h-full text-center">

      {/* 🔥 Main Image - CENTER */}
      {mainImage && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src={mainImage}
            alt="Main"
            className={`w-[180px] 2xl:w-[238px] h-[40px] object-contain transition-opacity duration-700 ${
              step >= 3 ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      )}

      {/* Content BELOW center */}
      <div className="absolute top-[53%] pt-[30px] 2xl:pt-[60px] left-1/2 -translate-x-1/2 flex flex-col items-center">

        {subImage && (
          <img
            src={subImage}
            alt="Sub"
            className={`w-[180px] 2xl:w-[238px] h-[14px] object-contain transition-opacity duration-700 ${
              step >= 4 ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {paragraph && (
          <p className="text-[11px] 2xl:text-[18px] pt-[40px] 2xl:pt-[60px] uppercase tracking-[2px]">
            {step >= 5 ? typedParagraph : ""}
          </p>
        )}

        {subParagraph && (
          <p className="text-[11px] 2xl:text-[18px] pt-[10px] 2xl:pt-[20px] uppercase tracking-[2px] opacity-80">
            {step >= 6 ? typedSubParagraph : ""}
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 p-[10px] 2xl:py-[20px] w-full flex flex-col justify-between items-center space-y-[30px] 2xl:space-y-[60px]">

        {footerImage && (
          <img
            src={footerImage}
            alt="Footer Logo"
            className={`h-[35px] 2xl:h-[60px] w-auto object-contain transition-opacity duration-700 ${
              step >= 2 ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {footer && (
          <p
            className={`text-[8px] tracking-[1px] transition-opacity duration-700 ${
              step >= 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            {footer}
          </p>
        )}
      </div>
    </div>
  );
};

export default MaintenanceScreen;