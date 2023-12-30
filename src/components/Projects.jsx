import "../css/project.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <section
      id="project"
      className=" project"
    >
      <motion.div
        className="w-full p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="text-white  text-4xl text-center pb-10 tracking-wide">
          Things <span className="text-tet p-2">i have </span>built
        </p>
      </motion.div>
      <div className="flex-wrapper">
        <div className="wrapper">
          <div className="card">
            <input
              type="checkbox"
              id="card1"
              className="more"
              aria-hidden="true"
            ></input>
            <div className="content">
              <div className="front f1">
                <div className="inner">
                  <label
                    htmlFor="card1"
                    className="button btnbox"
                    aria-hidden="true"
                    id="card1"
                  >
                    Details
                  </label>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="description">
                    <p>@React-Portfolio Tutorial</p>
                    <br />
                    <p>
                      A Rebuilt portfolio website built using React frame work,
                      tailwind css, framer motion, html and css, showing the
                      details of a graphics designer, credit to online tutorial
                      @Ed-Roh.
                    </p>
                  </div>
                  <button
                    className="btnbox text-pry -mt-4 hover:bg-tet"
                    aria-hidden="true"
                  >
                    <a
                      href="https://oluwaseun-ara.github.io/react-template-portfolio/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LIVE DEMO
                    </a>
                  </button>
                  <label
                    htmlFor="card1"
                    className="button return border"
                    aria-hidden="true"
                  >
                    <AiOutlineCloseCircle className="text-pry text-3xl" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper ">
          <div className="card">
            <input
              type="checkbox"
              id="card2"
              className="more"
              aria-hidden="true"
            ></input>
            <div className="content">
              <div className="front f2">
                <div className="inner">
                  <label
                    htmlFor="card2"
                    className="button btnbox"
                    aria-hidden="true"
                    id="card1"
                  >
                    Details
                  </label>
                </div>
              </div>
              <div className="back bg-sub">
                <div className="inner">
                  <div className="description">
                    <p>@React-Portfolio Tutorial</p>
                    <br />
                    <p>
                      A Rebuilt portfolio website built using React frame work,
                      React hooks tailwind css, framer motion, html and css,
                      showing the details of a graphics designer, credit to
                      online tutorial @EGATOR.
                    </p>
                  </div>
                  <button
                    className="btnbox text-pry -mt-4 hover:bg-tet"
                    aria-hidden="true"
                  >
                    <a
                      href="https://oluwaseun-ara.github.io/React-Project/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LIVE DEMO
                    </a>
                  </button>
                  <label
                    htmlFor="card2"
                    className="button return border"
                    aria-hidden="true"
                  >
                    <AiOutlineCloseCircle className="text-pry text-3xl" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper ">
          <div className="card">
            <input
              type="checkbox"
              id="card3"
              className="more"
              aria-hidden="true"
            ></input>
            <div className="content">
              <div className="front f3">
                <div className="inner">
                  <label
                    htmlFor="card3"
                    className="button btnbox"
                    aria-hidden="true"
                    id="card1"
                  >
                    Details
                  </label>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="description">
                    <p>@MightyMediaStudio</p>
                    <br />
                    <p>
                      A Media content creator and graphics designer`s portfolio
                      website built using a combination of html, css and
                      bootstrap library, showcasing the owners project works and
                      other details about the company.
                    </p>
                  </div>
                  <button
                    className="btnbox text-pry -mt-4 hover:bg-tet"
                    aria-hidden="true"
                  >
                    <a
                      href="https://mightymediastudio.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LIVE DEMO
                    </a>
                  </button>
                  <label
                    htmlFor="card3"
                    className="button return border"
                    aria-hidden="true"
                  >
                    <AiOutlineCloseCircle className="text-pry text-3xl" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="card">
            <input
              type="checkbox"
              id="card4"
              className="more"
              aria-hidden="true"
            ></input>
            <div className="content">
              <div className="front f4">
                <div className="inner">
                  <label
                    htmlFor="card4"
                    className="button btnbox"
                    aria-hidden="true"
                    id="card1"
                  >
                    Details
                  </label>
                </div>
              </div>
              <div className="back bg-sub">
                <div className="inner">
                  <div className="description">
                    <p>
                     @University-Demo
                    </p>
                    <br/>
                    <p>
                     A university website built using multiple webpages and using a bootstrap library,  html, css and javascript
                    </p>
                  </div>
                  <button
                    className="btnbox text-pry -mt-4 hover:bg-tet"
                    aria-hidden="true"
                  >
                   <a href="https://oluwaseun-ara.github.io/University-demo" target="_blank" rel="noopener noreferrer">LIVE DEMO</a>
                  </button>
                  <label
                    htmlFor="card4"
                    className="button return border"
                    aria-hidden="true"
                  >
                    <AiOutlineCloseCircle className="text-pry text-3xl" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="card">
            <input
              type="checkbox"
              id="card5"
              className="more"
              aria-hidden="true"
            ></input>
            <div className="content">
              <div className="front f5">
                <div className="inner">
                  <label
                    htmlFor="card5"
                    className="button btnbox"
                    aria-hidden="true"
                    id="card1"
                  >
                    Details
                  </label>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="description">
                    <p>@Online Tech School</p>
                    <br />
                    <p>
                      An online school website built using basic html and css
                      language, which aims at teaching students how to programme
                      and build websites and other softwares.
                    </p>
                  </div>
                  <button
                    className="btnbox text-pry -mt-4 hover:bg-tet"
                    aria-hidden="true"
                  >
                    <a
                      href="https://oluwaseun-ara.github.io/Online-School"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LIVE DEMO
                    </a>
                  </button>
                  <label
                    htmlFor="card5"
                    className="button return border"
                    aria-hidden="true"
                  >
                    <AiOutlineCloseCircle className="text-pry text-3xl" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="card">
            <input
              type="checkbox"
              id="card6"
              className="more"
              aria-hidden="true"
            ></input>
            <div className="content">
              <div className="front f6">
                <div className="inner">
                  <label
                    htmlFor="card6"
                    className="button btnbox"
                    aria-hidden="true"
                    id="card1"
                  >
                    Details
                  </label>
                </div>
              </div>
              <div className="back bg-sub">
                <div className="inner">
                  <div className="description">
                    <p>@Oluwaseun-Ara</p>
                    <br />
                    <p>
                      Initial Portfolio built using pure bootstrap and coding
                      language of html and css
                    </p>
                  </div>
                  <button
                    className="btnbox text-pry -mt-4 hover:bg-tet"
                    aria-hidden="true"
                  >
                    <a
                      href="https://oluwaseunara.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LIVE DEMO
                    </a>
                  </button>
                  <label
                    htmlFor="card6"
                    className="button return border"
                    aria-hidden="true"
                  >
                    <AiOutlineCloseCircle className="text-pry text-3xl" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
