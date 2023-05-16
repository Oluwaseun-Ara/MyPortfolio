
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        className="text-2xl"
        href="https://www.linkedin.com/in/oluwaseunAra/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
       className="text-2xl"
        href="https://github.com/Oluwaseun-Ara"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub />
      </a>
      <a
       className="text-2xl"
        href="https://www.facebook.com/OOluwaseunAra1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
