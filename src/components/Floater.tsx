import { useEffect, useRef, useState } from "react";
import AccentUi from "./ui_changers/AccentUi";
import BgUi from "./ui_changers/BgUi";
import PrimaryUI from "./ui_changers/PrimaryUi";
import SecondaryUi from "./ui_changers/SecondaryUi";
import TextUi from "./ui_changers/TextUi";
import ExportTabs from "./ExportTabs";
import MobileChangers from "./MobileChangers";
function Floater() {
	let modalRef = useRef<HTMLDialogElement>(null);
	let [modalOpen, setModalOpen] = useState(false);
	useEffect(() => {
		// Disable scrolling when modal is open
		if (modalOpen) {
		  document.body.style.overflow = "hidden";
		} else {
		  document.body.style.overflow = "";
		}
	
		// Function to handle Esc key press
		const handleKeyDown = (event) => {
		  if (event.key === "Escape") {
			setModalOpen(false);
		  }
		};
	
		// Add event listener if modal is open
		if (modalOpen) {
		  document.addEventListener("keydown", handleKeyDown);
		}
	
		// Cleanup function
		return () => {
		  document.body.style.overflow = "";
		  document.removeEventListener("keydown", handleKeyDown);
		};
	  }, [modalOpen]);
	return (
		<div
			className="fixed w-full bottom-0  mb-4 left-0   p-2 flex  z-10 bg-neutral-800 md:bg-neutral-600 lg:bg-opacity-25 "
			// style={{ background: bgCol }}
		>
			{modalOpen ? (
				<div
					className="fixed w-full h-full bg-gray-800 bg-opacity-50 backdrop-blur-md top-0 left-0 flex items-center justify-center z-20"
					onClick={() => {
						console.log("outer");
						setModalOpen(false);
					}}
				>
					<div
						className="w-full max-w-[500px]  p-2 rounded-md bg-neutral-800"
						onClick={(e) => {
							e.stopPropagation();
							console.log("inner");
						}}
					>
						<ExportTabs />
					</div>
				</div>
			) : null}

			<div className="md:hidden w-full h-full">
				<MobileChangers/>
			</div>
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
						// modalRef.current.showModal()
						setModalOpen(true)
					}
				>
					Export
				</button>
			
			</div>
		</div>
	);
}

export default Floater;
