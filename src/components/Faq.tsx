import { useAtom } from "jotai";
import {
	accent_atom,
	bg_atom,
	primary_atom,
	secondary_atom,
	text_atom,
} from "../theme_store/themestore";
import { useRef, useState } from "react";

let faq_data = [
	{
		title: "How many colors should I choose?",
		detail: "Normally, 3 colors are absolutely fine (meaning background, text, and one accent color).However, if you want, you can have more. Usually, we don’t add more than 6 colors across a platform. It would just make things too... complicated. Plus, it makes it hard to keep the colors consistent throughout the design.",
	},
	{
		title: "How many colors should I choose?",
		detail: "Normally, 3 colors are absolutely fine (meaning background, text, and one accent color).However, if you want, you can have more. Usually, we don’t add more than 6 colors across a platform. It would just make things too... complicated. Plus, it makes it hard to keep the colors consistent throughout the design.",
	},
	{
		title: "Can I use the generated colors commercially?",
		detail: "Yes! You can use the colors you generate here however you'd like, commercially or non-commercially (I don't own the colors/fonts). The license only applies to the source code and materials specific to this website.",
	},
	{
		title: "Can I use the generated colors commercially?",
		detail: "Yes! You can use the colors you generate here however you'd like, commercially or non-commercially (I don't own the colors/fonts). The license only applies to the source code and materials specific to this website.",
	},
	{
		title: "Can I use the generated colors commercially?",
		detail: "Yes! You can use the colors you generate here however you'd like, commercially or non-commercially (I don't own the colors/fonts). The license only applies to the source code and materials specific to this website.",
	},
];
function Faq() {
	let [textCol] = useAtom(text_atom);
	let [accentCol] = useAtom(accent_atom);
	let [bgCol] = useAtom(bg_atom);
	let [secondaryCol] = useAtom(secondary_atom);
	let [selectedIndex, setIndex] = useState<null | number>(null);
	return (
		<div className="container mx-auto py-4 px-4">
			<div
				className="rounded-md  p-8 lg:py-20 flex flex-wrap gap-2"
				// style={{
				// 	background: secondaryCol + "33",
				// }}
			>
				<div className="flex-[1_1_20%] max-w-fit p-2 flex flex-col gap-8  ">
					<h2
						className="text-3xl whitespace-nowrap md:text-5xl font-bold"
						style={{
							color: textCol,
						}}
					>
						FAQ
					</h2>
					<p
						className="text-xl"
						style={{
							color: textCol,
						}}
					>
						Answers to some questions you might have.
					</p>
				</div>
				<div className="flex-[1_1_50%] gap-2  p-2 flex flex-col">
					{faq_data.map((e, i) => {
						return (
							<Accord
								{...e}
								key={"accord" + i}
								i={i}
								selectedIndex={selectedIndex}
								setIndex={setIndex}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

let Accord = ({ title, detail, selectedIndex, setIndex, i }) => {
	let contentRef = useRef(null);
	let [textCol] = useAtom(text_atom);
	let [primcol] = useAtom(primary_atom);
	return (
		<div
			style={{
				background:
					selectedIndex === i ? primcol + "1A" : primcol + "0A",
			}}
			className="cursor-pointer p-4 b btn-ghost active:scale-95 duration-300 rounded-lg flex flex-col "
			onClick={() => {
				// console.log(selectedIndex);
				if (selectedIndex != i) {
					setIndex(i);
				} else {
					setIndex(null);
				}
			}}
			key={"faq_" + i}
		>
			<div
				className="text-xl font-bold"
				style={{
					color: textCol,
				}}
			>
				{title}
			</div>
			<div
				ref={contentRef}
				className="overflow-hidden duration-200"
				style={{
					color: textCol,

					marginTop: selectedIndex === i ? 12 : 0,
					height:
						selectedIndex === i
							? `${contentRef.current?.scrollHeight}px`
							: "0px",
				}}
			>
				{detail}
			</div>
		</div>
	);
};

export default Faq;
