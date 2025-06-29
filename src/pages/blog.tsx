import Navbar from "@/components/navbar";
import Image from "next/image";
import { blogPosts, BlogPost } from "@/data/blogPost";
import { useState, useMemo, useRef, useEffect } from "react";
import { motion, useAnimation, PanInfo } from "framer-motion";

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const carouselControls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselX = useRef(0);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const truncateSummary = (text: string, maxWords: number = 20) => {
    const words = text.split(/\s+/);
    return words.length <= maxWords ? text : words.slice(0, maxWords).join(" ") + "...";
  };

  const sortedPosts = useMemo(() => [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()), []);
  const featuredPosts = useMemo(() => {
    const original = sortedPosts.filter((post) => post.featured);
    return original.length === 0 ? [] : Array(3).fill(original).flat();
  }, [sortedPosts]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    sortedPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return ["All", ...Array.from(tags).sort()];
  }, [sortedPosts]);

  const filteredPosts = useMemo(() => {
    if (!selectedTag || selectedTag === "All") return sortedPosts;
    return sortedPosts.filter((post) => post.tags.includes(selectedTag));
  }, [sortedPosts, selectedTag]);

  useEffect(() => {
    const calculateWidth = () => {
      if (carouselRef.current) {
        const children = Array.from(carouselRef.current.children);
        const total = children.reduce((acc, c) => acc + c.clientWidth + 24, 0);
        setCarouselWidth(total);
      }
    };
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
  }, [featuredPosts]);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimeoutRef.current = setTimeout(() => {
      if (!carouselRef.current) return;
      const itemW = carouselRef.current.children[0]?.clientWidth + 24 || 300;
      const originalW = (featuredPosts.length / 3) * itemW;
      carouselX.current -= itemW;
      carouselControls.start({ x: carouselX.current, transition: { duration: 1 } }).then(() => {
        if (Math.abs(carouselX.current) >= originalW) {
          carouselX.current = 0;
          carouselControls.set({ x: 0 });
        }
        startAutoplay();
      });
    }, 3500);
  };

  const stopAutoplay = () => {
    if (autoplayTimeoutRef.current) clearTimeout(autoplayTimeoutRef.current);
    autoplayTimeoutRef.current = null;
  };

  useEffect(() => {
    if (featuredPosts.length) {
      carouselControls.set({ x: 0 });
      startAutoplay();
    }
    return () => stopAutoplay();
  }, [featuredPosts]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    const itemW = carouselRef.current?.children[0]?.clientWidth + 24 || 300;
    const currentX = carouselX.current + info.offset.x;
    carouselX.current = currentX;
    const nearest = Math.round(Math.abs(currentX) / itemW);
    const snapX = -nearest * itemW;
    const maxDrag = -(carouselWidth - (carouselRef.current?.clientWidth || 0));
    const finalX = Math.max(maxDrag, Math.min(0, snapX));
    carouselControls.start({ x: finalX });
    carouselX.current = finalX;
    stopAutoplay();
    startAutoplay();
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20 px-4 sm:px-6 md:px-12 pb-10">
        <h1 className="text-5xl text-gray-900 mb-8 text-center pt-8">My Blog</h1>

        {/* Carousel */}
        <section className="mb-14">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Featured Posts</h2>
          <motion.div
            className="overflow-hidden"
            ref={carouselRef}
            drag="x"
            dragConstraints={{ left: -carouselWidth, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={carouselControls}
          >
            <div className="flex gap-6 px-4">
              {featuredPosts.map((post) => (
                <div key={post.slug} className="min-w-[260px] sm:min-w-[300px] md:min-w-[340px] max-w-[90vw] bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 truncate">{post.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{truncateSummary(post.summary)}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Filter Tags */}
        <section className="mb-10 text-center">
          <div className="flex overflow-x-auto gap-3 px-2 pb-3 sm:justify-center">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`whitespace-nowrap px-4 py-2 rounded-full border-2 border-black text-sm transition duration-300 ease-in-out hover:scale-105 hover:shadow-md
                  ${selectedTag === tag || (!selectedTag && tag === "All")
                    ? "bg-black text-white"
                    : "bg-white text-black"}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* Masonry Blog Grid */}
        <section>
          <div className="max-w-screen-xl mx-auto grid auto-rows-min" style={{ columnCount: 1, columnGap: '1.5rem' }}>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div
                  key={post.slug}
                  className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl mb-8 transition-all break-inside-avoid-column group"
                >
                  <div className="absolute top-2 left-2 z-10 bg-white/80 px-3 py-1 text-sm font-medium text-gray-800 rounded-md">
                    {post.title}
                  </div>

                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 w-full bg-black/70 text-white px-4 py-3 pointer-events-none flex items-center justify-center text-center overflow-hidden"
                    initial={{ y: "100%", opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="text-sm">{truncateSummary(post.summary)}</p>
                  </motion.div>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-lg col-span-full">No posts found for the selected tags.</p>
            )}
          </div>

          {/* Column responsiveness */}
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
