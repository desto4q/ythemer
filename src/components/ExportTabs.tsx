import { useAtom } from "jotai";
import { useRef, useState } from "react";
import {
	accent_atom,
	bg_atom,
	primary_atom,
	secondary_atom,
	text_atom,
} from "../theme_store/themestore";
import { hexToHslString, hexToRgbString } from "../theme_store/converters";

function ExportTabs() {
	let [selected, setSelected] = useState<number>(0);

	let tabTitles = [
		{
			name: "hex",
		},
		{
			name: "rgb",
		},
		{
			name: "hsl",
		},
	];
	let [bg_Color] = useAtom(bg_atom);
	let [primary_color] = useAtom(primary_atom);
	let [secondary_color] = useAtom(secondary_atom);
	let [accent_color] = useAtom(accent_atom);
	let [text_color] = useAtom(text_atom);

	let colors: { name: string; color: string }[] = [
		{ name: "background", color: bg_Color },
		{ name: "primary", color: primary_color },
		{ name: "secondary", color: secondary_color },
		{ name: "accent", color: accent_color },
		{ name: "text", color: text_color },
	];

	let converter = [
		(hex: string) => hex,
		(hex: string) => hexToRgbString(hex),
		(hex: string) => hexToHslString(hex),
	];

	let divRef = useRef(null);
	return (
		<div className="flex flex-col">
			<div className="h-20 flex items-center *:px-4  *:py-2 *:border-b *:duration-200">
				{tabTitles.map((e, i) => {
					return (
						<button
							className="cursor-pointer hover:bg-neutral-500 hover:bg-opacity-15"
							onClick={() => {
								setSelected(i);
							}}
							key={"tab_title" + i}
							style={{
								borderColor:
									selected == i ? primary_color : "gray",
							}}
						>
							{e.name}
						</button>
					);
				})}
			</div>
			<div>
				<div
					className="p-2 bg-neutral-500 bg-opacity-30 rounded-md border-2 border-neutral-400 border-opacity-30"
					ref={divRef}
				>
					{colors.map((e) => {
						return (
							<div
								className="flex items-center gap-2"
								key={"tabs_" + e.name}
							>
								{e.name}:{" "}
								<span className="duration-150">
									{converter[selected](e.color)};
								</span>
							</div>
						);
					})}
				</div>
				<div
					className="p-2 text-sm active:scale-95 px-4 rounded-md ml-auto bg-neutral-500 bg-opacity-25 cursor-pointer select-none mt-4 w-fit"
					onClick={() => {
						console.log("clicked");
						if (divRef.current) {
							const textToCopy = divRef.current.textContent; // Get the text content of the div
							navigator.clipboard
								.writeText(textToCopy)
								.then(() => {
									console.log(
										"Text copied to clipboard:",
										textToCopy
									);
									alert("Text copied!");
								})
								.catch((err) => {
									console.error("Failed to copy text:", err);
								});
						}
					}}
				>
					Copy
				</div>
			</div>
		</div>
	);
}

export default ExportTabs;
