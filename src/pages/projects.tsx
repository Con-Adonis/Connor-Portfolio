import Navbar from "@/components/navbar";

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20 px-4 sm:px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="bg-gray-200 rounded-lg w-full aspect-[4/3] max-w-sm flex justify-center items-center shadow-lg cursor-pointer transition hover:scale-105"
            >
              0{num}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
