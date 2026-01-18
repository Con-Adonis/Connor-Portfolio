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
    tags: ["Next.js", "Web Development", "Typescript"],
    featured: true,
    summary: "My blog is finally up! Getting this set up was a huge learning experience!",
    content: `
    ## Welcome to the Next.js Journey!

    Next.js is a powerful React framework that enables you to build server-rendered React applications, static websites, and more. It offers a fantastic developer experience with features like file-system routing, API routes, image optimization, and built-in CSS support.

    ### Why Next.js?

    1.  **Server-Side Rendering (SSR) & Static Site Generation (SSG):** Choose the rendering strategy that best fits your needs for performance and SEO.
    2.  **File-system Routing:** Create pages and API endpoints by simply adding files to the 'pages' or 'app' directory. No need for complex routing configurations!
    3.  **API Routes:** Build your backend API directly within your Next.js project. This is super convenient for small to medium-sized applications.
    4.  **Image Optimization:** Automatically optimizes images for different screen sizes and formats, significantly improving loading times.
    5.  **Fast Refresh:** Experience instant feedback on your code changes, making development incredibly efficient.

    ### Setting Up Your First Project

    To start a new Next.js project, open your terminal and run:

    \`\`\`bash
    npx create-next-app@latest my-next-app
    \`\`\`

    Follow the prompts, and once the installation is complete, navigate into your new project directory:

    \`\`\`bash
    cd my-next-app
    \`\`\`

    Then, start the development server:

    \`\`\`bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    \`\`\`

    Your Next.js application will now be running on \`http://localhost:3000\`. Open your browser and check it out!

    ### Exploring the Project Structure

    You'll notice a few key directories:

    * \`pages/\`: This is where your application's routes are defined. Each \`.js\`, \`.jsx\`, \`.ts\`, or \`.tsx\` file in this directory becomes a route.
    * \`public/\`: Used for serving static assets like images, fonts, and icons.
    * \`styles/\`: Contains your global CSS and Tailwind CSS configuration (if you choose to use it, which we highly recommend!).
    * \`components/\`: A good place to store your reusable React components.

    This is just the beginning! Next.js has a vibrant ecosystem and extensive documentation. Happy coding!
    `,
  },
];
