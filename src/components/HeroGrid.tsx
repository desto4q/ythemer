import { useAtom } from "jotai";
import {
	accent_atom,
	primary_atom,
	secondary_atom,
	text_atom,
} from "../theme_store/themestore";

function HeroGrid() {
	const gradientStyle = {
		background:
			"radial-gradient(circle, rgba(83,74,224,.2) 0%, rgba(0,212,255,0) 70%)", // Custom radial gradient
	};

	const [primaryCol] = useAtom(primary_atom);
	const [accentCol] = useAtom(accent_atom);
	const [secondary_color] = useAtom(secondary_atom);
	const [textCol] = useAtom(text_atom);

	return (
		<div className="w-full h-full relative isolate">
			<div
				className="w-full absolute h-full left-0"
				style={gradientStyle}
			></div>

			<div className="w-full max-w-[350px] h-full p-2 gap-2  flex  mx-auto z-10">
				<div className="h-full relative w-1/2">
					<div
						className="w-full rounded-full  h-full border-4"
						style={{
							background: primaryCol + "33",
							borderColor: secondary_color + "66",
						}}
					></div>
					<div
						className="absolute w-full bottom-0 h-1/3 rounded-full border-4"
						style={{
							background: secondary_color + "1A",
							borderColor: primaryCol + "33",
						}}
					></div>
				</div>
				<div className="h-full w-1/2 z-10">
					<div
						className="w-full rounded-full bg-neutral-600 h-1/3 border-4"
						style={{
							borderColor: accentCol + "22",
							background: textCol + "44",
						}}
					></div>
					<div
						className="w-full rounded-full bg-neutral-600 h-2/3 border-4"
						style={{
							background: accentCol + "80",
							borderColor: textCol + "22",
						}}
					></div>
				</div>
			</div>
		</div>
	);
}

export default HeroGrid;
