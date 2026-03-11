export const data = {
  basics: {
    name: "Bina Duwal",
    titles: [
      "Frontend Developer",
      "Full Stack Developer",
      "Backend Developer",
      "UI / UX Designer"
    ],
    summary: "Passionate and results-driven frontend developer with nearly 1 year of experience in building responsive, scalable, and user-focused web applications using React.js, Next.js, and modern UI frameworks. Adept at collaborating with cross-functional teams, optimizing application performance, and delivering clean, maintainable code. Familiar with Agile/Scrum environments, version control, and modern testing tools. Eager to grow and contribute to impactful projects.",
    location: "Bhaktapur, Nepal",
    email: "duwalbina2@gmail.com",
    phone: "98xxxxxxxx",
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/bina-duwal/" },
      { name: "Github", url: "https://github.com/binaduwal" }
    ]
  },
  experience: [
    {
      company: "Uplift Solutions",
      location: "Chakupath, Lalitpur",
      role: "Junior Frontend Developer",
      dates: "Jun-current",
      bullets: [
        "Built a schema-based CMS to dynamically manage website content.",
        "Optimized website performance for faster load times and better responsiveness.",
        "Identified and fixed UI and functional issues across multiple website pages."
      ],
      metrics: ["Performance Optimization", "CMS Development"]
    },
    {
      company: "SysQube Technology",
      location: "Shankhamul, Kathmandu",
      role: "MERN Developer Intern",
      dates: "Feb-Jun",
      bullets: [
        "Developed a MERN-based Order Management System with secure role-based access.",
        "Built a dynamic CMS using React, Redux Toolkit, RTK Query, and Tailwind CSS.",
        "Integrated RESTful APIs and ensured responsive, user-friendly interfaces."
      ],
      metrics: ["MERN Stack", "Role-based Access"]
    }
  ],
  projects: [
    {
      title: "Bodykore Website",
      stack: ["Nextjs"],
      image: "/images/Bodykore.png",
      bullets: [
        "Worked on SEO optimization for better search engine visibility.",
        "Implemented responsive design for mobile, tablet, and desktop devices.",
        "Developed and improved cart functionality for product purchases.",
        "Identified and fixed UI and functional issues across the website."
      ],
      demo:"https://www.bodykore.com/"
    },
    {
      title: "Bodykore CMS",
      stack: ["React", "Node.js", "Express.js", "MongoDB"],
      image: "/images/cms-bodykore.png",
      bullets: [
        "Built CMS pages to manage website content and products.",
        "Implemented add, edit, and delete functionality for data management.",
        "Integrated REST APIs to display and update content dynamically.",
        "Created reusable components for forms, tables, and layouts.",
      ],
      demo:"https://cms.bodykore.com/"
    },
    {
      title: "Content Management System",
      stack: ["React", "Redux Toolkit", "RTK Query", "Node.js", "Express.js", "MongoDB"],
      image: "https://picsum.photos/seed/cms/800/600",
      bullets: [
        "Built a dynamic CMS similar to WordPress, enabling users to manage content and modify the frontend dynamically.",
        "Implemented media handling (image upload/delete), a custom rich text editor, and a responsive UI.",
        "Used Redux Toolkit and RTK Query for efficient state and data management."
      ]
    },
    {
      title: "Food Delivery Website",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "https://picsum.photos/seed/food/800/600",
      bullets: [
        "Built a responsive food delivery app using Next.js, TypeScript, and Tailwind CSS.",
        "Implemented reusable components, dynamic routing, and clean UI design to enhance performance and user experience."
      ]
    },
    {
      title: "Duwal.Agency",
      stack: ["React", "Tailwind CSS", "Framer Motion"],
      image: "https://picsum.photos/seed/agency/800/600",
      bullets: [
        "Built a responsive digital agency website using React, Tailwind CSS, and Framer Motion with animated UI and clean component architecture."
      ]
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: [
        {
          name: "JavaScript",
          color: "#F7DF1E",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
          name: "TypeScript",
          color: "#3178C6",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        },
        {
          name: "HTML5",
          color: "#E34F26",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        {
          name: "CSS3",
          color: "#1572B6",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },
        {
          name: "React",
          color: "#61DAFB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
          name: "React Native",
          color: "#61DAFB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
          name: "Next.js",
          color: "#000000",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        },
        {
          name: "Node.js",
          color: "#339933",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        },
        {
          name: "Express",
          color: "#000000",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        },
        {
          name: "MongoDB",
          color: "#47A248",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        }
      ]
    }
  ],
  education: [
    {
      institution: "Bhaktapur Multiple Campus",
      location: "Bhaktapur, Nepal",
      degree: "Bachelor in Computer Science and Information Technology",
      dates: "2021-2025"
    },
    {
      institution: "Khwopa Secondary School",
      location: "Bhaktapur, Nepal",
      degree: "+2 Science",
      dates: "Completed"
    }
  ],
  certifications: [
    { name: "One month Python Bootcamp", issuer: "Nepal Student Union" },
    { name: "MERN Stack Development Course", issuer: "Digital Pathsala" }
  ]
};
