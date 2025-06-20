import Navbar from "@/components/navbar";

export default function Home(){
  return(
    <>
      <Navbar />
      <main className="min-h-screen pl-16 pt-25 font-sans">
        <h1 className="text-5xl text-gray-900 mb-6">
          Connor Kavleski
          </h1>

        <p className="text-gray-700 text-lg mb-6 max-w-xl loading-relaxes">
          Welcome to my portfolio!
          </p>

        <button className="px-3 py-1 bg-white text-black border border-2 border-black rounded-full cursor-pointer transition duration-300 ease-in-out hover:scale-99 hover:bg-black hover:text-white">
          Click me
          </button>
      </main>
    </>
  );
}