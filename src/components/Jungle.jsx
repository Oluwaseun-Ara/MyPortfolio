import "../css/jungle.css";
// // import Plx from "react-plx";

const Jungle = () => {
	return (
// 		// <div>
// 		// 	<Plx
// 		// 		parallaxData={[
// 		// 			{
// 		// 				start: 0,
// 		// 				end: 700,
// 		// 				easing: "ease-in",
// 		// 				properties: [
// 		// 					{
// 		// 						startValue: 1,
// 		// 						endValue: 6.6,
// 		// 						property: "scale",
// 		// 					},
// 		// 					{
// 		// 						startValue: 1,
// 		// 						endValue: 0,
// 		// 						property: "display",
// 		// 					},
// 		// 				],
// 		// 			},
// 		// 		]}
// 		// 		style={{
// 		// 			position: "fixed",
// 		// 			left: 0,
// 		// 			top: 0,
// 		// 			width: "100%",
// 		// 			zIndex: 100,
// 		// 		}}>
// 		// 		<img
// 		// 			style={{ width: "100%" }}
// 		// 			src="./images/bg.png"
// 		// 			alt="foreground"
// 		// 		/>
// 		// 	</Plx>
// 		// 	<Plx
// 		// 		parallaxData={[
// 		// 			{
// 		// 				start: 0,
// 		// 				end: 800,
// 		// 				properties: [
// 		// 					{
// 		// 						startValue: 1,
// 		// 						endValue: 1.28,
// 		// 						property: "scale",
// 		// 					},
// 		// 					{
// 		// 						startValue: 1,
// 		// 						endValue: 0,
// 		// 						property: "opacity",
// 		// 					},
// 		// 				],
// 		// 			},
// 		// 		]}
// 		// 		style={{
// 		// 			position: "fixed",
// 		// 			left: 0,
// 		// 			top: 0,
// 		// 			width: " 100%",
// 		// 			height: " 100%",
// 		// 		}}>
// 		// 		<img
// 		// 			src="./images/Artboard 4.png"
// 		// 			alt="background"
// 		// 		/>
// 		// 	</Plx>
// 		// 	<Plx
// 		// 		parallaxData={[
// 		// 			{
// 		// 				start: 0,
// 		// 				end: 900,
// 		// 				properties: [
// 		// 					{
// 		// 						startValue: 1,
// 		// 						endValue: 0,
// 		// 						property: "opacity",
// 		// 					},
// 		// 				],
// 		// 			},
// 		// 		]}
// 		// 		style={{
// 		// 			position: "fixed",
// 		// 			left: 0,
// 		// 			top: "26vw",
// 		// 			width: "100%",
// 		// 		}}>
// 		// 		{/* <img
// 		// 			style={{
// 		// 				width: "30vw",
// 		// 			}}
// 		// 			src="./images/text-img.webp"
// 		// 			alt="Goonies"
// 		// 		/> */}
// 		// 	</Plx>
// 		// 	<div
// 		// 		style={{
// 		// 			position: "fixed",
// 		// 			lefft: 0,
// 		// 			top: 0,
// 		// 			zIndex: 200,
// 		// 			paddingTop: "56%",
// 		// 			height: "400vh",
// 		// 			width: "100%",
// 		// 		}}>
// 		// 		<div
// 		// 			style={{
// 		// 				background: "#000",
// 		// 				height: "100%",
// 		// 			}}></div>
// 		// 	</div>
// 		// </div>
<div
	className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex"
	style="background-color:'red';">
	<div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
		<h1 data-uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; end: 50vh + 50%;">
			Headline
		</h1>
		<p data-uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; end: 50vh + 50%;">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eveniet,
			dignissimos distinctio voluptatibus quaerat omnis non cupiditate
			accusantium laborum obcaecati porro dolorem quas sunt id placeat
			necessitatibus, explicabo ea? Accusantium?
		</p>
	</div>
</div>
	);
}
export default Jungle;