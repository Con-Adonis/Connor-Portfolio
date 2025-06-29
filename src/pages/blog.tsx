import Navbar from "@/components/navbar";
import Image from "next/image"; // Image component is used directly here
import { blogPosts, BlogPost } from "@/data/blogPost"; // Import data from your dedicated folder
import { useState, useMemo } from "react";
import { motion } from "framer-motion"; // For carousel animations

export default function Blog() {
  // State for selected tags for filtering
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Function to truncate the summary to "a sentence or so"
  // This function is now embedded directly in the page file
  const truncateSummary = (text: string, maxWords: number = 20) => {
    const words = text.split(/\s+/);
    if (words.length <= maxWords) {
      return text;
    }
    return words.slice(0, maxWords).join(" ") + "...";
  };

  // --- Data Processing (Memoized for performance) ---
  // Memoization ensures these calculations only run when their dependencies change.

  // 1. Sort all posts by date (newest to oldest)
  const sortedPosts = useMemo(() => {
    return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []); // blogPosts is static, so this runs once

  // 2. Filter for featured posts for the horizontal carousel
  const featuredPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.featured);
  }, [sortedPosts]);

  // 3. Get all unique tags from all posts and sort them alphabetically, adding an "All" option
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    sortedPosts.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag));
    });
    return ["All", ...Array.from(tags).sort()];
  }, [sortedPosts]);

  // 4. Filter posts based on the currently selected tag
  const filteredPosts = useMemo(() => {
    if (!selectedTag || selectedTag === "All") {
      return sortedPosts;
    }
    return sortedPosts.filter((post) => post.tags.includes(selectedTag));
  }, [sortedPosts, selectedTag]);

  // --- Render Logic ---

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20 px-4 sm:px-6 md:px-12 pb-10">
        <h1 className="text-5xl text-gray-900 mb-8 text-center pt-8">My Blog</h1>

        {/* Featured Posts Horizontal Carousel */}
        {featuredPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Featured Posts</h2>
            <motion.div
              className="flex overflow-x-auto gap-6 pb-4 px-2"
              whileTap={{ cursor: "grabbing" }}
              style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              {featuredPosts.map((post) => {
                const [isHovered, setIsHovered] = useState(false); // State for each card's hover

                return (
                  // Blog Post Card (embedded directly)
                  <div
                    key={post.slug} // Using slug as the unique key
                    className="relative bg-gray-100 rounded-lg overflow-hidden min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] h-auto flex-shrink-0 shadow-lg group cursor-pointer transition hover:scale-105 hover:shadow-xl block"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {/* Image */}
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    {/* Title and Tags (always visible) */}
                    <div className="absolute bottom-0 left-0 w-full bg-gray-200/75 text-black p-4 backdrop-blur-sm">
                      <h2 className="text-lg font-semibold mb-1">{post.title}</h2>
                      <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                        {post.tags.map((tag: string) => ( // Explicitly typed 'tag'
                          <span key={tag} className="bg-gray-300 px-2 py-0.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Summary on hover (desktop only) */}
                    <div
                      className={`absolute inset-0 bg-black/70 text-white p-4 flex items-center justify-center text-center opacity-0 transition-opacity duration-300 pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto`}
                    >
                      <p className="text-sm px-2">
                        {truncateSummary(post.summary)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
            {/* Custom CSS to hide scrollbar for Webkit browsers */}
            <style jsx>{`
              ::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </section>
        )}

        {/* Tag Filter Buttons */}
        <section className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Filter by Tags</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full border-2 border-black transition duration-300 ease-in-out
                  ${selectedTag === tag || (!selectedTag && tag === "All")
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-100"
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* All Blog Posts Grid (Filtered and Sorted) */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">All Posts</h2>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => {
                const [isHovered, setIsHovered] = useState(false); // State for each card's hover

                return (
                  // Blog Post Card (embedded directly)
                  <div
                    key={post.slug} // Using slug as the unique key
                    className="relative bg-gray-100 rounded-lg overflow-hidden w-full h-full max-w-sm shadow-lg group cursor-pointer transition hover:scale-105 hover:shadow-xl block"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {/* Image */}
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    {/* Title and Tags (always visible) */}
                    <div className="absolute bottom-0 left-0 w-full bg-gray-200/75 text-black p-4 backdrop-blur-sm">
                      <h2 className="text-lg font-semibold mb-1">{post.title}</h2>
                      <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                        {post.tags.map((tag: string) => ( // Explicitly typed 'tag'
                          <span key={tag} className="bg-gray-300 px-2 py-0.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Summary on hover (desktop only) */}
                    <div
                      className={`absolute inset-0 bg-black/70 text-white p-4 flex items-center justify-center text-center opacity-0 transition-opacity duration-300 pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto`}
                    >
                      <p className="text-sm px-2">
                        {truncateSummary(post.summary)}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-gray-600 text-lg col-span-full">No posts found for the selected tags.</p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
