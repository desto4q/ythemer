import { bg_atom, setTheme, text_atom } from "../../theme_store/themestore";
import { useAtom } from "jotai";
import fontColorContrast from "font-color-contrast";
import { ColorPicker, useColor } from "react-color-palette";
import { useSearchParams } from "react-router";

function TextUi() {
	const [text_color, setText] = useAtom(text_atom);
	const [color, setColor] = useColor(text_color);
	const [bg_Color] = useAtom(bg_atom);
	let text_Contrast = fontColorContrast(text_color);
	let [search, setSearch] = useSearchParams();

	return (
		<div>
			<div className="dropdown dropdown-top">
				<div
					tabIndex={0}
					role="button"
					className="btn m-1"
					style={{
						background: text_color,
						color: text_Contrast,
					}}
				>
					Text
				</div>
				<div
					tabIndex={0}
					className="dropdown-content menu bg-base-100 rounded-box z-[1] w-64 p-2 shadow flex flex-col gap-2"
				>
					<ColorPicker
						color={color}
						onChange={setColor}
						onChangeComplete={(e) => {
							setText(e.hex);
							let myString = setTheme(e.hex, "text", search);
							setSearch({ color: myString });
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default TextUi;
