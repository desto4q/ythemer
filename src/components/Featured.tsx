import { useAtom } from "jotai";
import { secondary_atom, text_atom } from "../theme_store/themestore";

function Featured() {
	let [secondCol] = useAtom(secondary_atom);
	let [textCol] = useAtom(text_atom);
	return (
		<div className="container mx-auto flex flex-col py-6 gap-4">
			<h2
				className="mx-auto text-5xl font-bold"
				style={{
					color: textCol,
				}}
			>
				Featured Articles
			</h2>
			<p
				className="text-xl mx-auto"
				style={{
					color: textCol,
				}}
			>
				Just some interesting guides and posts.
			</p>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-evenly gap-4 mt-8">
				<div
					className="h-20 rounded-md"
					style={{
						background: secondCol + "1A",
					}}
				></div>
				<div
					className="h-20 rounded-md"
					style={{
						background: secondCol + "1A",
					}}
				></div>
				<div
					className="h-20 rounded-md"
					style={{
						background: secondCol + "1A",
					}}
				></div>
			</div>
		</div>
	);
}

export default Featured;
