import { useAtom } from "jotai";
import { primary_atom, text_atom } from "../theme_store/themestore";
import fontColorContrast from "font-color-contrast";

function Other() {
	let [primary] = useAtom(primary_atom);
	let [textCol] = useAtom(text_atom);
	let contrastCol = fontColorContrast(primary);
	return (
		<div
			className="container mx-auto flex flex-col py-6 gap-4"
			style={{
				color: textCol,
			}}
		>
			<h2 className="text-center  mx-auto text-3xl lg:text-5xl font-bold px-3 lg:px-0">
				Your Journey Shouldn't End Here.
			</h2>
			<p className=" text-center text-md lg:text-xl mx-auto">
				Just some interesting guides and posts.
			</p>
			<button
				className=" btn mt-8 mx-auto btn-wide "
				style={{
					background: primary,
					color: contrastCol,
				}}
			>
				Stayed Tuned
			</button>
		</div>
	);
}

export default Other;
