import { useAtom } from "jotai";
import HeroGrid from "./HeroGrid";
import {
	accent_atom,
	primary_atom,
	secondary_atom,
	text_atom,
} from "../theme_store/themestore";
import fontColorContrast from "font-color-contrast";

function Hero() {
	const [text_color] = useAtom(text_atom);
	const [primary_color] = useAtom(primary_atom);
	const [secondary_color] = useAtom(secondary_atom);
	const [accent_color] = useAtom(accent_atom);
	let contrast = fontColorContrast(secondary_color);
	let primary_contrast = fontColorContrast(primary_color);
	return (
		<div className="container mx-auto lg:h-[calc(100dvh-80px)] lg:max-h-[760px] flex justify-between flex-wrap flex-col-reverse">
			<div className="flex flex-col py-4 justify-center gap-6 lg:gap-12 flex-[1_1_50%]  min-w-[300px] px-2 lg:px-0 lg:min-w-[400px]  ">
				<h2
					className="text-3xl  lg:text-5xl font-bold lg:leading-normal  "
					style={{
						color: text_color,
					}}
				>
					Visualize Your <br />
					<span
						key={`${primary_color}-${accent_color}`}
						className={`font-bold   `}
						style={{
							background: `linear-gradient(to right, ${primary_color}, ${accent_color})`,
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
					>
						Theme
					</span>{" "}
					and TypoGraphy
					<br /> On a Real Website.
				</h2>
				<p
					className="leading-loose"
					style={{
						color: text_color,
					}}
				>
					Choosing colors or typography for your website? <br />
					Use theToolbar below to realize your choices.
				</p>

				<div className="flex items-center gap-4 ">
					<button
						className="btn lg:px-12"
						style={{
							background: secondary_color,
							borderColor: secondary_color,
							color: contrast,
						}}
					>
						How does it work
					</button>
					<button
						className="btn   lg:px-12  "
						style={{
							background: primary_color,
							// borderColor:
							color: primary_contrast,
						}}
					>
						Get Started
					</button>
				</div>
				<p
					className=""
					style={{
						color: text_color,
					}}
				>
					scroll to see more sections
				</p>
			</div>
			<div className=" lg:h-max flex-[1_1_50%] mt-4 lg:mt-0 md:min-w-[300px] lg:min-w-[400px] flex items-center justify-center px-4 lg:px-0">
				<div className="h-[calc(50dvh)] lg:h-[500px]  w-full p-2">
					<HeroGrid />
				</div>
			</div>
		</div>
	);
}

export default Hero;
