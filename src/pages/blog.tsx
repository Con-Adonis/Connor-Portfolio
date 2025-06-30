"use client";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { blogPosts } from "@/data/blogPost";
import { useEffect, useRef, useState, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { div } from "framer-motion/client";

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const lastScroll = useRef<number | null>(null);

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
    return [...posts, ...posts, ...posts]; // tripled for looping effect
  }, [sortedPosts]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    sortedPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return ["All", ...Array.from(tags).sort()];
  }, [sortedPosts]);

  const filteredPosts = useMemo(() => {
    if (!selectedTag || selectedTag === "All") return sortedPosts;
    return sortedPosts.filter((post) => post.tags.includes(selectedTag));
  }, [selectedTag, sortedPosts]);

  const truncate = (text: string, maxWords = 20) => {
    const words = text.split(" ");
    return words.length <= maxWords
      ? text
      : words.slice(0, maxWords).join(" ") + "...";
  };

  // Autoplay Logic
  useEffect(() => {
    let frame: number;

    const scrollLoop = () => {
      if (!carouselRef.current || isPaused) return;

      carouselRef.current.scrollLeft += 1;
      if (
        carouselRef.current.scrollLeft >=
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth
      ) {
        carouselRef.current.scrollLeft = 0;
      }
      frame = requestAnimationFrame(scrollLoop);
    };

    frame = requestAnimationFrame(scrollLoop);

    return () => cancelAnimationFrame(frame);
  }, [isPaused]);

  // Pause if user scrolls manually
  useEffect(() => {
    const ref = carouselRef.current;
    if (!ref) return;

    const handleScroll = () => {
      setIsPaused(true);
      lastScroll.current = Date.now();
    };

    ref.addEventListener("scroll", handleScroll);

    const resume = setInterval(() => {
      if (
        isPaused &&
        lastScroll.current &&
        Date.now() - lastScroll.current > 3000
      ) {
        setIsPaused(false);
      }
    }, 1000);

    return () => {
      ref.removeEventListener("scroll", handleScroll);
      clearInterval(resume);
    };
  }, [isPaused]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 pb-20">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">
          My Blog
        </h1>

        {/* Featured Carousel */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
            Featured Posts
          </h2>
          <div className="overflow-hidden relative">
            <div className="whitespace-nowrap animate-carousel">
              {[...featuredPosts, ...featuredPosts].map((post, i) => (
                <div key={i} className="inline-block w-[30vm] mx-4">
                  bruh
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tag Filter */}
        <section className="mb-16 text-center px-6">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Filter by Tags
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full border-2 border-black transition
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
          <div className="max-w-screen-xl mx-auto grid auto-rows-min gap-8" style={{ columnCount: '1', columnGap: '2rem' }}>
            {filteredPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition duration-300 mb-8 break-inside-avoid-column max-w-[30vw]"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-md font-semibold text-gray-900 mb-2 truncate">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-800">{truncate(post.summary)}</p>
                </div>
              </div>
            ))}
          </div>

          <style jsx>{`
            .grid {
              display: block;
            }
            @media (min-width: 640px) {
              .grid {
                column-count: 2;
              }
            }
            @media (min-width: 1024px) {
              .grid {
                column-count: 3;
              }
            }
            @media (min-width: 1280px) {
              .grid {
                column-count: 4;
              }
            }
          `}</style>
        </section>
      </main>
    </>
  );
}


