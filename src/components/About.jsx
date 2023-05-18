import "../scss/about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GiSkills } from "react-icons/gi";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaSass } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { BsGit } from "react-icons/bs";
import { GiHumanPyramid } from "react-icons/gi";
import { TbBrandVite } from "react-icons/tb";
import { BsWordpress } from "react-icons/bs";
import {GiTechnoHeart } from "react-icons/gi";

import { VscFolderLibrary } from "react-icons/vsc";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section
      id="about"
      className="about pt-20 pb-20"
    >
      <motion.div
        className="w-full p-4 text-center "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h5 className="text-white text-2xl">Get to Know</h5>
        <h2 className="text-tet text-2xl pb-10">About Me</h2>
      </motion.div>

      <div className="container about_container">
        <div className="about_me">
          <img
            src="/images/me2.jpg"
            alt="About image"
          />
        </div>
        <div className="about_content text-white ">
          <div className="about_cards mx-6">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ years working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>100+ worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Project</h5>
              <small>15+ completed</small>
            </article>
          </div>
          <p className="card_p">
            From the earlier beginning, I`ve been intrigued by the disparity
            between large corporations and small businesses. After conducting
            thorough research, I realized that grand corporations established a
            dominant presence in the online world. These ignited a spark within
            and motivated me to help other companies and businesses achieve
            similar growth in the online world. And after the completion of my
            B. Tech degree in Chemical Engineering, I delved deep into the realm
            of software and information technology. <br />
            <br /> This journey allowed me to establish a strong foundation in
            web development through learning HTML, CSS, and JavaScript. I gained
            invaluable experience by constructing websites and exploring various
            frameworks and libraries. <br />
            <br /> Driven by an authentic passion for creating exceptional web
            experiences, my primary objective is to assist clients in attaining
            their online goals and with a firm commitment to delivering
            outstanding results, combining my technical proficiency with
            exceptional problem-solving skills and acute attention to detail.
            Troubleshooting and debugging are second nature to me, ensuring
            smooth operations and swift resolution of any issues that arise
            during the development process. However, my abilities extend beyond
            technical expertise. <br />
            <br />I thrive as a communicator and collaborator, valuing effective
            teamwork and strong relationships with clients and colleagues,
            fostering a positive and productive work environment, and achieving
            remarkable outcomes together. <br />
            <br />
            As a strong advocate for continuous growth and improvement, I
            actively engage in ongoing learning and professional development
            endeavors. By attending workshops, conferences, and online courses,
            I remain up-to-date with the latest advancements in web development,
            ensuring that my skills stay current and relevant.
          </p>
          <a
            href="#contact"
            className="btnbox text-white p-4 rounded text-center mx-10"
          >
            Let`s Talk
          </a>
        </div>
      </div>
      {/* skill */}
      <div className="about_skills p-2">
        <div className="p-0.5 mt-10 text-white">
          <div className="about_section bg-back">
            <div className=" text-center">
              <motion.div
                className="w-full p-4 text-center "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h1 className="italic mb-10 underline underline-offset-8 font-extrabold pt-4">
                  SKILLS
                </h1>
              </motion.div>
              <div className="relative mt-5 text-left place-items-center align-middle justify-center flex flex-col">
                <div className="flex items-center relative pb-5 pt-5 justify-start px-8">
                  <div className="border-r-4 border-tet absolute h-full top-2 z-0 px-3">
                    <GiSkills className="skill_icon text-3xl -top-1 -ml-8 absolute" />
                    <div className="absolute seccion -ml-10 font-bold ">
                      SOFTWARE
                    </div>
                  </div>

                  <div className="ml-4 pt-5 px-6 ss:text-center ss:px-4">
                    <div className="flex mb-4 space-x-8 pb-4">
                      <div>
                        <AiFillHtml5 className="skill_icon" />
                      </div>
                      <div>
                        <DiCss3 className="skill_icon" />
                      </div>
                      <div>
                        <FaSass className="skill_icon" />
                      </div>
                     
                    </div>
                    <div className="flex mb-4 space-x-8 pb-4">
                    <div>
                        <SiJavascript className="skill_icon" />
                      </div>
                      <div>
                        <SiJquery className="skill_icon" />
                      </div>
                      <div>
                        <BsBootstrapFill className="skill_icon" />
                      </div>
                    </div>
                    <div className="flex mb-4 space-x-8 pb-4">
                     
                      <div>
                        <SiTailwindcss className="skill_icon" />
                      </div>
                      <div>
                        <TbBrandFramerMotion className="skill_icon" />
                      </div>
                      <div>
                        <GrReactjs className="skill_icon" />
                      </div>
                    </div>
                    <div className="flex mb-4 space-x-8 pb-4">
                     
                      <div>
                        <BsGit className="skill_icon" />
                      </div>
                      <div>
                        <TbBrandVite className="skill_icon" />
                      </div>
                      <div>
                        <BsWordpress className="skill_icon" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center relative pb-5 pt-5 justify-start px-10 xs:px-5 xss:px-0 xss:ml-2 xss:text-sm">
                  <div className="border-r-4 border-white absolute h-full top-2 z-0 px-2 ss:px-0">
                    <GiTechnoHeart className="skill_icon text-3xl -top-1 -ml-7 absolute" />
                    <div className="absolute seccion -ml-10 font-bold ">
                      TECHNICAL
                    </div>
                  </div>

                  <div className="ml-5 pt-5 px-5 ss:px-0 ss:ml-4 xss:ml-10">
                    <div className="flex mb-4 space-x-0 pb-4 flex-col list-none leading-8">
                      <li>Chemical Engineering</li>
                      <li>Computer Engineering</li>
                      <li>Sound Engineering</li>
                      <li>Project Management</li>
                      <li>Research</li>
                      <li>Graphics Design</li>
                      <li>Content Writing</li>
                     
                    </div>
                    
                  </div>
                </div>
                <div className="flex items-center relative pb-5 pt-5 justify-start">
                  <div className="border-r-4 border-tet absolute h-full top-2 z-0">
                    <GiHumanPyramid className="skill_icon text-3xl -top-1 -ml-7 absolute" />
                    <div className="absolute seccion -ml-10 font-bold ">
                      Passive
                    </div>
                  </div>

                  <div className="ml-2 pt-4 px-4 text-pry">
                    <div className="flex mb-4 space-x-0 pb-4 flex-col list-none  leading-8">
                      <li>Calm-demeanor.</li>
                      <li>Observation</li>
                      <li>Adaptability</li>
                      <li>Resilience</li>
                      <li>Active Listening</li>
                      <li>Enhanced perception</li>
                      <li>Empathy</li>
                      <li>Intuition</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-sub text-center">
              <motion.div
                className="w-full p-4 text-center "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h1 className="underline underline-offset-8 font-extrabold italic mb-10 pt-4">
                  Education
                </h1>
              </motion.div>
              <div className="relative mt-5 text-left flex flex-col justify-center p-3 mx-4 ss:p-1 xss:mx-auto">
                <div className="flex items-center relative">
                  <div className="hidden md:block w-20">
                    <div className="font-bold italic">2022</div>
                   
                  </div>
                  <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-0 ss:left-14">
                    <i className="fas fa-circle -top-1 -ml-2 absolute text-2xl text-tet rounded-xl bg-pry"></i>
                  </div>

                  <div className="ml-10 ss:ml-5">
                   
                    <div className="italic md:mb-4 font-bold">Aptech Computer Company</div>
                    <div className="mb-4 mt-2 md:hidden">
                      <div className="font-bold">2022-in view</div>
                    </div>
                    <div className="mb-10">
                     Full Stack Web-development
                    </div>
                  </div>
                </div>

                <div className="flex items-center relative">
                  <div className="hidden md:block w-20">
                    <div className="font-bold italic">2021</div>
                  </div>

                  <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-0 ss:left-14">
                    <i className="fas fa-circle -top-1 -ml-2 absolute text-2xl text-pry rounded-xl bg-tet"></i>
                  </div>

                  <div className="ml-10 ss:ml-5">
                    <div className="italic md:mb-4 font-bold">OG-TECH Company</div>
                    <div className="mb-4 mt-2 md:hidden">
                      <div className="font-bold">2021</div>
                    </div>
                    <div className="mb-10">
                     Front-End Web-development
                    </div>
                  </div>
                </div>
                <div className="flex items-center relative">
                  <div className="hidden md:block w-20">
                    <div className="font-bold italic">2019-2020</div>
                  </div>

                  <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-0 ss:left-14">
                    <i className="fas fa-circle -top-1 -ml-2 absolute text-2xl text-tet rounded-xl bg-pry"></i>
                  </div>

                  <div className="ml-10 ss:ml-5">
                    <div className="italic md:mb-4 font-bold">Ade-Tech pro Company</div>
                    <div className="mb-4 mt-2 md:hidden">
                      <div className="font-bold">2019-2020</div>
                    </div>
                    <div className="mb-10">
                     Sound Engineering and Management
                    </div>
                  </div>
                </div>
                <div className="flex items-center relative">
                  <div className="hidden md:block w-20">
                    <div className="font-bold italic">2014-2019</div>
                  </div>

                  <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-0 ss:left-14">
                    <i className="fas fa-circle -top-1 -ml-2 absolute text-2xl text-pry rounded-xl bg-tet"></i>
                    <i className="fas fa-circle -bottom-0 -ml-2 absolute text-2xl text-tet rounded-xl bg-pry"></i>
                  </div>

                  <div className="ml-10 ss:ml-5">
                    
                    <div className="italic md:mb-4 font-bold">Lautech</div>
                    <div className="mb-4 mt-2 md:hidden">
                      <div className="font-bold">2014-2019</div>
                     
                    </div>
                    <div className="mb-10">
                     B.tech Chemical Engineering
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
