import { useAtom } from "jotai";
import AccentUi from "./ui_changers/AccentUi";
import BgUi from "./ui_changers/BgUi";
import PrimaryUI from "./ui_changers/PrimaryUi";
import SecondaryUi from "./ui_changers/SecondaryUi";
import TextUi from "./ui_changers/TextUi";
import { bg_atom } from "../theme_store/themestore";

function Floater() {
	let [bgCol] = useAtom(bg_atom);
	return (
		<div
			className="fixed w-full bottom-0  mb-4   p-2 flex  z-10"
			style={{ background: bgCol }}
		>
			<div className="hidden w-full container  mx-auto  h-14 md:flex items-center">
				<TextUi />
				<BgUi />
				<PrimaryUI />
				<SecondaryUi />
				<AccentUi />
			</div>
		</div>
	);
}

export default Floater;
