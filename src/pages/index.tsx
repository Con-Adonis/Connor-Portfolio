import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-10 font-sans">
        {/* Greeting Section */}
        <section className="min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-6 px-6 max-w-7xl mx-auto">
          {/* Left: Text Content */}
          <div className="flex-[1.2] text-left">
            <h1 className="text-5xl text-gray-900 mb-6">Connor Kavleski</h1>
            <p className="text-gray-700 text-lg mb-6 max-w-xl leading-relaxed">
              Welcome to my portfolio!
            </p>

            <div className="flex flex-wrap gap-4 pt-4 max-w-2xl">
              {/* Resume */}
              <a
                href="/resume.pdf"
                download
                className="px-3 py-1 bg-white text-black border border-2 border-black rounded-full cursor-pointer transition duration-300 ease-in-out hover:scale-99 hover:bg-black hover:text-white"
              >
                Download my resume!
              </a>

              {/* Email */}
              <a
                href="mailto:conkavleski@gmail.com"
                className="px-3 py-1 bg-white text-black border border-2 border-black rounded-full cursor-pointer transition duration-300 ease-in-out hover:scale-99 hover:bg-black hover:text-white"
              >
                Email me!
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Con-Adonis"
                target="_blank"
                className="px-3 py-1 bg-white text-black border border-2 border-black rounded-full cursor-pointer transition duration-300 ease-in-out hover:scale-99 hover:bg-black hover:text-white"
              >
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/connor-kavleski/"
                target="_blank"
                className="px-3 py-1 bg-white text-black border border-2 border-black rounded-full cursor-pointer transition duration-300 ease-in-out hover:scale-99 hover:bg-black hover:text-white"
              >
                LinkedIn
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/con.adonis/"
                target="_blank"
                className="px-3 py-1 bg-white text-black border border-2 border-black rounded-full cursor-pointer transition duration-300 ease-in-out hover:scale-99 hover:bg-black hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex-1 flex justify-center">
            <div className="w-72 h-96 md:w-80 md:h-[26rem] rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
              <Image src="/profile.jpeg" alt="Connor Kavleski" width={300} height={300} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold text-black">
              A little bit about me!
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Hi, I&apos;m Connor! I&apos;m a computer science student with a passion for machine learning, full-stack development, and building real tools that help people.
              I&apos;ve developed AI-powered tools like SnapLang and participated in hackathons and tech clubs at the New York City College of Technology in Brooklyn, New York.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              My journey began with a curiosity in the way computers can store, retrieve, and manipulate information. This curiosity combined with a desire to solve
              real-world problems keeps me excited to grow through hands-on projects and engineering positions.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-200 text-gray-600 text-center py-4 mt-20">
          <p className="text-md pb-1">
            <a href="mailto:conkavleski@gmail.com" className="hover:underline px-4">
              Email
            </a>
            <a href="https://github.com/Con-Adonis" className="hover:underline px-4">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/connor-kavleski/"
              className="hover:underline px-4"
            >
              LinkedIn
            </a>
          </p>
          <p className="text-sm">&copy; {new Date().getFullYear()} Connor Kavleski. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
