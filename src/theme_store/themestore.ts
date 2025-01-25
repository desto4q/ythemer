import { atom, useSetAtom } from "jotai";
import { SetURLSearchParams, useSearchParams } from "react-router";

const countAtom = atom(0);
const countryAtom = atom("Japan");
const citiesAtom = atom(["Tokyo", "Kyoto", "Osaka"]);
const mangaAtom = atom({
	"Dragon Ball": 1984,
	"One Piece": 1997,
	Naruto: 1999,
});
const bg_atom = atom("#0d0404");
const text_atom = atom("#cccccc");
const primary_atom = atom("#e19695");
const secondary_atom = atom("#248263");
const accent_atom = atom("#3882c7");

let colorObj = {
	background: "#0d0404",
	primary: "#e19695",
	secondary: "#248263",
	accent: "#3882c7",
	text: "#cccccc",
};

type colName = "primary" | "secondary" | "accent" | "text" | "background";
let parser = (hex: string) => {
	let parsed = hex.replace("#", "");

	return parsed;
};

let setTheme = (hex: string, colName: colName, search: any) => {
	let colString = search.get("color");
	let colorString = colString.split("-");
	let colorObj = {
		background: colorString[0],
		primary: colorString[1],
		secondary: colorString[2],
		accent: colorString[3],
		text: colorString[4],
	};
	colorObj[colName] = parser(hex);
	let combine = Object.entries(colorObj)
		.map(([key, value]) => `${parser(value)}`)
		.join("-");
	console.log(combine);
	return combine;
};

let convHex = (hex: string) => {
	return "#" + hex;
};

let updateComps = (search: URLSearchParams, setSearch: SetURLSearchParams) => {
	// let [search, setSearch] = useSearchParams();
	console.log("comp");
	let setBg = useSetAtom(bg_atom);
	let setPrimary = useSetAtom(primary_atom);
	let setSecondary = useSetAtom(secondary_atom);
	let setAccent = useSetAtom(accent_atom);
	let setText = useSetAtom(text_atom);
	let themeString = search.get("color");
	let themeArr = themeString.split("-");
	let updateColor = () => {
		setBg("#" + themeArr[0]);
		setPrimary(convHex(themeArr[1]));
		setSecondary(convHex(themeArr[2]));
		setAccent("#" + themeArr[3]);
		setText("#" + themeArr[4]);
	};
	return {updateColor};
};
let updateUrl = () => {
	console.log("updaint");
	let [search, setSearch] = useSearchParams();
	let setBg = useSetAtom(bg_atom);
	let setPrimary = useSetAtom(primary_atom);
	let setSecondary = useSetAtom(secondary_atom);
	let setAccent = useSetAtom(accent_atom);
	let setText = useSetAtom(text_atom);
	let themeString = search.get("color");
	let themeArr = themeString.split("-");
	console.log(themeArr, "arr");
	setBg("#" + themeArr[0]);
	setPrimary(convHex(themeArr[1]));
	setSecondary(convHex(themeArr[2]));
	setAccent("#" + themeArr[3]);
	setText("#" + themeArr[4]);
};

export {
	updateComps,
	bg_atom,
	text_atom,
	primary_atom,
	secondary_atom,
	accent_atom,
	updateUrl,
	setTheme,
};
