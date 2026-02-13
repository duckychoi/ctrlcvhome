"use client";

import { useEffect, useState } from "react";

export default function SplineBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      {/* Dark gradient overlays for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/60 z-10 pointer-events-none" />
      
      {/* Hide Spline watermark overlay - larger coverage */}
      <div className="absolute bottom-0 right-0 w-48 h-20 bg-white z-20 pointer-events-none" />
      
      <iframe
        src='https://my.spline.design/nexbotrobotcharacterconcept-LoUryRHcsWrV0pztRLvc7RQO/?ui_controls=0&ui_infos=0&ui_watermark=0'
        frameBorder='0'
        width='100%'
        height='100%'
        className="w-full h-full object-cover"
        title="Spline 3D Robot"
      />
    </div>
  );
}
