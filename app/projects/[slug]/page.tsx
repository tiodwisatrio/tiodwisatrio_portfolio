"use client";
import { use } from "react";
import { projects, navItems } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow, FaArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectDetail({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = projects.find((p: any) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const homeNavItems = navItems.map((item) => ({
    ...item,
    link: `/${item.link}`,
  }));

  return (
    <div className="min-h-screen bg-black-100 py-20">
      <FloatingNav navItems={homeNavItems} />
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-purple hover:text-purple/80 transition-colors mb-8"
          >
            <FaArrowLeft />
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="px-4 py-2 bg-purple/20 text-purple rounded-full text-sm">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-white-100/80 max-w-3xl">
            {project.fullDescription}
          </p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#13162D" }}
          >
            <Image
              src="/bg.png"
              alt="Background"
              fill
              className="object-cover opacity-50"
            />
          </div>
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover z-10"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <motion.div
            className="md:col-span-2 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Features */}
            <div className="bg-black-200 rounded-2xl p-8 border border-white/[0.1]">
              <h2 className="text-2xl font-bold text-white mb-6">
                Key Features
              </h2>
              <ul className="space-y-4">
                {project.features &&
                  project.features.map((feature: string, index: number) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 text-white-100/80"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    >
                      <span className="text-purple mt-1">•</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
              </ul>
            </div>

            {/* Challenge & Solution */}
            {project.challenges && project.solution && (
              <div className="space-y-6">
                <div className="bg-black-200 rounded-2xl p-8 border border-white/[0.1]">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Challenge
                  </h2>
                  <p className="text-white-100/80">{project.challenges}</p>
                </div>

                <div className="bg-black-200 rounded-2xl p-8 border border-white/[0.1]">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Solution
                  </h2>
                  <p className="text-white-100/80">{project.solution}</p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Technologies */}
            <div className="bg-black-200 rounded-2xl p-6 border border-white/[0.1]">
              <h3 className="text-xl font-bold text-white mb-6">
                Technologies Used
              </h3>
              <div className="space-y-4">
                {project.technologies &&
                  project.technologies.map((tech: any, index: number) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-white/[0.1]">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={24}
                          height={24}
                        />
                      </div>
                      <span className="text-white-100/80">{tech.name}</span>
                    </motion.div>
                  ))}
              </div>
            </div>

            {/* Live Site Link */}
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-blue-900 via-indigo-700 to-purple-600 rounded-2xl p-6 text-center transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-center gap-2 text-white font-semibold">
                <span>Visit Live Site</span>
                <FaLocationArrow />
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* Other Projects */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Other Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects
              .filter((p: any) => p.slug !== slug)
              .slice(0, 3)
              .map((otherProject: any, index: number) => (
                <motion.div
                  key={otherProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                >
                  <Link href={`/projects/${otherProject.slug}`}>
                    <div className="bg-black-200 rounded-xl overflow-hidden border border-white/[0.1] hover:border-purple/50 transition-all duration-300 group">
                      <div className="relative h-48">
                        <div
                          className="absolute inset-0"
                          style={{ backgroundColor: "#13162D" }}
                        >
                          <Image
                            src="/bg.png"
                            alt="Background"
                            fill
                            className="object-cover opacity-50"
                          />
                        </div>
                        <Image
                          src={otherProject.img}
                          alt={otherProject.title}
                          fill
                          className="object-cover object-top z-10 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                          {otherProject.title}
                        </h3>
                        <p className="text-white-100/60 text-sm line-clamp-2">
                          {otherProject.des}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </motion.div>

        <Footer />
      </div>
    </div>
  );
}
