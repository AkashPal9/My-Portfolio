import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    f,
    appi,
    carrent,
    jobit,
    tripguide,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    ,
    {
      title: "Backend Developer",
      icon: backend,
    },
   
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "React Native Developer",
      company_name: "Appinlay Pvt ltd",
      icon: appi,
      iconBg: "#383E56",
      // date: "Aug 2023 - Present",
      points: [
        " Developed and maintain mobile applications , UI/UX implementation, State management, Testing and debugging,Version control, Optimize app performance.",
        "Proficient in utilizing Android Studio and Xcode for native mobile app development and deployment.",
        "Built and launched a cross-platform mobile app, Integrated third- party APIs, Implemented responsive design,Troubleshooting and bug fixing, Cross-functional collaboration, Continuous learning.",
      ],
    },
    {
      title: "React Developer",
      company_name: "Faspi Enterprises Pvt ltd",
      icon: f,
      iconBg: "#383E56",
      // date: "Sep 2022 - jan 2023",
      points: [
        "Developing and maintaining web & Mobile applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    }
  ];
  
  
  const projects = [
    {
      name: "E Commerce Web",
      description:"Developed a robust and scalable e-commerce application using the MERN Stack (MongoDB, Express.js, React.js,Node.js)  showcasing proficiency in full-stack development.Integrated real-time payment gateways such as PayPal and debit/credit card options, enabling seamless and secure transactions for customers.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/AkashPal9/paul-shop",
      online_link:"https://paul-shop.onrender.com/"
    },
    {
      name: "Quiz Application",
      description:
        "The quiz application is a comprehensive platform that enables both administrators and users to engage in a dynamic quiz experience. Administrators have the authority to create, update, and delete quizzes, as well as share them with registered users. Users,can login and can participate in quizzes by answering questions.",
      tags: [
        {
          name: "Express",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/AkashPal9/Quiz-App",
    },
    {
      name: "Other Projects on Github",
      description:
        "Collection of my other projects",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };