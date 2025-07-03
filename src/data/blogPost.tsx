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
    image: "/blogposts/blogss.png",
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
  {
    slug: "MLH-Roadshow",
    title: "Major League Hacking AI Roadshow!",
    image: "/blogposts/mlh7-2.jpeg",
    date: "2025-7-2",
    tags: ["AI", "MLH"],
    featured: true,
    summary: "I had a great time attending MLH's AI Roadshow on June 27th!",
    content: `
    Last week I had the pleasure to see Major League Hacking's event in Chinatown, Manhattan last month for their nation wide AI Roadshow!

    Major League Hacking (MLH) is not the cybercriminal organization many would think of when first hearing the name, but rather an organization dedicated to student success through building projects in hackathons!
    Hackathons are events ranging from a couple hours to a handful of days in which students are involved in friendly competition to build a piece of software or solve a problem by using tech! I have attended three so far, and I can confirm they are incredibly fun learning experiences!

    This event wasn't a hackathon, though, but rather a collaboration with Google's DeepMind team to show off the capabilities of their AI model Gemini. They had a dozens of computers logged into their AI Studio application where students can experiment in making AI generated text, photos, code, or even video!
    They even had a "vibe coding challenge" in which students were encouraged to make a project in collaboration with Gemini. You say what you want made, and Gemini makes the software in seconds. I made a "What the fork is for dinner?" meal selector (as pictured above) which is a random meal selector that gives you Google links to recipes of the dinner that is randomly selected, all while using too many food puns!
    To my suprise, I won a backpack from the event! It was really something to see how far AI generation has come in the past couple years!

    I'm looking forward to MLH's upcoming hackathons that I have applied to attend at some great universities!

    Connor
    `,
  },
];
