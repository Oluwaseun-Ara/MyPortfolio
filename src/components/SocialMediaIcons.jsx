import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 duration-500 text-pry text-3xl"
        href="https://www.linkedin.com/in/oluwaseunAra/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
        className="hover:opacity-50 duration-500 text-pry text-3xl"
        href="https://github.com/Oluwaseun-Ara"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub />
      </a>
      <a
        className="hover:opacity-50 duration-500 text-pry text-3xl"
        href="https://www.facebook.com/OOluwaseunAra1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillFacebook />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
