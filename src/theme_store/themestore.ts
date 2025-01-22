import { atom } from "jotai";

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
export { bg_atom, text_atom, primary_atom, secondary_atom, accent_atom };
