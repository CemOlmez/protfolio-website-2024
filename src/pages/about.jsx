import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/section-heading'


const About = () => {
  return (
    <section id="about" className="flex flex-col items-center scroll-mt-28 mb-28 mt-28">   
    <motion.section
      className=" max-w-[45rem] text-center leading-8 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175, duration: 1 }}
      
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
  I am a self-taught <span className="font-medium">Web Developer</span> who decided to pursue my passion for programming by studying independently and working on projects to build expertise in <span className="font-medium">web development</span>. I thrive on problem-solving and enjoy the process of creating something new, especially the satisfaction of finding the solution to a challenge. My core stack includes <span className="font-medium">HTML, CSS, JavaScript, React, Node.js, and MongoDB</span>, and I am also familiar with <span className="font-medium">Next.js</span> and <span className="font-medium">TypeScript</span>. I am always eager to learn new technologies and am currently seeking a <span className="font-medium">full-time developer position</span>.
</p>

<p className="mb-3">
  When I’m not coding, I enjoy playing video games, watching movies, and exploring new interests. I’m currently diving into Game and Mobile App development, as well as learning photography and video editing.
</p>
    </motion.section>
    </section>
  )
}

export default About;