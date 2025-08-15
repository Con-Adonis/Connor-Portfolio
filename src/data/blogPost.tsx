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
    featured: false,
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
    date: "2025-7-3",
    tags: ["AI", "MLH"],
    featured: false,
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
  {
    slug: "AWS-Summit",
    title: "AWS Summit NYC 2025!",
    image: "/blogposts/awsSummit25.jpeg",
    date: "2025-7-16",
    tags: ["AWS", "AI"],
    featured: true,
    summary: "I had the oppourtunity to attend the Amazon Web Services Summit in Manhattan NYC!",
    content: `
    Earlier today I had the oppourtunity to attend the Amazon Web Services (AWS) Summit in Manhattan NYC! It was an incredible experience that I will never forget.

    The event was incredibly packed, with thousands of attendees from around the world all in the Javtis Center, and for good reason! Many top tech companies set up shop to showcase their latest and greatest technologies; including Meta, NVIDIA, Anthropic, and (of course) Amazon!

    The main theme was obvious, agentic AI! I went from booth to booth looking at the latest AI technologies from Calude playing Pokémon Red, to NVIDIA's latest two-way conversational agent! I also collected tons of tech stickers, all of which are proudly displayed on my MacBook!

    The whole summit was fantastic, but two events went far past my expectations!
    Firstly, AWS revealed Amazon Bedrock AgentCore, which allows for the deployment and operation of AI agents at an incredible scale! This technology allows for the independent or connected release of agents using any framework both within and outside the suite of foundational models they offer. Another feature they made sure to emphasize was the use of Model Context Protocol (MCP) servers, which AWS claims "provides a standardized way for LLMs to connect to data sources and tools". This is an cutting-edge development, as it allows agents to more effectively interact with the external internet (browsing the web, updating calendars and event sheets, collaborating with other agents) while also giving said agents greater compatibility and context; a key feature in preventing hallucinations! This technology is a game changer for the industry and how the worlld interacts with AI! I have an exciting project in the works with a focus on agentic AI that I will make sure to detail more as it develops, but I can say in the mean time that this technology can be a great asset to it!
    The second experience that blew me away was the AWS Skills Builder service, which is a free online learning platform that offers courses on AWS services and cloud computing. I was able to take a full course on making a custom entity recognition model! Using Amazon S3 and Bedrock, I trained the model to detect instances of any Amazon service or employee within any text file. This wasn't a simple keyword search, though; this model was trained on the context in which these terms were used, allowing it to flag instances even if it wasn't trained on those specific phrases! This is a fantastic service that I will absolutely use in the future as I continute my engineering journey.

    Overall, the AWS Summit was an invaluable experience that I will never forget. Though there was a lot to learn, as this was a summit that focused on the latest and greatest in AI, I was still able to walk away with a greater understanding of the industry and the tools available to me. I am incredibly grateful for the opportunity to attend this event, and I look forward to applying what I learned in my future projects.

    Connor
    `,
  },
  {
    slug: "geekspeaker-founding-engineer",
    title: "GeekSpeaker Founding Engineer!",
    image: "/blogposts/geekspeaker.png",
    date: "2025-7-15",
    tags: ["Web Development", "Career"],
    featured: true,
    summary: "I am very excited to announce that I have been onboarded to GeekSpeaker as a founding engineer!",
    content: `
    Today, I'm very excited to announce that I've been onboarded to GeekSpeaker as a founding engineer! This is a project I've already been investing a lot of time into, and I'm thrilled to now be a full-time member of the team!

    I met the CEO and Founder, Golvis Tavarez, at the MLH Roadshow on June 27th, which I mentioned in a previous blog post. We got along very well, and he gave me his business card and shared his ideas with me. I believe the team he has assembled is smart and dedicated to helping people, which aligns perfectly with my core value in tech: to create solutions that genuinely benefit others.

    GeekSpeaker is a platform that hosts a suite of software with the objective of serving its niche. I can't wait to share more details about the specifics of the projects and my contributions to them in the future! I highly recommend checking out their website at https://www.geekspeaker.com/. I believe their mission is a noble one, and I'm excited to be a part of it.
    
    Connor
    `,
  },
  {
    slug: "sga-senator-start",
    title: "I'm now a Senator of Tech and Design for SGA!",
    image: "/blogposts/SGA_Const.jpeg",
    date: "2025-7-31",
    tags: ["Student Experiences", "Career"],
    featured: false,
    summary: "Today I just got elected  within City Tech's SGA as a Senator of Technology and Design!",
    content: `
    Today I just got elected within City Tech's Student Government Association (SGA) as a Senator of Technology and Design!

    This is a huge responsibility that I am honored to be taking on. As a Senator, I will be representing the interests of my fellow students in the Technology and Design department by advocating for their needs and concerns. I will also be working with the SGA to create a more inclusive and supportive environment for all students.
    I am excited to be a part of this organization and to have the opportunity to make a difference in the lives of my fellow students. I believe that by working together, we can create a better future for all students at City Tech.

    As a student in the tech industry, I am particularly passionate about giving students the oppourtunity to get hands on experience in the field that will impress employers. I plan to work with the SGA to create more opportunities for students to get involved in tech-related initiatives, such as hackathons, workshops, and internship programs. I also want to ensure that students have access to the resources they need to succeed in their studies, such as tutoring, mentoring, and career counseling. City Tech has many of these resources available already, but I want to enhance them to their greatest potential, and ensure that all students are aware and able to access them.
    
    I can't wait to share updated about the changes I will be making in the future! I hope to make a positive impact on the lives of my fellow students and to help them achieve their goals!

    Connor
    `,
  },
  {
    slug: "prj",
    title: "Lots of Projects!",
    image: "/blogposts/proj.png",
    date: "2025-8-11",
    tags: ["ML", "Career"],
    featured: false,
    summary: "Summer classes are finished so now I get to work on lots of projects!",
    content: `
    Summer classes finished recently, so that means I can dedicate my time to working on projects!

    I have a lot to juggle at the moment, but I'm excited to share what I've been working on. Here are some of the projects I'm currently involved in:

    1. Silent Convo
    Under the GeekSpeaker umbrella of software solutions, we are currently developing Silent Convo! This is a platform that encrypts phone calls end-to-end for fully anonymous group therapy sessions. It greatly aligns with my core value of using tech to help people, and I'm excited to be a part of it!

    2. StockBot
    This is a new development that has been making steady progress! It's an smart stock trading AI agent that has many more capabilities than your typical price predition model. My current focus has been on integrating real-time news analysis for a better understanding of the global market! By using a news scraper another teammate has built, I am able to feed news articles to a language model in order to see if a given stock is being mentioned about and in what context. As seen in the picture above, I was able to have a model identify the stocks that are being affcted in a sample article! Of course this is just the beginning, we still need sentiment analysis, and maybe even a reasoning model; but I'm very excited about the potential of this project!

    3. Grow with Google Scholarship and IT Automation with Python certificate
    I was recently accpeted by Google and Mentor Me Collective into their Grow with Google Scholarship program! This program provides me with access to Google's courses, mentorship, and a community of like minded students. I am currently working on completing the IT Automation with Python certificate, which I am very excited about! I believe this has strong parallels to my dream career of machine learning engineering, as they both involve teaching systems to learn from data and make decisions without explicit programming! As of today, I'm 20% done, can't wait to see what I learn!

    Connor
    `,
  },
  {
    slug: "Devvit",
    title: "Hackathon at Reddit HQ!",
    image: "/blogposts/devvit.jpg",
    date: "2025-8-12",
    tags: ["Career"],
    featured: true,
    summary: "Summer classes are finished so now I get to work on lots of projects!",
    content: `
    I'm super grateful to have attended Reddit's hackathon the other day, where they showcased their new game hosting platform, Devvit! It was so cool to learn about the platform, and my game, ReflexReaction, even won second place!

    The platform is a new gaming initiative the company is spearheading. All you have to do is build the game, and they handle the backend and hosting for you! This is a great way to get started in game development. While this isn't the route I'm aiming for in the future, it was a great opportunity to learn about new technologies being developed.

    The game I built in the allotted hour and a half, ReflexReaction, is a game I was surprised worked so well. The concept is simple: click the shape the instructions tell you to. This could be a red square, a blue triangle, or any shape and color the game decides. As the levels increase, more obstacles are added; the shapes start moving, the instructions begin to throw you off, and everything gets faster and faster until you lose!

    I'm so proud that I won second place and got a branded thermos!

    I'm looking forward to using Devvit in the future!

    Connor
    `,
  },
];
