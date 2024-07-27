import React from "react";
import Projectfirst from "../components/Projectfirst";

const Projects = () => {
  return (
    <div
      className="container  w-full h-fit gap-7 mt-40 2xl:mt-56 xl:mt-56 lg:mt-44 md:mt-40 sm:mt-40 
    "
    >
      <div className="font-for-intro mb-5 2xl:mb-16 lg:mb-13 md:mb-12 sm:mb-10 ">
        Projects
      </div>
      <div className="relative">
        <Projectfirst />
      </div>
    </div>
  );
};

export default Projects;
