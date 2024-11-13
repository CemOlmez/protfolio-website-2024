import React from "react";
import SectionHeading from "../components/section-heading";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import toast from "react-hot-toast";




export default function Contact() {
 
  return (
    <div className="flex flex-col items-center scroll-mt-28'">
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center "
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>


      <p className="text-gray-700 -mt-6 ">
        Complete the form below or contact me directly at{" "}
        <a className="underline" href="mailto:c.olmez123@gmail.com">
          c.olmez123@gmail.com
        </a>{" "}
       
      </p>

      <form
        className="mt-10 flex flex-col "
        action="https://getform.io/f/aqookwja"
        method="POST"

      >
        <input
          className="h-14 px-4 rounded-lg borderBlack  transition-all "
          name="senderEmail"
          id="email"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4  transition-all"
          name="message"
          id="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />

<button
      type="submit"
      className="group flex items-center justify-center gap-2 h-14 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105  disabled:scale-100 disabled:bg-opacity-65"
      >
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
    </button>
      
      </form>
    </motion.section>
    </div>
  );
}