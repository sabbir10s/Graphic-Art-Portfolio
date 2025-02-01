import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const url =
  "https://raw.githubusercontent.com/sabbir10s/Graphic-Art-Portfolio/refs/heads/main/public/projectData.json";
// const url = "projectData.json";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section>
      <div id="projects">
        <div className="text-center">
          <h3 className="text-primary text-lg uppercase font-semibold mb-2">
            Portfolio
          </h3>
          <h2 className="text-4xl font-bold text-secondary mb-10">
            Check Our Recent Work
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard index={index} key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
