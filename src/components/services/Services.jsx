import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import SkillCard from "../skillsCard/SkillCard";

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
      duration: 4,
      staggerChildren: 1.2,
    },
  },
};

const Services = () => {
  // const ref = useRef();

  // const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div className="services">
      <div className="card-padding" variants={variants}>
        <SkillCard />
      </div>
    </div>
  );
};

export default Services;
