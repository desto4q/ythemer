import { useAtom } from "jotai";
import {
    accent_atom,
    bg_atom,
    primary_atom,
    secondary_atom,
    text_atom,
} from "../theme_store/themestore";
import fontColorContrast from "font-color-contrast";
import { useEffect, useState } from "react";
import MobileUiChanger from "./ui_changers/MobileUiChanger";
import { PlusIcon } from "lucide-react";

function MobileChangers() {
	let [bg_color, setBackground] = useAtom(bg_atom);
	let [primary_color, setPrimary] = useAtom(primary_atom);
	let [secondary_color, setSecondary] = useAtom(secondary_atom);
	let [accent_color, setAccent] = useAtom(accent_atom);
	let [text_color, setText] = useAtom(text_atom);
	let primContrast = fontColorContrast(primary_color);
	let secContrast = fontColorContrast(secondary_color);

	let arr = [
		{
			name: "Background",
			color: bg_color,
			setter: setBackground,
		},
		{
			name: "Primary",
			color: primary_color,
			setter: setPrimary,
		},
		{
			name: "Secondary",
			color: secondary_color,
			setter: setSecondary,
		},
		{
			name: "Accent",
			color: accent_color,
			setter: setAccent,
		},
		{
			name: "Text",
			color: text_color,
			setter: setText,
		},
	];
	let [selected, setSelected] = useState<number | null>(null);
	let [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		// Function to check screen width and close modal if width > 700px
		const handleResize = () => {
			if (window.innerWidth > 700) {
				setModalOpen(false);
			}
		};

		// Run on mount in case the screen is already wider than 700px
		handleResize();

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Cleanup function
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
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
		<div className="container flex items-center gap-4 justify-center w-full h-full isolate">
			{modalOpen ? (
				<div
					className="fixed bg-neutral-700 backdrop-blur-sm bg-opacity-25 left-0 top-0 w-full h-full flex overflow-scroll
                    -z-10 

            "
					onClick={(_) => {
						if (selected != null) {
							setSelected(null);
							return;
						}
						setModalOpen(false);
					}}
				>
					<div
						className="flex w-full   mt-auto flex-col px-2 gap-2 
                        
            "
					>
						{arr.map((e, i) => {
							return (
								<MobileUiChanger
									selected={selected}
									setSelected={setSelected}
									{...e}
									key={"mobile_Changer_" + i}
									index={i}
								/>
							);
						})}
						<div className="mb-[150px]"></div>
					</div>
				</div>
			) : null}
			<button
				onClick={(_) => {
					setModalOpen(!modalOpen);
				}}
				className="p-3 rounded-lg flex items-center gap-2"
				style={{
					color: text_color,
					background: bg_color,
					outline: modalOpen?`1px solid ${text_color}`:null,
                    
				}}
			>
				Color <PlusIcon size={16} />
			</button>
			<button
				className="p-3 rounded-lg flex items-center gap-2"
				style={{
					background: bg_color,
					color: text_color,
				}}
			>
				Export <PlusIcon size={16} />
			</button>
		</div>
	);
}

export default MobileChangers;
