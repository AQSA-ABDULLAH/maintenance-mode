"use client";
import React, { useEffect, useState } from "react";

const useTypewriter = (text = "", start, speed = 30) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!start || !text) return;

    let i = 0;

    const interval = setInterval(() => {
      i++;

      setDisplayText(text.slice(0, i)); // ✅ no prev state, no bug

      if (i >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [start, text, speed]);

  return start ? displayText : ""; // ✅ reset handled here
};

const VideoScreen = ({
  mainImage,
  subImage,
  paragraph,
  subParagraph,
  footer,
  footerImage,
}) => {
  const [step, setStep] = useState(0);

  // Sequence controller
  useEffect(() => {
    const timings = [1000, 2000, 3000, 4000, 5000, 6500];

    timings.forEach((time, index) => {
      setTimeout(() => {
        setStep(index + 1);
      }, time);
    });
  }, []);

  // Typewriter triggers
  const typedParagraph = useTypewriter(paragraph, step >= 5);
  const typedSubParagraph = useTypewriter(subParagraph, step >= 6);

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
      <div className="relative z-10 flex flex-col items-center md:items-start h-full py-[30px] md:p-[40px]">

        {/* Top Content */}
        <div className="space-y-[4px] md:space-y-[10px] 2xl:space-y-[30px] ">

          {mainImage && (
            <img
              src={mainImage}
              alt="Main"
              className={`w-[120px] 2xl:w-[150px] h-[40px] object-contain transition-opacity duration-700 ${
                step >= 3 ? "opacity-100" : "opacity-0"
              }`}
            />
          )}

          {subImage && (
            <img
              src={subImage}
              alt="Sub"
              className={`w-[120px] 2xl:w-[150px] h-[14px] object-contain transition-opacity duration-700 ${
                step >= 4 ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </div>

        {/* Paragraphs */}
        {paragraph && (
          <p className="text-[9px] md:text-[10px] 2xl:text-[16px] pt-[30px] md:pt-[60px] 2xl:pt-[197px] uppercase tracking-[1.3px] md:tracking-[2px]">
            {step >= 5 ? typedParagraph : ""}
          </p>
        )}

        {subParagraph && (
          <p className="text-[9px] md:text-[10px] 2xl:text-[16px] pt-[8px] md:pt-[15px] 2xl:pt-[40px] uppercase tracking-[1.3px] md:tracking-[2px]">
            {step >= 6 ? typedSubParagraph : ""}
          </p>
        )}
      </div>

      {/* Bottom */}
      <div className="absolute bottom-0 w-full flex flex-col-reverse md:flex-row justify-between items-center md:items-end  gap-[20px] p-[20px]">

        {footer && (
          <p
            className={`text-[6px] md:text-[8px] tracking-[1px] transition-opacity duration-700 ${
              step >= 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            {footer}
          </p>
        )}

        {footerImage && (
          <img
            src={footerImage}
            alt="Footer Logo"
            className={`object-contain h-[20px] 2xl:h-[30px] w-auto transition-opacity duration-700 ${
              step >= 2 ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>
    </div>
  );
};

export default VideoScreen;