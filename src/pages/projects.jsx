import React from "react";
import SectionHeading from "../components/section-heading";
import ProjectCard from "../components/projectcard";
import { projectsData } from "../lib/data";

const ProjectPage = () => {
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto max-w-[1200px] place-items-center">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;