import Navbar from "@/components/navbar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  // Defining projects
  const projects = [
    {
      id: 1,
      name: "SnapLang",
      image: "/snaplang.png",
      description: "An AI-powered flashcard builder using real-world objects.",
    },
    {
      id: 2,
      name: "SnapLang",
      image: "/snaplang.png",
      description: "An AI-powered flashcard builder using real-world objects.",
    },
    {
      id: 3,
      name: "SnapLang",
      image: "/snaplang.png",
      description: "An AI-powered flashcard builder using real-world objects.",
    },
    {
      id: 4,
      name: "SnapLang",
      image: "/snaplang.png",
      description: "An AI-powered flashcard builder using real-world objects.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20 px-4 sm:px-6 md:px-12">
        {/* Creating boxes */}
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <motion.div
              layoutId={`project-${project.id}`}
              key={project.id}
              onClick={() => setExpandedProject(project.id)}
              className="relative bg-gray-100 rounded-lg overflow-hidden w-full aspect-[4/3] max-w-sm shadow-lg group cursor-pointer transition hover:scale-105 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gray-200/75 text-black p-5 backdrop-blur-sm">
                <h2 className="text-lg font-semibold">{project.name}</h2>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanding boxes upon clicking */}
        <AnimatePresence>
          {expandedProject !== null && (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 flex justify-center items-start pt-28 px-4 z-40 backdrop-blur-sm"
              onClick={() => setExpandedProject(null)}
            >
              <motion.div
                layout
                layoutId={`project-${expandedProject}`}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="bg-white w-full max-w-5xl rounded-lg overflow-auto max-h-[80vh] shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >

                {/* Sticky top bar */}
                <div className="sticky top-0 w-full bg-black text-white px-6 py-3 flex justify-between items-center z-10">
                  <h2 className="text-xl font-semibold mx-auto">
                    {projects.find((p) => p.id === expandedProject)?.name}
                  </h2>
                  <button
                    onClick={() => setExpandedProject(null)}
                    className="absolute left-4 hover:opacity-80 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 10l5-5m0 0v4.586a1 1 0 01-.293.707L15 10zm-6 4l-5 5m0 0v-4.586a1 1 0 01.293-.707L9 14z"
                      />
                    </svg>
                  </button>
                </div>

                {/* Expanded Image */}
                <img
                  src={
                    projects.find((p) => p.id === expandedProject)?.image
                  }
                  alt="Expanded"
                  className="w-full aspect-[4/3] object-cover"
                />

                {/* Project Description & Full Link */}
                <div className="p-6 space-y-4 text-gray-800">
                  <p className="text-md leading-relaxed">
                    {
                      projects.find((p) => p.id === expandedProject)?.description
                    }
                  </p>

                  <a
                    href={`/projects/${
                      projects.find((p) => p.id === expandedProject)?.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                    }`}
                    className="text-blue-600 underline"
                  >
                    View full project details →
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
