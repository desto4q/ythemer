import { useLayoutEffect } from "react";
import { useSearchParams } from "react-router";
import Routing from "./routing/router";
import { useAtom } from "jotai";
import { accent_atom, bg_atom, updateComps } from "./theme_store/themestore";

let parser = (hex: string) => {
	let parsed = hex.replace("#", "");

	return parsed;
};
let baseCol = {
	background: "#0d0404",
	primary: "#e19695",
	secondary: "#248263",
	accent: "#3882c7",
	text: "#cccccc",
};
function App() {
	let [search, setCol] = useSearchParams();
	let [bgCol, setBg] = useAtom(bg_atom);
	let [_, setAccent] = useAtom(accent_atom);
	let updateURL = () => {
		let combinedString = Object.entries(baseCol)
			.map(([key, value]) => `${parser(value)}`)
			.join("-");
		setCol({ color: combinedString });
	};
	let { updateColor } = updateComps(search, setCol);

	let setUrl = () => {
		let keys = Object.keys(baseCol);
		console.log(keys);
		if (search.has("color")) {
			updateColor();
			return;
		}
		updateURL();
	};

	useLayoutEffect(() => {
		setUrl();
	}, []);
	return <Routing />;
}

export default App;
