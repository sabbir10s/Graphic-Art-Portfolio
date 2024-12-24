import { useState } from "react";
import loadingImg from "../../Assets/image/loading.png";
import { useNavigate } from "react-router-dom";
const ProjectCard = ({ project }) => {
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
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleImageLoad = () => {
    setLoading(false);
  };

  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate(_id)}
        className="bg-secondary-200 rounded group"
      >
        <div className="w-full max-h-[250px] overflow-hidden relative">
          {loading && <img className=" absolute" src={loadingImg} alt="" />}
          <img
            className="rounded-t w-full group-hover:scale-110 duration-500 overflow-hidden"
            src={imgOne}
            alt=""
            onLoad={handleImageLoad}
          />
        </div>
        <div className="p-3 text-primary-600 space-y-4 text-start">
          <h3 className="text-2xl font-bold group-hover:underline group-hover:text-primary duration-300">
            {name}
          </h3>
          {/* <div className="space-y-2">
            <h4>{title}</h4>
          </div> */}
        </div>
      </button>
    </>
  );
};

export default ProjectCard;
