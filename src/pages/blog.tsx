import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Blog(){
    return(
        <>
            <Navbar />
            <main className="min-h-screen pl-16 pt-25 font-sans">
                <h1 className="text-5xl text-gray-900 mb-6">
                Oops, you caught me!
                </h1>

                <p className="text-gray-700 text-lg mb-6 max-w-xl loading-relaxes">
                This site is still under development! Soon, this will be a page dedicated to giving blog updates on what I&apos;m working on!
                </p>
                <p className="text-gray-700 text-lg mb-6 max-w-xl loading-relaxes">
                Stay tuned! :)
                </p>
            </main>
        </>
    )
}