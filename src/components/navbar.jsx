import React, { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';



const Navbar = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];


  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-black border-opacity-10 bg-white bg-opacity-80 shadow-lg shadow-black/[0.10] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 ">
          {links.map((link) => (
            <motion.li
              key={link}
              className="h-3/4 flex items-center justify-center relative "
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <a
                href={`#${link.toLowerCase()}`}
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition ",
                  {
                    "text-gray-950": activeSection === link,
                  }
                )}
                onClick={() => setActiveSection(link)}
              >
                {link}
                {activeSection === link && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
