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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  fionafoods,
  ecotour,
  
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Web 3.0 Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React JS Developer",
    // company_name: "Starbucks",
    // icon: starbucks,
    iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React JS and other related technologies.",
      "Collaborated closely with UX/UI designers to implement responsive and visually appealing user interfaces.",
      "Gained experience in version control systems and code collaboration tools while working with remote teams..",
      "Worked with clients to develop custom React JS applications tailored to their specific needs.",
    ],
  },
  {
    title: "React Native Developer",
    // company_name: "Tesla",
    // icon: tesla,
    iconBg: "#E6DEDD",
    // date: "Jan 2021 - Feb 2022",
    points: [
      "Developed custom React Native applications for various clients across different industries.",
      "Designed and implemented navigation flows, user interfaces, and interactive components for mobile apps.",
      "Integrated payment gateways, to facilitate in-app transactions and improve revenue generation.",
      "Collaborated with clients remotely, providing regular updates and addressing feedback to meet project requirements and deadlines.",
    ],
  },
  {
    title: "Web 3.0 Developer",
    // company_name: "Shopify",
    // icon: shopify,
    iconBg: "#383E56",
    // date: "Jan 2022 - Jan 2023",
    points: [
      "Worked on the front-end interfaces that interacted with smart contracts.",
      "Assisted in Building and maintenance of DeFi applications, decentralized exchanges (DEXs), and yield farming projects.",
      "Participated in code reviews and contributed to the documentation of smart contracts.",
      "Conducted research on blockchain scalability solutions, including sharding and layer 2 protocols.",
    ],
  },
  {
    title: "Content Creator",
    // company_name: "Meta",
    // icon: meta,
    iconBg: "#E6DEDD",
    // date: "Jan 2023 - Present",
    points: [
      "Developed and executed social media campaigns to engage the campus community and increase magazine readership.",
      "Managed a personal blog and social media channels focused on campus media.",
      "Collaborated with the editorial team to plan and execute content calendars and optimize content for SEO, leading to a 40% increase in organic traffic",
      "Utilized affiliate marketing and sponsored posts to monetize the blog, resulting in a sustainable income stream.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
    name: "Sarah Williams",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like he does.",
    name: "Jonathan Smith",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Dami optimized our website, our traffic increased by 40%. We can't thank him enough!",
    name: "Maarten Middlelar",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fiona Foods",
    description:
      "Web-based platform that offers quick access to a variety of delicious food options. It adapts to different devices and screen sizes, ensuring a consistent browsing experience. With a visually appealing interface.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Vanilla JS",
        color: "pink-text-gradient",
      },
    ],
    image: fionafoods,
    source_code_link: "https://github.com/TechByDami/Fiona_Foods",
  },
    {
    name: "Eco-Tours",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Vanilla JS",
        color: "pink-text-gradient",
      },
    ],
    image: ecotour,
    source_code_link: "hhttps://github.com/TechByDami/Travels_and_Tours_Website",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
