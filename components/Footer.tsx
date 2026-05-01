"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full pt-10 md:pt-20 pb-10" id="contact">
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-28 right-6 z-50">
        <span className="absolute inline-flex w-14 h-14 rounded-full bg-green-400 animate-wa-ping" />
        <a
          href="https://wa.me/6288972061745"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-colors duration-800"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-white text-3xl" />
        </a>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-opacity duration-300 hover:opacity-80 bg-gradient-to-br from-blue-900 via-indigo-700 to-purple-600"
        aria-label="Back to top"
      >
        <FaArrowUp className="text-white text-2xl" />
      </button>

      <div className="flex mt-16 space-y-5 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          &copy; {new Date().getFullYear()} Tio Dwi Satrio. All rights reserved.
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia &&
            Array.isArray(socialMedia) &&
            socialMedia.length > 0 &&
            socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <Image
                  src={info.img}
                  alt="icons"
                  width={20}
                  height={20}
                  loading="lazy"
                />
              </a>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
