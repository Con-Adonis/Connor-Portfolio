import Navbar from "@/components/navbar";

export default function Projects() {
  //Defining projects
  const projects = [
    //Project 1, SnapLang
    {
      id: 1,
      name: "SnapLang",
      image: "/images/SnapLang.png",
      description: "An AI-powered flashcard builder using real-world objects.",
    },
  ]


  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20 px-4 sm:px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <div
              key = {project.id}
              className = "relative bg-gray-100 rounded-lg overflow-hidden w-full aspect-[4/3] max-w-sm shadow-lg group cursor-pointer transition hover:scale-105 hover:shadow-xl"
            >
              <img
                src = {project.image}
                alt = {project.name}
                className = "object-cover w-full h-full grouo-hover:scale-105 transition duration-300"
              />

              <div className="absolute bottom-0 left-0 w-full bg-black bg-opactiy-60 text-white p-4">
                <h2 className="text-lg font-semibold">{project.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
