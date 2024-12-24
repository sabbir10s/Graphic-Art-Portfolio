import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
const SocialLinks = () => {
  return (
    <div>
      <div className="flex flex-row md:flex-col items-center justify-center gap-5">
        <span className="p-1 bg-light"></span>
        <span className=" bg-light w-10 md:w-[0.2px] h-[0.2px] md:h-20"></span>
        <a
          className="hover:border-primary text-white hover:text-primary duration-200 text-xl"
          href="https://www.linkedin.com/in/sabbir10s/"
          target="_blank"
          rel="noreferrer"
        >
          <GrLinkedinOption />
        </a>
        <a
          className="hover:border-primary text-white hover:text-primary duration-200 text-xl"
          href="https://github.com/sabbir10s"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub />
        </a>
        <a
          className="hover:border-primary text-white hover:text-primary duration-200 text-xl"
          href="https://twitter.com/sabbir10s"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineTwitter />
        </a>

        <span className=" bg-light w-10 md:w-[0.2px] h-[0.2px] md:h-20"></span>
        <span className="p-1 bg-light"></span>
      </div>
    </div>
  );
};

export default SocialLinks;
