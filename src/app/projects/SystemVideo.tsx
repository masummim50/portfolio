"use client"
import React from "react";

const SystemVideo = () => {
  return (
    <div className="w-full lg:w-[45%]">
        <div className="flex justify-center">Application walkthrough</div>
      <iframe
      
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/_bXYFLnQeJc?si=gADTNCegXvuMPg3F?autoplay=1&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default SystemVideo;
