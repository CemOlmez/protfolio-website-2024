import xclone from "../assets/img/mern-x-clone.png";
import restorn from "../assets/img/restoran-clone.png";
import easybank from "../assets/img/easybank-landing-page.png";
import weiss from "../assets/img/weiss-landing-page.png";

import htmlImg from "../assets/svg/html.svg";
import cssImg from "../assets/svg/css.svg";
import javascriptImg from "../assets/svg/javascript.svg";
import nodejsImg from "../assets/svg/nodejs.svg";
import expressjsImg from "../assets/svg/expressjs.svg";
import mongodbImg from "../assets/svg/mongodb.svg";
import reactImg from "../assets/svg/react.svg";
import tailwindcssImg from "../assets/svg/tailwindcss.svg";
import bootstrapImg from "../assets/svg/bootstrap.svg";
import pythonImg from "../assets/svg/python.svg";


export const projectsData = [
  {
    title: "Twitter Clone (MERN Stack)",
    description:
      "Social media platform clone with user authentication, real-time updates, and responsive UI.",
    tags: ["MongoDB", "Express.js", "React", "Tailwind CSS", "Node.js"],
    imageUrl: xclone,
    url: "https://mern-twitter-clone-gbl2.onrender.com",
  },
  {
    title: "Restoran Clone",
    description:
      "Restaurant website created with React and Bootstrap, featuring a responsive layout and reservation system.",
    tags: ["React", "Bootstrap", "Theme Wagon"],
    imageUrl: restorn,
    url: "https://example.com/restoran-clone",
  },
  {
    title: "EasyBank - Landing Page",
    description:
      "A modern, responsive landing page for a fictional bank, using HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: easybank,
    url: "https://example.com/easybank",
  },
  {
    title: "Weiss Engineer - Landing Page",
    description:
      "Landing page for Weiss Construction, designed from Figma mockups using HTML and CSS.",
    tags: ["HTML", "CSS", "Figma"],
    imageUrl: weiss,
    url: "https://example.com/weiss-engineer",
  },
];

export const skillsData = [
  {
    imgSrc: htmlImg, 
    label: 'HTML',
    desc: 'Markup Language'
  },
  {
    imgSrc: cssImg,
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: javascriptImg,
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: nodejsImg,
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: expressjsImg,
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: mongodbImg,
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: reactImg,
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: tailwindcssImg,
    label: 'TailwindCSS',
    desc: 'Framework'
  },
  {
    imgSrc: bootstrapImg,  // Replace with the actual path to your Bootstrap image
    label: 'Bootstrap',
    desc: 'Framework'
  },
  {
    imgSrc: pythonImg,
    label: 'Python',
    desc: 'Programming Language'
  },
];
