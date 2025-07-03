export interface BlogPost {
  slug: string; // Unique identifier for the post URL
  title: string;
  image: string; // Path to the cover image
  date: string; // Format: 'YYYY-MM-DD' for easy sorting
  tags: string[]; // Array of strings for categories/tags
  featured: boolean; // True if it should appear in the carousel
  summary: string; // A short excerpt for the card hover effect
  content: string; // Full content, using template literals for multi-line
}

export const blogPosts: BlogPost[] = [
  {
    slug: "blog-uploaded",
    title: "Uploading my blog!",
    image: "/blogposts/blogss.png", // Example image path, create a /public/blog folder
    date: "2025-7-2",
    tags: ["Web Development"],
    featured: true,
    summary: "My blog is finally up! Getting this set up was a huge learning experience!",
    content: `
    Welcome to my first blog post!

    Getting this set up has been an immense challenge, but one I tackled with open arms. It taught me invaluable lessons that I will definitely carry with me in the future.

    React and its components.

    This whole website is built on React, a JavaScript library that many web developers use to build responsive and versatile web applications. This includes Next.js, a React framework that extends React's capabilties, offering features like server-side rendering and static site generation, both of which are great for optimization!
    Other technologies I've utilized include Typescript and Tailwind CSS, frameworks built on JavaScript and CSS respectively that provide much more features and a streamlined process.


    I really wish that I could've set this up sooner, as I have had so many amaing experiences in the past couple years to make me the programmer that I am today, but I can't let that stop me from documenting future events! Now that I have this set up, I'm ecstatic to use this site as a documentation of my journey. I'll probably upload what I've learned throughout the week every Sunday so stay tuned for more updates!!

    Connor
    `,
  },
];
