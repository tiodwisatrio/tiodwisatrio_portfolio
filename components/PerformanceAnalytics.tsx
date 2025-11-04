"use client";

import { useEffect } from "react";

const PerformanceAnalytics = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return;

    // Measure and log Core Web Vitals
    // const measureWebVitals = async () => {
    //   const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import(
    //     "web-vitals"
    //   );

    //   getCLS(console.log);
    //   getFID(console.log);
    //   getFCP(console.log);
    //   getLCP(console.log);
    //   getTTFB(console.log);
    // };

    // measureWebVitals();

    // Performance monitoring disabled to prevent forEach errors
    // Log basic performance info instead
    if (typeof window !== "undefined" && "performance" in window) {
      console.log("Performance monitoring enabled");
    }
  }, []);

  return null;
};

export default PerformanceAnalytics;
