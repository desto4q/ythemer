import { useEffect, useLayoutEffect } from "react";
import { useSearchParams } from "react-router";
import Routing from "./routing/router";
import { bg_atom, updateComps } from "./theme_store/themestore";
import { useAtom } from "jotai";

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
	useLayoutEffect(()=>{
		document.title = "ythemer"
	},[])
	let [search, setCol] = useSearchParams();
	let updateURL = () => {
		let combinedString = Object.entries(baseCol)
			.map(([_, value]) => `${parser(value)}`)
			.join("-");
		setCol({ color: combinedString });
	};

	let { updateColor } = updateComps(search, setCol);

	
	let setUrl = () => {
		let keys = Object.keys(baseCol);
		// console.log(keys);
		if (search.has("color")) {
			updateColor();
			return;
		}
		updateURL();
	};

	let [bg_color] = useAtom(bg_atom);
	useEffect(() => {
		// Update the body's background color when bg_color changes
		document.body.style.backgroundColor = bg_color;

		// Optional cleanup (not needed for background color, but good practice for effects that add/remove listeners, etc.)
		return () => {
			document.body.style.backgroundColor = ""; // Reset to default
		};
	}, [bg_color]);

	useLayoutEffect(() => {
		setUrl();
	}, []);
	return <Routing />;
}

export default App;
