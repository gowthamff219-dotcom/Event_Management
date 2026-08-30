"use client";

import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const videoOptions = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
      playlist: "Co2Ot_nnI-8", // Required for looping in YouTube API
      playsinline: 1,
      modestbranding: 1,
      disablekb: 1,
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
        {isMounted && (
          <div className="absolute inset-0 w-[150vw] h-[150vh] -top-[25vh] -left-[25vw] md:w-[120vw] md:h-[120vh] md:-top-[10vh] md:-left-[10vw]">
            <YouTube
              videoId="Co2Ot_nnI-8"
              opts={videoOptions}
              className="w-full h-full"
              iframeClassName="w-full h-full object-cover"
              onReady={(e) => {
                e.target.playVideo();
              }}
            />
          </div>
        )}
      </div>

      {/* Cinematic Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-matte-black/60 bg-gradient-to-b from-transparent to-matte-black/90"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-warm-white mb-6 uppercase tracking-wider leading-tight"
        >
          We Create <br/>
          <span className="text-gradient font-style-italic">Unforgettable</span> <br/>
          Moments
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-warm-white/80 font-light mb-12 max-w-2xl"
        >
          Premium event planning, design and experiences crafted around your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link href="/booking" className="bg-champagne text-matte-black px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-champagne-light transition-colors">
            Plan Your Event
          </Link>
          <Link href="/events" className="border border-warm-white text-warm-white px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-warm-white hover:text-matte-black transition-all">
            Explore Our Events
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 z-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-warm-white/50 mb-3">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-champagne to-transparent"
        />
      </motion.div>
    </section>
  );
}
