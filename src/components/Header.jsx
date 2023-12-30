import SocialMediaIcons from "./SocialMediaIcons";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HeaderSocials from "./HeaderSocials";
import "../css/header.css";
// import "../css/Headlogo.css";

const Header = () => {
	return (
		<section>
			<section
				id="home"
				className="Header pt-4">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 1.0 }}
					variants={{
						hidden: { opacity: 0, x: -100 },
						visible: { opacity: 1, x: 0 },
					}}></motion.div>

				<HeaderSocials />
				{/* main section */}
				<div className="subheader px-5">
					{/* heading */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 1.0 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}>
						<p className="text-3xl z-10 text-center text-white pt-4 md:text-center md:text-3xl xs:text-3xl ss:text-2xl pb-4 flex justify-center">
							Hello,{" "}
							<sub className="hi">
								<img
									src="./images/wave.png"
									alt="wave.png"
								/>
							</sub>{" "}
							<span className="px-1 text-sm">I`m</span>
						</p>
						<p className="text-6xl z-10 text-center text-tet md:text-center md:text-5xl xs:text-4xl ss:text-3xl">
							Oluwaseun
							<span className="text-white xs:text-4xl ss:text-3xl">Ara</span>
						</p>
						<p className=" text-xl mt-10 mb-7 text-center text-white px-3 md:text-center md:text-xl xs:text-xl tracking-wide">
							I Design, Build, Optimize and Develop Websites
						</p>
					</motion.div>
					{/* call to action */}
					<motion.div
						className="flex mt-5 justify-center md:justify-center"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 1.0 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}>
						<AnchorLink
							className="bg-sub text-pry rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-sec hover:bg-tet  transition duration-500"
							href="#contact">
							Contact Me
						</AnchorLink>
						<AnchorLink
							className="rounded-r-sm py-0.5 pr-0.5 text-sub"
							href="#footer">
							<div className="text-pry hover:text-pry transition duration-500 w-full h-full flex items-center justify-center px-10 hover:bg-tet">
								Let`s talk.
							</div>
						</AnchorLink>
					</motion.div>
					<a
						href="#contact"
						className="scroll_down">
						Scroll Down
					</a>
					<motion.div
						className="flex mt-5 justify-center md:justify-center"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.4, duration: 1.0 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}>
						<SocialMediaIcons />
					</motion.div>
				</div>
				{/* <script
				type="module"
				src="https://unpkg.com/@splinetool/viewer@1.0.17/build/spline-viewer.js"></script>
			<spline-viewer url="https://prod.spline.design/SM6mmteGSNXBix90/scene.splinecode"></spline-viewer> */}
			</section>
		</section>
	);
};

export default Header;
