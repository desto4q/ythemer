import { useEffect, useState } from "react";
import { bg_atom, text_atom } from "../../theme_store/themestore";
import { useAtom } from "jotai";
import { Colorful } from "@uiw/react-color";
import fontColorContrast from "font-color-contrast";

function TextUi() {
	const [color, setColor] = useAtom(text_atom);
	const [bg_Color] = useAtom(bg_atom);

	const [tempColor, setTemp] = useState("");
	let primary_contrast = fontColorContrast(color);

	useEffect(() => {
		setTemp(color);
	}, [color]);

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			// Call setColor function when Enter is pressed (though it's already handled by onChange)
			console.log("Color set to:", color);
			setColor(tempColor);
		}
	};
	return (
		<div>
			<div className="dropdown dropdown-top">
				<div
					tabIndex={0}
					role="button"
					className="btn m-1"
					style={{
						background: color,
						color: primary_contrast,
					}}
				>
					Text
				</div>
				<div
					tabIndex={0}
					className="dropdown-content menu bg-base-100 rounded-box z-[1] w-64 p-2 shadow flex flex-col gap-2"
				>
					<Colorful
					disableAlpha
						color={color}
						className="!bg-slate-700 shadow-lg !w-full gap-2 flex flex-col !bg-transparent"
						onChange={(e) => {
							setColor(e.hex);
						}}
						// onChangeComplete={(e) => {
						// 	// setColor(e.toHexString());
						// 	console.log(e);
						// }}
					/>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full max-w-xs "
						value={tempColor} // Use the temporary value for input field
						onChange={(e) => {
							setTemp(e.target.value);
						}}
						onKeyDown={handleKeyDown}
					/>
					<div
						className={`h-10 w-full rounded-lg`}
						style={{
							background: color,
						}}
					></div>
				</div>
			</div>
		</div>
	);
}

export default TextUi;
