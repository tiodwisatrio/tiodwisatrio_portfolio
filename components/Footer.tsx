import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-10 md:pt-20 pb-10" id="contact">
    
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
