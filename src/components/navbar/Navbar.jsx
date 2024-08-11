import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Soumya's Portfolio
        </motion.p>
        <div className="social">
          <a href="https://www.linkedin.com/in/soumya-jagannath-ojha/" target="_main">
            <img src="/Linkedin.png" alt="" />
          </a>
          <a href="https://twitter.com/Soumya_J_Ojha7/" target="_main">
            <img src="/X.png" alt="" />
          </a>
          <a href="https://github.com/Soumya-Jagannath-Ojha" target="_main">
            <img src="/skills/GitHub.svg" alt="" />
          </a>
          <a href="https://leetcode.com/u/Soumya_Jagannath_Ojha/" target="_main">
            <img src="/Leetcode.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
