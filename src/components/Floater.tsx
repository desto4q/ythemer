import { useRef } from "react";
import ExportTabs from "./ExportTabs";
import AccentUi from "./ui_changers/AccentUi";
import BgUi from "./ui_changers/BgUi";
import PrimaryUI from "./ui_changers/PrimaryUi";
import SecondaryUi from "./ui_changers/SecondaryUi";
import TextUi from "./ui_changers/TextUi";
function Floater() {
	let modalRef = useRef<HTMLDialogElement>(null);
	return (
		<div
			className="fixed w-full bottom-0  mb-4 left-0   p-2 flex  z-10 bg-neutral-600 bg-opacity-25"
			// style={{ background: bgCol }}
		>
			<div className="hidden w-full container  mx-auto  h-14 md:flex items-center">
				<TextUi />
				<BgUi />
				<PrimaryUI />
				<SecondaryUi />
				<AccentUi />
				<button
					className="btn"
					onClick={() =>
						// document.getElementById("my_modal_2").showModal()
						modalRef.current.showModal()
					}
				>
					Export
				</button>
				<dialog
					ref={modalRef}
					id="my_modal_2"
					className="modal"
				>
					<div className="modal-box">
						<ExportTabs />
					</div>
					<form
						method="dialog"
						className="modal-backdrop p-0 !outline-none !border-none "
					>
						<button>close</button>
					</form>
				</dialog>
			</div>
		</div>
	);
}

export default Floater;
