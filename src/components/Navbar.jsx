import "../scss/nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdMiscellaneousServices } from "react-icons/md";
import { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <div>
        <Tippy
          content="Home"
          className="hello"
        >
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : " "}
          >
            <AiOutlineHome />
          </a>
        </Tippy>
      </div>
      <div>
        <Tippy
          content="About"
          className="hello"
        >
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : " "}
          >
            <AiOutlineUser />
          </a>
        </Tippy>
      </div>
      <div>
        <Tippy
          content="Service"
          className="hello"
        >
          <a
            href="#Service"
            onClick={() => setActiveNav("#Service")}
            className={activeNav === "#Service" ? "active" : " "}
          >
            <MdMiscellaneousServices />
          </a>
        </Tippy>
      </div>
      <div>
        <Tippy
          content="Project"
          className="hello"
        >
          <a
            href="#project"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active" : " "}
          >
            <BiBook />
          </a>
        </Tippy>
      </div>

      <div>
        <Tippy
          content="Testimonials"
          className="hello"
        >
          <a
            href="#testimonials"
            onClick={() => setActiveNav("#testimonials")}
            className={activeNav === "#services" ? "active" : " "}
          >
            <RiServiceLine />
          </a>
        </Tippy>
      </div>

      <div>
        <Tippy
          content="Contact"
          className="hello"
        >
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : " "}
          >
            <BiMessageSquareDetail />
          </a>
        </Tippy>
      </div>
    </nav>
  );
};

export default Navbar;
