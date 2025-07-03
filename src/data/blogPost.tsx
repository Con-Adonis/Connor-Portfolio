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
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    image: "/snaplangimg.png", // Example image path, create a /public/blog folder
    date: "2025-06-27",
    tags: ["Next.js", "Web Development", "Tutorial"],
    featured: true,
    summary: "Dive into the world of Next.js and learn how to set up your first project, understand file-system routing, and leverage its powerful features for modern web applications.",
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
  {
    slug: "understanding-agile-methodologies",
    title: "Understanding Agile Methodologies",
    image: "/blog/agile.png",
    date: "2025-06-25",
    tags: ["Project Management", "Agile", "Software Development"],
    featured: true,
    summary: "Explore the core principles of Agile and how methodologies like Scrum and Kanban can revolutionize your software development workflow, fostering collaboration and adaptability.",
    content: `
    ## The Power of Agile Methodologies

    Agile is a mindset and a set of principles for software development, emphasizing iterative progress, collaboration, and adaptability to change. Unlike traditional "Waterfall" methods, Agile focuses on delivering value quickly and continuously incorporating feedback.

    ### Key Agile Principles:

    1.  **Individuals and Interactions** over Processes and Tools
    2.  **Working Software** over Comprehensive Documentation
    3.  **Customer Collaboration** over Contract Negotiation
    4.  **Responding to Change** over Following a Plan

    ### Popular Agile Frameworks:

    * **Scrum:** A framework for developing, delivering, and sustaining complex products. It's characterized by short iterations (sprints), daily stand-ups, and defined roles (Product Owner, Scrum Master, Development Team).
    * **Kanban:** A method for managing and improving work across human systems. It visualizes workflow on a "Kanban board" and focuses on limiting work-in-progress (WIP) to improve flow.

    ### Benefits of Agile:

    * **Flexibility:** Easily adapt to changing requirements.
    * **Faster Delivery:** Deliver valuable features to users more frequently.
    * **Improved Quality:** Continuous feedback and testing lead to higher quality products.
    * **Increased Collaboration:** Promotes strong communication within the team and with stakeholders.
    * **Higher Customer Satisfaction:** Customers are involved throughout the process, ensuring the product meets their needs.

    Incorporating Agile into your development process can lead to more efficient teams, better products, and happier customers.
    `,
  },
  {
    slug: "my-journey-into-data-science",
    title: "My Journey into Data Science",
    image: "/blog/data-science.png",
    date: "2025-06-20",
    tags: ["Data Science", "Machine Learning", "Career"],
    featured: true,
    summary: "A personal account of my transition and learning experience in the exciting field of data science, from initial curiosity to hands-on projects and continuous learning.",
    content: `
    ## Embarking on the Data Science Path

    My journey into data science wasn't a straight line, but rather a winding path driven by curiosity and a desire to understand the world through data. It started with a fascination for how computers could derive insights and make predictions from vast amounts of information.

    ### Early Steps and Discoveries:

    Initially, my exposure to data was through simple Excel spreadsheets and basic statistical analysis. However, as I delved deeper into computer science, I realized the immense potential of programming languages like Python and the libraries it offers for data manipulation and analysis. Pandas, NumPy, and Matplotlib quickly became my trusted companions.

    The "NYC Violation Parser" project during City Tech's datathon was a pivotal moment. Analyzing over 20 million violation records, identifying patterns, and visualizing geographic and temporal trends truly ignited my passion for data-driven problem-solving. Discovering the \$268M in unnecessary fines from unclean sidewalk citations was a powerful validation of the impact data science can have.

    ### Diving into Machine Learning:

    My interest naturally progressed to machine learning. Online courses, particularly Google's Machine Learning Course and Stanford/DeepLearning.AI's Machine Learning Specialization, provided the theoretical foundations of supervised and unsupervised learning, regression, clustering, and classification theory.

    Building the "CUNY AI Chatbot" with IBM Watsonx for a hackathon was a fantastic practical experience. Working in a team to train the model on degree catalogs, aid resources, and FAQs using prompt engineering and natural language processing showcased the real-world application of ML and NLP. Presenting our solution to IBM mentors and designing it for future student use across CUNY colleges was incredibly rewarding.

    ### Continuous Learning:

    Data science is an ever-evolving field, and I'm committed to continuous learning. Whether it's exploring new algorithms, improving my Python scripting skills, or delving into advanced topics like deep learning, the pursuit of knowledge in this domain is exhilarating. My role as Chief Research Officer in the Data Science and Technology Innovation Club at City Tech further solidifies my commitment to staying at the forefront of this exciting field.

    I'm excited to continue leveraging data to uncover insights, solve complex problems, and build innovative solutions.
    `,
  },
  {
    slug: "python-scripting-for-automation",
    title: "Python Scripting for Automation",
    image: "/blog/python-automation.png",
    date: "2025-06-15",
    tags: ["Python", "Automation", "Scripting"],
    featured: false,
    summary: "Automate repetitive tasks and boost your productivity with practical Python scripting techniques. From file management to web scraping, Python makes it easy.",
    content: `
    ## Automating Your Workflow with Python

    Python's simplicity and vast ecosystem of libraries make it an ideal language for automation. Whether you're managing files, processing data, or interacting with web services, Python scripting can save you countless hours.

    ### Why Python for Automation?

    * **Readability:** Python's clear syntax makes scripts easy to write and understand.
    * **Extensive Libraries:** Libraries like os, shutil, requests, BeautifulSoup, and Selenium provide powerful tools for various automation tasks.
    * **Cross-Platform:** Python scripts run seamlessly on Windows, macOS, and Linux.
    * **Community Support:** A large and active community means plenty of resources and help available.

    ### Common Automation Tasks with Python:

    1.  **File Operations:**
        * Renaming multiple files
        * Organizing files into folders based on type or date
        * Deleting temporary files
        * Reading and writing to various file formats (CSV, JSON, Excel)

    2.  **Web Scraping:**
        * Collecting data from websites (e.g., product information, news articles). My "STIHL Web Scrapper" project is a prime example of this, where I extracted product names, prices, and specifications from an online store.

    3.  **Data Processing:**
        * Automating data cleaning and transformation (e.g., using Pandas).
        * Generating reports from raw data.
        * The "NYC Small Business Violation Analyzer" project used Python and Pandas to clean and analyze over 20 million violation records.

    4.  **Email Automation:**
        * Sending automated emails with reports or notifications.
        * Parsing incoming emails for specific information.

    ### Getting Started with a Simple Script:

    Let's create a simple Python script to rename files in a directory:

    \`\`\`python
    import os

    def rename_files(directory, old_prefix, new_prefix):
        for filename in os.listdir(directory):
            if filename.startswith(old_prefix):
                new_filename = filename.replace(old_prefix, new_prefix, 1)
                old_path = os.path.join(directory, filename)
                new_path = os.path.join(directory, new_filename)
                os.rename(old_path, new_path)
                print(f"Renamed '{filename}' to '{new_filename}'")

    # Example usage:
    # create a dummy directory and files first for testing
    # os.makedirs("my_files", exist_ok=True)
    # with open("my_files/report_2025-01-01.txt", "w") as f: f.write("test")
    # with open("my_files/report_2025-01-02.txt", "w") as f: f.write("test")

    # rename_files("my_files", "report_", "daily_summary_")
    \`\`\`

    This basic example demonstrates how just a few lines of Python can automate a common task. The possibilities are endless when you start combining different libraries and functionalities. Happy scripting!
    `,
  },
];
