import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/sabbir10s/server/main/projectData.json"
    )
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section>
      <div id="projects">
        <SectionTitle title="My Works" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard index={index} key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
