import Navbar from "@/components/navbar";

export default function Home(){
  return(
    <>
      <Navbar />
      <main className="min-h-screen pl-16 pt-25 font-sans">
        <section className="min-h-[70vh] flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 pt-20 max-w-7xl mx-auto">
          <div className="text-left space-y-4">
            <h1 className="text-5xl text-gray-900 mb-6">Connor Kavleski</h1>
            <p className="text-gray-700 text-lg mb-6 max-w-xl loading-relaxes">Welcome to my portfolio!</p>

            <div className="flex flex-wrap gap-4 pt-4">
              {/*Resume */}
              <a href="/resume.pdf" download className="px-3 py-1 bg-white text-black border border-2 border-black rounded-full cursor-pointer transition duration-300 ease-in-out hover:scale-99 hover:bg-black hover:text-white">
                Download my resume!
              </a>

              {/*GitHub */}
              <a href="https://github.com/Con-Adonis" target="_blank" className="px-3 py-1 bg-white text-black border border-2 border-black rounded-full cursor-pointer transition duration-300 ease-in-out hover:scale-99 hover:bg-black hover:text-white">
                GitHub
              </a>

              {/*LinkedIn */}
              <a href="https://www.linkedin.com/in/connor-kavleski/" target="_blank" className="px-3 py-1 bg-white text-black border border-2 border-black rounded-full cursor-pointer transition duration-300 ease-in-out hover:scale-99 hover:bg-black hover:text-white">
                LinkedIn
              </a>

              {/*Instagram */}
              <a href="https://www.instagram.com/con.adonis/" target="_blank" className="px-3 py-1 bg-white text-black border border-2 border-black rounded-full cursor-pointer transition duration-300 ease-in-out hover:scale-99 hover:bg-black hover:text-white">
                Instagram
              </a>
            </div>

            {/*Right side image */}
            <div className="w-full max-w-xs md:max-w-sm rounded-full overflow-hidden shadow-md align-right">
              <img src="/profile.jpeg" alt="Connor Kavleski" className="object-cover w-full h-full" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}