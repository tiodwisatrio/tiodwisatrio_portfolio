import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tio Dwi Satrio - Full Stack Developer Portfolio",
    short_name: "Tio's Portfolio",
    description:
      "Professional portfolio showcasing full stack development projects, web applications, and modern UI/UX designs.",
    start_url: "/",
    display: "standalone",
    background_color: "#000319",
    theme_color: "#CBACF9",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/logo_tio.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/logo_tio.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: [
      "portfolio",
      "developer",
      "web development",
      "design",
      "technology",
    ],
    lang: "en-US",
  };
}
