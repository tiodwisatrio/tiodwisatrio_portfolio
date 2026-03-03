import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black-100 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
          Project Not Found
        </h2>
        <p className="text-white-100/60 mb-8 max-w-md mx-auto">
          Sorry, the project you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple hover:bg-purple/80 text-white rounded-lg transition-colors"
        >
          <FaArrowLeft />
          <span>Back to Projects</span>
        </Link>
      </div>
    </div>
  );
}
