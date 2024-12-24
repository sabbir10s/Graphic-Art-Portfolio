import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/sabbir10s/server/main/projectData.json"
    )
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
    title,
    name,
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
        <h2 className="text-[44px] font-bold md:mb-2">{name}</h2>
        <p>{description}</p>
        <div className="flex flex-wrap gap-3 text-primary mt-4">
          {technology.map((t, index) => (
            <p
              key={index}
              className="bg-[#c49b6615] px-5 text-sm py-1 rounded-lg"
            >
              {t}
            </p>
          ))}
        </div>
        <div className="flex gap-5 my-6">
          {clientRepo && (
            <a
              className="btn_effect border-2 border-primary px-8 py-2 rounded flex items-center gap-2 text-primary"
              rel="noreferrer"
              target="_blank"
              href={clientRepo}
            >
              <span>Repo</span>
              <FaGithub className="text-xl" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
