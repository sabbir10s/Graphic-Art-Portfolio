import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading";
const url =
  "https://raw.githubusercontent.com/sabbir10s/Graphic-Art-Portfolio/refs/heads/main/public/projectData.json";
// const url = "projectData.json";
const ProjectDetails = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  const { projectID } = useParams();

  // if (!projects.length) {
  //   return <Loading />;
  // }
  const project = projects.find((project) => projectID === project._id);
  if (projects.length === 0) {
    return <Loading />;
  }
  const { imgOne, imgTwo, name, description } = project;
  return (
    <div>
      <div className="mt-32 px-8 min-h-screen">
        <h2 className="text-[44px] font-bold md:mb-2 mt-10">{name}</h2>
        <img className="w-full mx-auto" src={imgOne} alt="" />
        {imgTwo && <img className="w-full mx-auto" src={imgTwo} alt="" />}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
