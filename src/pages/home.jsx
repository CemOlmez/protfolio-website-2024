import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import ProfileImg from '../assets/img/cem-olmez.jpeg';

const Home = () => {
  return (
    <section id='home' className='pt-28 scroll-mt-[100rem]' >

      {/* Hero text */}
      <div className="flex flex-col sm:flex-row items-center"> 
      <motion.div
          className="sm:w-2/3 order-2 sm:order-1 text-center sm:text-left"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="mb-8 mt-4 px-4 text-3xl sm:text-5xl font-semibold">
  <span className="font-bold">Hello, I'm Cem Ölmez.</span>
  <br />

  <span className="text-xl sm:text-6xl font-semibold">
    A Frontend Web Developer
  </span>
  <br />

  <span className="text-lg sm:text-4xl font-medium text-gray-700">
    Working from Istanbul, Turkey
  </span>
  <br />

 
  <span className="text-base sm:text-lg md:text-xl  text-gray-600 mt-4 block">
    Turning ideas into engaging, interactive web experiences with modern frontend development.
    <br />
    Core stack : <span className="font-medium">HTML, CSS, JavaScript, Node.js, and MongoDB</span> 
    <br />
    Familiar with:<span className="font-medium"> Next.js and TypeScript.</span> 
  </span>
  
</h1>

        </motion.div>
       
       {/*  Image */}
        <div className="relative order-1 sm:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 1,
            }}
          >
            <img
              src={ProfileImg}
              alt="Cem Ölmez portrait"
              width={368}
              height={368}
              quality={100}
              className=" w-100 h-[24rem] rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-8 right-8 text-6xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 1,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
            

      <motion.div
        className="flex flex-col sm:flex-row items-center gap-2 px-4 sm:px-0 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 1,
        }}
      >
        {/* Contact Button */}
        <a
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition  "
        >
          Contact me {" "}
         
        </a>

        {/* Download CV Button */}
        <a
          href="./assets/Cem Olmez CV 2024.11.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black dark:bg-white/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex gap-2">
        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/cemolmez/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black"
        >
          <BsLinkedin />
        </a>

        {/* GitHub Button */}
        <a
          href="https://github.com/CemOlmez"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black"
        >
          <FaGithubSquare />
        </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
