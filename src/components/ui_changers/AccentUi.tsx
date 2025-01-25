import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { accent_atom, setTheme } from "../../theme_store/themestore";
import { useAtom } from "jotai";
import { useSearchParams } from "react-router";

function AccentUi() {
	let [accent_color, setAccent] = useAtom(accent_atom);
	const [color, setColor] = useColor(accent_color);
	let [search, setSearch] = useSearchParams();
	return (
		<div>
			<div className="dropdown dropdown-top">
				<div
					tabIndex={0}
					role="button"
					className="btn m-1 !text-black"
					style={{
						background: color.hex,
					}}
				>
					AccentUi
				</div>
				<div
					tabIndex={0}
					className="dropdown-content menu bg-base-100 rounded-box z-[1] w-64 p-2 shadow flex flex-col gap-2"
				>
					<ColorPicker
						color={color}
						onChange={setColor}
						onChangeComplete={(e) => {
							setAccent(e.hex);
							let myString = setTheme(e.hex, "accent", search);
							setSearch({ color: myString });
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default AccentUi;
