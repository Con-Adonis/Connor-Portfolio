export default function Home(){
  return(
    <main className="min-h-screen bg-white pl-16 pt-8">
      <h1 className="text-5xl text-black mb-6">Sample title</h1>
      <p className="text-black mb-6">Sample paragraph</p>
      <button className="px-3 py-1 bg-white text-black border border-2 border-black rounded-full cursor-pointer transition duration-350 hover:scale-99 hover:bg-black hover:text-white">Click me</button>
    </main>
  );
}