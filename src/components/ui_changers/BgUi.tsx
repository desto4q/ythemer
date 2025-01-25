import { bg_atom, setTheme, text_atom } from "../../theme_store/themestore";
import { useAtom } from "jotai";
import { ColorPicker, useColor } from "react-color-palette";
import { useSearchParams } from "react-router";

function BgUi() {
	const [bg_color, setBg] = useAtom(bg_atom);
	const [color, setColor] = useColor(bg_color);
	const [textColor] = useAtom(text_atom);

	let [search, setSearch] = useSearchParams();
	return (
		<div>
			<div className="dropdown dropdown-top">
				<div
					tabIndex={0}
					role="button"
					className="btn m-1"
					style={{
						background: bg_color,
						color: textColor,
					}}
				>
					Background
				</div>
				<div
					tabIndex={0}
					className="dropdown-content menu bg-base-100 rounded-box z-[1] w-64 p-2 shadow flex flex-col gap-2"
				>
					<ColorPicker
						color={color}
						onChange={setColor}
						onChangeComplete={(e) => {
							setBg(e.hex);
							let myString = setTheme(
								e.hex,
								"background",
								search
							);
							setSearch({ color: myString });
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default BgUi;
