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
  threejs,
  bagzilla,
  photoexpress,
  genietrox,
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
    title: "Shopify Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Wordpress Developer",
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
    name: "Shopify",
    icon: shopify,
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
    name: "Three JS",
    icon: threejs,
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
    title: "Wordpress Developer",
    company_name: "PhotoExpress",
    icon: photoexpress,
    iconBg: "#383E56",
    date: "March 2023 - May 2023",
    points: [
      "Developing and revamping webpages using wordpress and php and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Implementing whatsapp shopping using Interakt for notifying empty cart and purchases",
    ],
  },
  {
    title: "Shopify Developer",
    company_name: "BagZillaOfficial",
    icon: bagzilla,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Developing and maintaining website using Shopify and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Getting product details from various luxury brand websites using web scrapping.",
      "Maintaining the SEO of the website for faster responses",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Genietrox",
    icon: genietrox,
    iconBg: "#383E56",
    date: "Jan 2024 - April 2024",
    points: [
      "Developing and maintaining websites using Shopify and Wordpress and other related technologies.",
      "Developing and implementing a wholesale option for the buyers on e-commerce platform",
      "Maintained seemless bulk upload of the product",
      "Multi form for cab and sell your items",
      "Developed another website for show casing the team",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "It was difficult gathering images that would look good on our website, but Rick proved me wrong. He not only managed the midjourney prompts, but also made sure the designs were seamless.",
    name: "Santosh Shitole",
    designation: "CEO",
    company: "PhotoExpress",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does. We were on a deadline to go live, he not only managed the website effortlessly but also maintained the product uploads without a problem.",
    name: "Mamta Kedia",
    designation: "CEO",
    company: "Bagzillaoffical",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "We needed a website that had complete control over the offers to be distributed for wholesaler and normal customer, with reward points and subcription. Rick not only managed to pull it off, but also after he optimized both of our websites, our traffic increased by 30%. We can't thank him enough!",
    name: "AnandAnand Sivasankaran",
    designation: "CEO",
    company: "Genietrox",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    testimonial:
      "As a freelancer, Akarshan was very punctual with his deliverables, and always communicated whatsoever the update might be. He showcased exceptional talent in maintaining the UI and responsiveness of the website.",
    name: "Don Pennings",
    designation: "CEO",
    company: "Lake Management Inc",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Revents",
    description:
      "Web-based platform that allows users to search, book, and manage events from various organizers, and talk to them providing a convenient and efficient solution for event management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
