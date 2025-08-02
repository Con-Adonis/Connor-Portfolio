import { useRouter } from "next/router";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { blogPosts, BlogPost } from "@/data/blogPost";

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;

  const post: BlogPost | undefined = blogPosts.find((p) => p.slug === slug);

  if (router.isFallback || !post) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-20 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center">
          <h1 className="text-3xl text-gray-900">Loading Post...</h1>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20 px-4 sm:px-6 md:px-12 pb-10">
        <article className="max-w-3xl mx-auto py-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-gray-600 text-sm mb-6">Published on {post.date}</p>
          <div className="w-full h-80 relative mb-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </article>
        <article>
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed mx-[10%]">
                {/* Display the full content. whitespace-pre-line preserves newlines from template literals. */}
                <p className="whitespace-pre-line">{post.content}</p>
            </div>
        </article>
      </main>
    </>
  );
}
