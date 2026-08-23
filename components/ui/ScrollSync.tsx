"use client";
import { useEffect } from "react";

const sectionIdFromPath = (pathname: string) => {
  if (pathname === "/" || pathname === "") return "home";
  return pathname.replace(/^\//, "").split("/")[0];
};

export const ScrollSync = () => {
  useEffect(() => {
    const scrollToCurrent = (behavior: ScrollBehavior) => {
      const id = sectionIdFromPath(window.location.pathname);
      document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
    };

    scrollToCurrent("auto");

    const handlePopState = () => scrollToCurrent("smooth");
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return null;
};
