import { useAtom } from "jotai";
import { bg_atom } from "../theme_store/themestore";
import fontColorContrast from "font-color-contrast";

function NavBar() {
	let [bgCol] = useAtom(bg_atom);
	let borderCol = fontColorContrast(bgCol);
	return (
		<div
			className="border-b"
			style={{
				borderColor: borderCol + "1A",
			}}
		>
			<nav className="mx-auto container   h-16 flex items-center px-2 md:px-0 ">
				<h2 className="font-bold text-xl bg-gradient-to-r from-emerald-500 to-neutral-400 bg-clip-text text-transparent">
					Yhemer
				</h2>
				<div className=" hidden md:flex items-center gap-4 ml-auto">
					<a
						href="#"
						className="btn btn-ghost"
					>
						Plugin
					</a>
					<a
						href="#"
						className="btn btn-ghost"
					>
						Docs
					</a>
					<a
						href="#"
						className="btn btn-ghost"
					>
						Templates
					</a>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
