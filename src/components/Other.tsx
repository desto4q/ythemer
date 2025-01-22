import { useAtom } from "jotai";
import {
    primary_atom,
    secondary_atom,
    text_atom,
} from "../theme_store/themestore";

function Other() {
	let [secondCol] = useAtom(secondary_atom);
	let [primary] = useAtom(primary_atom);
	let [textCol] = useAtom(text_atom);

	return (
		<div
			className="container mx-auto flex flex-col py-6 gap-4"
			style={{
				color: textCol,
			}}
		>
			<h2 className="mx-auto text-5xl font-bold">
				Your Journey Shouldn't End Here.
			</h2>
			<p className="text-xl mx-auto">
				Just some interesting guides and posts.
			</p>
			<button
				className=" btn mt-8 mx-auto btn-wide !text-black"
				style={{
					background: primary,
				}}
			>
				Stayed Tuned
			</button>
		</div>
	);
}

export default Other;
