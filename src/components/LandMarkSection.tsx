import { useAtom } from "jotai";
import { primary_atom, secondary_atom } from "../theme_store/themestore";

function LandMarkSection() {
	let [primaryCol] = useAtom(primary_atom);
	let [secondCol] = useAtom(secondary_atom);
	return (
		<div className="mx-auto container py-4 flex flex-col gap-2">
			<div className="flex w-full gap-2 flex-wrap px-4 md:px-0 ">
				<div
					className="flex-[1_1_352px] h-[352px] rounded-lg flex flex-col items-center justify-center"
					style={{
						background: primaryCol,
					}}
				>
					<h2 className=" text-3xl  md:text-5xl text-black text-center  font-bold">
						500k+ Subs
					</h2>
					<p className="text-black mt-8">and counting ....</p>
				</div>
				<div
					className="h-[352px] lg:max-w-[200px] w-full min-w-fit rounded-lg flex flex-col items-center justify-center"
					style={{
						background: secondCol,
					}}
				>
					<h2 className="text-3xl  md:text-5xl text-black font-bold text-center">
						100%
						<br className="hidden md:inline-block" /> Free
					</h2>
					<p className="text-black mt-8">forever</p>
				</div>
			</div>
			<div className="flex w-full gap-2 flex-wrap px-4 md:px-0">
				<div
					className="flex-[1_1_352px] h-[252px] rounded-lg flex flex-col items-center justify-center"
					style={{
						background: primaryCol,
					}}
				>
					<h2 className=" text-3xl  text-black text-center  font-bold">
						19K+ Plugin Users
					</h2>
					<p className="text-black mt-8">and counting ....</p>
				</div>
				<div
					className="h-[252px] lg:max-w-[500px] w-full min-w-fit rounded-lg flex flex-col items-center justify-center"
					style={{
						background: secondCol,
					}}
				>
					<h2 className="text-3xl   text-black font-bold text-center">
						200K+ Reddit Upvotes
					</h2>
					<p className="text-black mt-8">forever</p>
				</div>
			</div>
		</div>
	);
}

export default LandMarkSection;
