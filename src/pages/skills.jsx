import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/section-heading';
import { skillsData } from '../lib/data';
import SkillCard from '../components/skillscard';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className=" scroll-mt-28 mb-28">
      <SectionHeading>Skills</SectionHeading>
      <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <SkillCard {...skill} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
