import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Demo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // State to track video playback

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying); // Toggle play/pause state
    }
  };

  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          See It in Action
        </h2>
        <div className="relative inline-block">
          <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
            <video
              ref={videoRef}
              src="/assets/vid.mp4" // Replace with your demo video path
              alt="Demo"
              className="w-full max-w-3xl rounded-lg shadow-lg brightness-110" // Increased brightness
              muted
              loop
              preload="metadata"
            />
            <button
              onClick={handleTogglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg hover:bg-opacity-70 transition opacity-0 group-hover:opacity-100 transition-opacity duration-300" // Hide by default, show on hover
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 12 6 6v12z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-5.197-3.04A1 1 0 008 9.872v4.256a1 1 0 001.555.832l5.197-3.04a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
