import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading";

const url =
  "https://raw.githubusercontent.com/sabbir10s/server/refs/heads/main/graphicArt.json";
// const url = "projectData.json";
const ProjectDetails = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);
  const { projectID } = useParams();

  if (projects.length === 0) {
    return <Loading />;
  }
  const project = projects.find((project) => projectID === project._id);

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
