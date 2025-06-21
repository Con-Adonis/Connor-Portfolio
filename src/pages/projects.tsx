import Navbar from "@/components/navbar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const projects = [
    {
      id: 1,
      name: "SnapLang - In Development",
      image: "/snaplang.png",
      description: "An AI-powered flashcard builder using real-world objects. SnapLang uses a convolutional neural network to transform photos of everyday items into bilingual flashcards, translating object names from English into the user’s chosen language.\n\nThese translations can be instantly added to a personalized deck, making SnapLang ideal for immersive vocabulary learning. It integrates smoothly with flashcard tools like Anki and Quizlet. Built with TensorFlow, Next.js, and a language model API, SnapLang explores the potential of AI to make language learning more visual, natural, and personalized.\n\nThis project is currently in development.",
    },
    {
      id: 2,
      name: "CUNY Compass Chatbot - IBM Hackathon",
      image: "/watsonx.jpeg",
      description: "Built during the IBM Watsonx hackathon, CUNY Compass is an AI chatbot designed to assist students in the City University of New York system. It helps users explore schools, majors, programs, and classes, and answers questions about financial aid, tuition, admissions, and best practices for affordable education.\n\nI led the project’s ideation and focused on building the school and curriculum assistant module. By training Watsonx on curated datasets; including course catalogs, admissions brochures, major spreadsheets, and FAQ content, we ensured the chatbot returned clean, relevant answers. It uses a prompt-augmented retrieval system and live web search capabilities to provide up-to-date, student-focused guidance.\n\nThe chatbot streamlines decision-making for both prospective and current students navigating the complexity of higher education.",
    },
    {
      id: 3,
      name: "NYC Violation Parser - Datathon Winner",
      image: "/nycviolations.png",
      description: "Created for City Tech’s first datathon, this project is a web-based data tool that identifies the most common and costly business violations across New York City. The goal: help business owners stay compliant and avoid preventable fines.\n\nOur team cleaned and analyzed over 20 million violation records using Python, Pandas, and Matplotlib. I led the identification of fines that were both frequent and easily avoidable. We ranked violations by frequency and cost, and organized results by NYC borough for location-specific insights.\n\nThis project earned third place overall in the competition.",
    },
    {
      id: 4,
      name: "TeamTasker",
      image: "/taskmanager.png",
      description: "TeamTasker is a simple web-based task manager designed to help small teams stay organized. It allows users to create tasks with a title, description, due date, priority level (low, medium, or high), and assign responsible team members.\n\nBuilt for a project management course, I served as both project manager and sole developer, writing the entire app from scratch using HTML, CSS, and vanilla JavaScript. This earned me extra credit and gave me hands-on experience in interface design, task scoping, and end-to-end development.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20 px-4 sm:px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => {
            const isExpanded = expandedProject === project.id;
            const visibilityClass = isExpanded ? "invisible" : "";

            return (
              <div
                key={project.id}
                onClick={() => setExpandedProject(project.id)}
                className={`relative bg-gray-100 rounded-lg overflow-hidden w-full h-full aspect-[4/3] max-w-sm shadow-lg group cursor-pointer transition hover:scale-105 hover:shadow-xl ${visibilityClass}`}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gray-200/75 text-black p-5 backdrop-blur-sm">
                  <h2 className="text-lg font-semibold">{project.name}</h2>
                </div>
              </div>
            );
          })}
        </div>

        <AnimatePresence>
          {expandedProject !== null && (
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed inset-0 bg-black/30 flex justify-center items-start pt-28 px-4 z-40 backdrop-blur-sm"
              onClick={() => setExpandedProject(null)}
            >
              <motion.div
                layout
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-full max-w-5xl rounded-lg overflow-auto max-h-[80vh] shadow-2xl relative transition-all duration-500 ease-in-out scale-100"
                style={{ transformOrigin: "center center" }}
              >
                <div className="sticky top-0 w-full bg-gray-800 text-white px-6 py-3 flex justify-between items-center z-10">
                  <h2 className="text-xl font-semibold mx-auto">
                    {projects.find((p) => p.id === expandedProject)?.name}
                  </h2>
                  <button
                    onClick={() => setExpandedProject(null)}
                    className="absolute left-4 hover:opacity-80 cursor-pointer"
                  >
                    {/* Top-left arrow */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-180" viewBox="-9 0 20 20" fill="currentColor">
                      <path d="M3 7v-4a1 1 0 011-1h4a1 1 0 110 2H5v3a1 1 0 11-2 0z" />
                    </svg>

                    {/* Bottom-right arrow */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform -rotate-180" viewBox="8 0 20 20" fill="currentColor">
                      <path d="M17 13v4a1 1 0 01-1 1h-4a1 1 0 110-2h3v-3a1 1 0 112 0z" />
                    </svg>
                  </button>
                </div>

                {/* Image with hint to scroll down */}
                <div className="relative">
                  <div className="relative w-full aspect-[4/3] max-h-[70vh]">
                    <Image
                      src={projects.find((p) => p.id === expandedProject)?.image || ""}
                      alt="Expanded"
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="(max-width: 1024px) 100vw, 800px"
                    />
                  </div>
                  {/* Scroll hint arrow */}
                  <div className="absolute bottom-[calc(0%))] left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  className="p-6 space-y-4 text-gray-800"
                >
                  <p className="text-md leading-relaxed whitespace-pre-line">
                    {
                      projects.find((p) => p.id === expandedProject)?.description
                    }
                  </p>
                  <div className="flex justify-center">
                    <a
                      href={`/projects/$
                        {
                          projects.find((p) => p.id === expandedProject)?.name
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                        }
                      `}
                      className="text-blue-600 underline"
                    >
                      View full project details (coming soon) →
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
