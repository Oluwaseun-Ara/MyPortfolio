import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiOutlineHome } from "react-icons/ai";
import { motion } from "framer-motion";

const Timeline = () => {
	return (
		<section>
			<motion.div
				className="w-full p-4 text-center "
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ delay: 0.4, duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, x: -50 },
					visible: { opacity: 1, x: 0 },
				}}>
				<h1 className="underline underline-offset-8 font-extrabold italic mb-10 pt-4t text-white text-3xl">
					Experience
				</h1>
			</motion.div>

			<VerticalTimeline>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: "darkblue",
						color: "white",
						fontWeight: "bold",
						fontSize: "20px",
					}}
					contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
					date="2023"
					iconStyle={{ background: "black", color: "#fff" }}
					icon={<AiOutlineHome />}>
					<h3 className="vertical-timeline-element-title text-2xl capitalize ss:text-xl">
						Project Manager and Lead Developer
					</h3>
					<h4 className="vertical-timeline-element-subtitle"></h4>
					MightymediaStudio
					<p>
						Worked with a team on building the company portfolio website and
						ensure a cordinated work withnin the company environment.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: "crimson",
						color: "white",
						fontWeight: "bold",
						fontSize: "20px",
					}}
					date="2022 - 2023"
					iconStyle={{ background: "crimson", color: "#fff" }}
					icon={<AiOutlineHome />}>
					<h3 className="vertical-timeline-element-title text-2xl capitalize ss:text-xl">
						Team- Manager and Lead Developer
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Aptech Computer Company
					</h4>
					<p>
						Provided a Creative Direction, worked with other team members in
						building a school project website.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: "goldenrod",
						color: "white",
						fontWeight: "bold",
						fontSize: "20px",
					}}
					date="2021"
					iconStyle={{ background: "purple", color: "#fff" }}
					icon={<AiOutlineHome />}>
					<h3 className="vertical-timeline-element-title text-2xl ss:text-xl">
						Intern
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						OG-TECH Company
					</h4>
					<p>
						Worked with a team on providing User Experience, Visual Design,
						front-end development, ui/ux design and building responsive websites
						for clients.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: "darkblue",
						color: "white",
						fontWeight: "bold",
						fontSize: "20px",
					}}
					date="2019-2020"
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					icon={<AiOutlineHome />}>
					<h3 className="vertical-timeline-element-title text-2xl ss:text-xl">
						Tech-Manager
					</h3>
					<h4 className="vertical-timeline-element-subtitle"> Adetech pro</h4>
					<p>
						Ensured servicing and management of company`s hardware and software
						properties were done at the appointed schedule. <br />
						Provided proper negotiation and services to coming clients and
						controlled distribution of sound equipment where neccessary.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{
						background: "crimson",
						color: "white",
						fontWeight: "bold",
						fontSize: "20px",
					}}
					date="2018"
					iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
					icon={<AiOutlineHome />}>
					{" "}
					<h3 className="vertical-timeline-element-title text-2xl ss:text-xl">
						Intern
					</h3>
					<h4 className="vertical-timeline-element-subtitle">Siperco ltd</h4>
					<p className="vertical-timeline-element-title">
						Worked with quality assurance and quality control team to ensure a
						standard operation of the company`s production and provided a
						quality control and test for equipments and materials.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					iconStyle={{ background: "white", color: "black" }}
					icon={<AiOutlineHome />}
				/>
			</VerticalTimeline>
		</section>
	);
};

export default Timeline;
