import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
const items = [
  {
    id: 1,
    title: "WeatherApp",
    img: "./project/weatherapp.png",
    desc: "Design a Weather App utilizes the Open Weather API for real-time weather updates. Users access detailed forecasts for their location or any global city.",
    url: "https://www.linkedin.com/posts/soumya-jagannath-ojha_reactjs-api-weatherapp-activity-7170009525423386624-oZh6/?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 2,
    title: "WanderLust",
    img: "./project/Wanderlust.png",
    desc: " Designed and developed an online marketplace website that connects people who want to rent out their property with people who are looking for accommodations, typically for short stays.",
    url: "https://fullstack-project-kztl.onrender.com/listings",
  },
  {
    id: 3,
    title: "TodoList",
    img: "./project/Todolist.png",
    desc: "A simple and beautiful To-Do application built with ReactJS, Redux, and Vite. This application allows users to add, view, edit, delete, and mark tasks as done. The state is managed using Redux.",
    url: "https://soumyatodolist.netlify.app/",
  },
  {
    id: 4,
    title: "Recipe Website",
    img: "./project/Foodrecipe.png",
    desc: "Discover the delightful and mouthwatering food recipes that will tantalize your taste buds and impress your guests.",
    url: "https://makedeliciousfood.netlify.app/",
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="Image" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.url} target="_main">
              <button>Open</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
