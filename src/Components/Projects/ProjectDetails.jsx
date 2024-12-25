import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { useParams } from "react-router-dom";
const url =
  "https://raw.githubusercontent.com/sabbir10s/Graphic-Art-Portfolio/refs/heads/main/public/projectData.json";
const ProjectDetails = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  const { projectID } = useParams();

  if (!projects.length) {
    return <>Loading</>;
  }

  const project = projects.find((project) => projectID === project._id);
  const {
    _id,
    imgOne,
    imgTwo,
    name,
    title,
    type,
    clientRepo,
    serverRepo,
    liveSite,
    technology,
    description,
  } = project;
  return (
    <div>
      <div className="mt-32 px-8 min-h-screen">
        <h2 className="text-[44px] font-bold md:mb-2 mt-10">{name}</h2>
        <img className="w-full mx-auto" src={imgOne} alt="" />
        <img className="w-full mx-auto" src={imgTwo} alt="" />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
