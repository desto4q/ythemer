import { useAtom } from "jotai";
import { accent_atom, bg_atom, secondary_atom, text_atom } from "../theme_store/themestore";

const info_details = [
	"Start with two neutral colors for the text and the background.",
	"Choose your primary and secondary colors. Primary is for main CTAs and sections, and Secondary is for less important buttons and info cards.",
	"Accent color is an additional color. It appears in images, highlights, hyperlinks, boxes, cards, etc.",
	"Happy with the results? Press on “Export” and choose among different options to export in various formats, like .zip, .png, CSS, SCSS, QR Code, and more.",
];

function InfoSection() {
	let [textCol] = useAtom(text_atom);
	let [accentCol] = useAtom(accent_atom);
	let [bgCol] = useAtom(bg_atom);
    let [secondaryCol] = useAtom(secondary_atom)
	return (
		<div className="container mx-auto py-4 px-4">
			<div
				className="rounded-md  p-8 lg:py-20 flex flex-wrap"
				style={{
					background: secondaryCol+"33",
                    
				}}
			>
				<div className="flex-[1_1_20%] max-w-fit p-2 flex flex-col gap-8  ">
					<h2
						className="text-3xl whitespace-nowrap md:text-5xl font-bold"
						style={{
							color: textCol,
						}}
					>
						How it Works?
					</h2>
					<p
						className="text-xl"
						style={{
							color: textCol,
						}}
					>
						Get your personalized color palette in 4 steps.
					</p>
				</div>
				<div className="flex-[1_1_50%] gap-2  p-2 grid  sm:grid-cols-[repeat(2,minmax(250px,1fr))]">
					{info_details.map((e, i) => {
						return (
							<div
								key={`infocard_${i}`}
								className=" flex gap-2 p-2 "
							>
								<h2
									className="text-3xl font-bold "
									style={{
										color: accentCol,
									}}
								>
									{i + 1}
								</h2>
								<p
									className="lg:w-2/3 leading-loose"
									style={{
										color: textCol,
									}}
								>
									{e}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default InfoSection;
