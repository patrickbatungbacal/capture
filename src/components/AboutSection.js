import React from "react";

//import styled-components
import { About, Description, Image, Hide } from "../styles";

//import resources
import home1 from "../img/home1.png";

//import framer motion
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>

          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>

          <Hide>
            <motion.h2>true</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="photographer" />
      </Image>
    </About>
  );
};

export default AboutSection;
