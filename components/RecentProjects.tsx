"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { motion } from "framer-motion";

const RecentProjects = () => {
  const PinContainer = dynamic(
    () => import("./ui/Pin").then((mod) => mod.PinContainer),
    { ssr: false }
  );

  return (
    <div id="projects" className="py-10 md:py-20">
      <motion.h1
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects &&
          Array.isArray(projects) &&
          projects.length > 0 &&
          projects.map((item, i) => (
            <motion.div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <PinContainer title={item.title} href={item.link}>
                {/* Card image */}
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image
                      src="/bg.png"
                      alt="Background image"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>

                  <Image
                    src={item.img}
                    alt={`${item.title} project cover`}
                    className="z-10 absolute bottom-0"
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                {/* Description */}
                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{ color: "#BEC1DD", margin: "1vh 0" }}
                >
                  {item.des}
                </p>

                {/* Icons & link */}
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists &&
                      Array.isArray(item.iconLists) &&
                      item.iconLists.length > 0 &&
                      item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <Image
                            src={icon}
                            alt="Technology icon"
                            className="p-2"
                            width={32}
                            height={32}
                            loading="lazy"
                          />
                        </div>
                      ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default RecentProjects;
