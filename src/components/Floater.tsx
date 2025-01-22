import AccentUi from "./ui_changers/AccentUi";
import BgUi from "./ui_changers/BgUi";
import PrimaryUI from "./ui_changers/PrimaryUi";
import SecondaryUi from "./ui_changers/SecondaryUi";
import TextUi from "./ui_changers/TextUi";

function Floater() {
	return (
		<div className="fixed w-full bottom-0  mb-4  bg-slate-800 p-2 flex  z-10">
			<div className="hidden w-full max-w-[1080px]  mx-auto  h-14 md:flex items-center">
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
