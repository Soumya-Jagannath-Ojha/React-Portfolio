import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
const items = [
  {
    id: 1,
    title: "WanderLust",
    img: "./project/Wanderlust.png",
    desc: "nsectetur adipisicing elit. Vero mollitia quam nostrum maiores ad accusamus omnis perspiciatis, laudantium quod voluptate architecto cum, pariatur odio libero asperiores a magnam repudiandae eveniet",
  },
  {
    id: 2,
    title: "WeatherApp",
    img: "./project/weatherapp.png",
    desc: "nsectetur adipisicing elit. Vero mollitia quam nostrum maiores ad accusamus omnis perspiciatis, laudantium quod voluptate architecto cum, pariatur odio libero asperiores a magnam repudiandae eveniet",
  },
  {
    id: 3,
    title: "TodoList",
    img: "./project/Todolist.png",
    desc: "nsectetur adipisicing elit. Vero mollitia quam nostrum maiores ad accusamus omnis perspiciatis, laudantium quod voluptate architecto cum, pariatur odio libero asperiores a magnam repudiandae eveniet",
  },
  {
    id: 4,
    title: "Recipe Website",
    img: "./project/Foodrecipe.png",
    desc: "nsectetur adipisicing elit. Vero mollitia quam nostrum maiores ad accusamus omnis perspiciatis, laudantium quod voluptate architecto cum, pariatur odio libero asperiores a magnam repudiandae eveniet",
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
            <button>See Demo</button>
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
