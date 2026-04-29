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
      <div className="relative z-10 flex flex-col h-full p-[60px]">

        {/* Top Content */}
        <div className="space-y-[30px] 2xl:space-y-[50px] ">

          {mainImage && (
            <img
              src={mainImage}
              alt="Main"
              className={`w-[238px] h-[40px] object-contain transition-opacity duration-700 ${
                step >= 3 ? "opacity-100" : "opacity-0"
              }`}
            />
          )}

          {subImage && (
            <img
              src={subImage}
              alt="Sub"
              className={`w-[238px] h-[14px] object-contain transition-opacity duration-700 ${
                step >= 4 ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </div>

        {/* Paragraphs */}
        {paragraph && (
          <p className="text-[12px] 2xl:text-[18px] pt-[80px] 2xl:pt-[197px] uppercase tracking-[2px]">
            {step >= 5 ? typedParagraph : ""}
          </p>
        )}

        {subParagraph && (
          <p className="text-[12px] 2xl:text-[18px] pt-[20px] 2xl:pt-[40px] uppercase tracking-[2px]">
            {step >= 6 ? typedSubParagraph : ""}
          </p>
        )}
      </div>

      {/* Bottom */}
      <div className="absolute bottom-0 w-full flex justify-between items-end p-[20px]">

        {footer && (
          <p
            className={`text-[8px] tracking-[1px] transition-opacity duration-700 ${
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
            className={`object-contain h-[40px] w-auto transition-opacity duration-700 ${
              step >= 2 ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>
    </div>
  );
};

export default VideoScreen;