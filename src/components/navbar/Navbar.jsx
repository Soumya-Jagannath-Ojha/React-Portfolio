import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Soumya's Portfolio
        </motion.h2>
        <div className="social">
          <a href="https://www.linkedin.com/in/soumya-jagannath-ojha/">
            <img src="/Linkedin.png" alt="" />
          </a>
          <a href="https://twitter.com/Soumya_J_Ojha7/">
            <img src="/X.png" alt="" />
          </a>
          <a href="https://github.com/Soumya-Jagannath-Ojha">
            <img src="/GitHub.png" alt="" />
          </a>
          <a href="">
            <img src="/Leetcode.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
