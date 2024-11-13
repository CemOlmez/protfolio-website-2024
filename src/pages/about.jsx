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
        I am a self-taught developer in{" "}
        <span className="font-medium"> Frontend Development</span>, I decided to pursue my
        passion for programming by independently studying and working on projects, gaining expertise in{" "}
        <span className="font-medium">Frontend web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect as well as the idea of creating something new. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          HTML, CSS, Javascript, React, Node.js, and MongoDB
        </span>
        . I am also familiar with Nextjs and Typescript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, or taking the time to learn{" "}
        <span className="font-medium">learn new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Game and Mobile App development</span>. I'm also
        learning photography and video editing.
      </p>
    </motion.section>
    </section>
  )
}

export default About;