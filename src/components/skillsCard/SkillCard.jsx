import "./skillcard.scss";
import { Fade } from "react-reveal";

const skillSet = [
  {
    index: 1,
    icon: "./typescript.svg",
    url: "./skills/HTML5.svg",
    spanText: "HTML5",
  },
  {
    index: 2,
    icon: "./skills/git.svg",
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
    spanText: "React Commerce",
  },
  {
    index: 6,
    icon: "./skills/CSS.svg",
    url: "./skills/NodeJs.svg",
    spanText: "React Commerce",
  },
  {
    index: 7,
    icon: "./skills/CSS.svg",
    url: "./skills/MDb.svg",
    spanText: "React Commerce",
  },
  {
    index: 8,
    icon: "./skills/CSS.svg",
    url: "./skills/React.svg",
    spanText: "React Commerce",
  },
  {
    index: 9,
    icon: "./skills/CSS.svg",
    url: "./skills/python.svg",
    spanText: "React Commerce",
  },
  {
    index: 10,
    icon: "./skills/CSS.svg",
    url: "./skills/java.svg",
    spanText: "React Commerce",
  },
  {
    index: 11,
    icon: "./skills/CSS.svg",
    url: "./skills/sql.svg",
    spanText: "React Commerce",
  },
  {
    index: 12,
    icon: "./skills/CSS.svg",
    url: "./skills/typescript.svg",
    spanText: "React Commerce",
  },
  {
    index: 13,
    icon: "./skills/CSS.svg",
    url: "./skills/tailwind.svg",
    spanText: "React Commerce",
  },
  {
    index: 14,
    icon: "./skills/CSS.svg",
    url: "./skills/git.svg",
    spanText: "React Commerce",
  },
  {
    index: 14,
    icon: "./skills/CSS.svg",
    url: "./skills/github.svg",
    spanText: "React Commerce",
  },
];

const SkillCard = () => {
  return (
    <div className="about-description-skills">
      {skillSet.map((item, index) => (
        <Fade bottom key={index + item}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-container"
          >
            <img className="skills-icon" src={item.url} alt="SkillLogo" />
            
            <span className="skill__name">{item.spanText}</span>
          </a>
          
        </Fade>
      ))}
    </div>
  );
};

export default SkillCard;
