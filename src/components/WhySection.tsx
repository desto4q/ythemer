import { useAtom } from "jotai";
import { primary_atom, text_atom } from "../theme_store/themestore";

let section_data = [
	{
		title: "Save Time",
		body: "Get your website looking amazing in no time with a ready-to-use theme.",
	},
	{
		title: "Super Simple",
		body: " No need to stress—customizing your theme is easy and hassle-free.",
	},
	{
		title: "Loads of Colors",
		body: "Pick from tons of color templates to match your vibe perfectly!",
	},
];

function WhySection() {
	let [textCol] = useAtom(text_atom);

	return (
		<div className="container mx-auto py-4 flex flex-col ">
			<h2
				className="mx-auto lg:text-5xl font-bold "
				style={{
					color: textCol,
				}}
			>
				Why Yhemer?
			</h2>
			<div className="mt-12 flex justify-center gap-4 mx-auto flex-wrap px-4 lg:px-0">
				{section_data.map((e) => {
					return (
						<SectionCard
							key={e.title}
							{...e}
						/>
					);
				})}
			</div>
		</div>
	);
}

let SectionCard = ({ title, body }) => {
	let [textCol] = useAtom(text_atom);
	let [primaryCol] = useAtom(primary_atom);

	return (
		<div
			className="flex-[1_1_352px] h-[352px]  rounded-md flex flex-col gap-4 px-6"
			style={{
				background: primaryCol + "1A",
			}}
		>
			<div className="h-1/2"></div>
			<h2
				className="mx-auto text-2xl font-bold"
				style={{
					color: textCol,
				}}
			>
				{" "}
				{title}
			</h2>
			<p
				className="mx-auto leading-loose text-md "
				style={{
					color: textCol,
				}}
			>
				{body}
			</p>
		</div>
	);
};

// Save Time: Get your website looking amazing in no time with a ready-to-use theme.
// Super Simple: No need to stress—customizing your theme is easy and hassle-free.
// Loads of Colors: Pick from tons of color templates to match your vibe perfectly!
export default WhySection;
