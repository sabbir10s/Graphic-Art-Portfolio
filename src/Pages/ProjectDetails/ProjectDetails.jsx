import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { projectID } = useParams();
  if (!projectID) {
    return "Loading";
  }
  return <div className="pt-36 text-white">{projectID}</div>;
};

export default ProjectDetails;
