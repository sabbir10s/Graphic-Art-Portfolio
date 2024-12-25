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
        <div className="w-full overflow-hidden relative">
          {loading && <img className=" absolute" src={loadingImg} alt="" />}
          <img
            className="w-full object-fill group-hover:scale-110 duration-500 overflow-hidden"
            src={imgOne}
            alt=""
            onLoad={handleImageLoad}
          />
        </div>
        <div className="h-full w-full bg-light absolute"> </div>
      </button>
    </>
  );
};

export default ProjectCard;
