"use client";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { blogPosts } from "@/data/blogPost";
import { useEffect, useRef, useState, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselControls = useAnimation();

  // Filtered + Featured Posts
  const sortedPosts = useMemo(
    () =>
      [...blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    []
  );

  const featuredPosts = useMemo(() => {
    const posts = sortedPosts.filter((post) => post.featured);
    return [...posts, ...posts]; // tripled for looping effect
  }, [sortedPosts]);

  useEffect(() => {
    if (!carouselRef.current) return;

    const totalWidth = carouselRef.current.scrollWidth / 2; // Because we duplicated posts

    const loop = async () => {
      await carouselControls.start({
        x: -totalWidth,
        transition: {
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        },
      })
    }

    const runLoop = async () => {
      while(true){
        await loop();
      }
    }

    setCarouselWidth(totalWidth);
    runLoop();
  }, [featuredPosts]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    sortedPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return ["All", ...Array.from(tags).sort()];
  }, [sortedPosts]);

  const filteredPosts = useMemo(() => {
    if (!selectedTag || selectedTag === "All") return sortedPosts;
    return sortedPosts.filter((post) => post.tags.includes(selectedTag));
  }, [selectedTag, sortedPosts]);

  const truncate = (text: string, maxWords = 5) => {
    const words = text.split(" ");
    return words.length <= maxWords
      ? text
      : words.slice(0, maxWords).join(" ") + "...";
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 pb-10">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">
          My Blog
        </h1>

        {/* Featured Carousel */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
            Featured Posts
          </h2>

          <div className="overflow-hidden w-full relative">
            <motion.div
              ref = {carouselRef}
              animate = {carouselControls}
              className="flex w-max gap-g px-4 will-change-transform smooth-carousel"
            >
              {[...featuredPosts, ...featuredPosts].map((post, i) => (
                <Link
                key = {post.slug}
                href={`/${post.slug}`}
                className="block"
                >
                  <div key={i} className="inline-block mx-8 shadow-lg mt-4 mb-10 rounded-lg transiton duration-500 hover:scale-105 hover:shadow-xl ease-in-out cursor-pointer overflow-hidden">
                    <div className="relative aspect-[4/3] w-70 lg:w-100">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Title and Summary */}
                    <div className="py-4 pl-4 bg-gray-100/75 backdrop-blur-sm">
                      <h3 className="text-sm lg:text-lg font-semibold text-gray-900 mb-1">{post.title}</h3>
                      <p className="text-md text-gray-600">{truncate(post.summary)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Tag Filter */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Filter by Tags
          </h2>
          <div className="flex px-2 pb-4 text-xs md:text-base overflow-scroll md:flex-wrap justify-left md:justify-center gap-3">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 sm:overflow-jusitify md:px-4 md:py-2 rounded-full border-2 border-black transition
                duration-300 ease-in-out cursor-pointer
                ${
                  selectedTag === tag || (!selectedTag && tag === "All")
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* All Blog Posts */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
            All Posts
          </h2>

          <div className="max-w-screen-xl mx-[5%] px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}`}
                className="block"
              >
                <div className="relative bg-gray-200 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 hover:scale-105">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="px-2 py-1">
                    <h3 className="text-md font-semibold text-gray-900">
                      {post.title}
                    </h3>
                    <h4 className="text-gray-900">{post.date}</h4>
                    <p className="text-sm text-gray-800 truncate">{post.summary}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-600 text-center py-4 px-0">
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
    </>
  );
}


