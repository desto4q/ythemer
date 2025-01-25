import { secondary_atom, setTheme } from "../../theme_store/themestore";
import { useAtom } from "jotai";
import { ColorPicker, useColor } from "react-color-palette";
import { useSearchParams } from "react-router";

function SecondaryUi() {
	let [secondary_color, setSec] = useAtom(secondary_atom);
	const [color, setColor] = useColor(secondary_color);
	let [search, setSearch] = useSearchParams();

	return (
		<div>
			<div className="dropdown dropdown-top">
				<div
					tabIndex={0}
					role="button"
					className="btn m-1 !text-black"
					style={{
						background: secondary_color,
					}}
				>
					Secondary{" "}
				</div>
				<div
					tabIndex={0}
					className="dropdown-content menu bg-base-100 rounded-box z-[1] w-64 p-2 shadow flex flex-col gap-2"
				>
					<ColorPicker
						color={color}
						onChange={setColor}
						onChangeComplete={(e) => {
							setSec(e.hex);
							let myString = setTheme(e.hex, "secondary", search);
							setSearch({ color: myString });
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default SecondaryUi;
