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
      <button onClick={() => navigate(_id)} className="bg-secondary-200 group">
        <div className="w-full max-h-[350px] overflow-hidden relative">
          {loading && <img className=" absolute" src={loadingImg} alt="" />}
          <img
            className="w-full object-cover h-[350px] group-hover:scale-110 duration-500 overflow-hidden"
            src={imgOne}
            alt=""
            onLoad={handleImageLoad}
          />
        </div>
      </button>
    </>
  );
};

export default ProjectCard;
