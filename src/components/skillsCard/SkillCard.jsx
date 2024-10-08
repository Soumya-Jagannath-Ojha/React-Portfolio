import "./skillcard.scss";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";
const skillSet = [
  {
    index: 1,
    
    url: "./skills/HTML5.svg",
    spanText: "HTML5",
  },
  {
    index: 2,
    url: "./skills/CSS.svg",
    spanText: "CSS",
  },
  {
    index: 3,
    icon: "./skills/CSS.svg",
    url: "./skills/JS.svg",
    spanText: "JavaScript",
  },
  {
    index: 4,
    icon: "./skills/CSS.svg",
    url: "./skills/bootstarp.svg",
    spanText: "bootstarp",
  },
  {
    index: 5,
    icon: "./skills/CSS.svg",
    url: "./skills/mat_ui.svg",
    spanText: "Material UI",
  },
  {
    index: 6,
    icon: "./skills/CSS.svg",
    url: "./skills/NodeJs.svg",
    spanText: "Node.js",
  },
  {
    index: 7,
    icon: "./skills/CSS.svg",
    url: "./skills/MDb.svg",
    spanText: "MongoDB",
  },
  {
    index: 8,
    icon: "./skills/CSS.svg",
    url: "./skills/React.svg",
    spanText: "React",
  },
  {
    index: 9,
    icon: "./skills/CSS.svg",
    url: "./skills/python.svg",
    spanText: "Python",
  },
  {
    index: 10,
    icon: "./skills/CSS.svg",
    url: "./skills/java.svg",
    spanText: "Java",
  },
  {
    index: 11,
    icon: "./skills/CSS.svg",
    url: "./skills/mysql.svg",
    spanText: "Mysql",
  },
  {
    index: 12,
    icon: "./skills/CSS.svg",
    url: "./skills/typescript.svg",
    spanText: "TypeScript",
  },
  {
    index: 13,
    icon: "./skills/CSS.svg",
    url: "./skills/tailwind.svg",
    spanText: "Tailwind CSS", 
  },
  {
    index: 14,
    icon: "./skills/CSS.svg",
    url: "./skills/git.svg",
    spanText: "Git",
  },
  {
    index: 14,
    icon: "./skills/CSS.svg",
    url: "./skills/GitHub.svg",
    spanText: "GitHub",
  },
  {
    index: 15,
    icon: "./skills/CSS.svg",
    url: "./skills/netlify.svg",
    spanText: "Netlify",
  },
  {
    index: 16,
    icon: "./skills/CSS.svg",
    url: "./skills/postman-icon.svg",
    spanText: "Postman",
  },
];


const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};



const SkillCard = () => {
  return (
    <div className="about-description-skills" 
    // variants={variants}
    //   initial={"initial"}
    //     animate={"animate"}
    >
      {skillSet.map((item, index) => (
        <div key={index + item} >
          <a
            href={item.url}
            // target="_blank"
            // rel="noopener noreferrer"
            className="skill-container"
          >
            <img className="skills-icon" src={item.url} alt="SkillLogo" />
            
            <span className="skill__name">{item.spanText}</span>
          </a>
          
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
