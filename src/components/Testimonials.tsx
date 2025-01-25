import { useAtom } from "jotai";
import {
	accent_atom,
	primary_atom,
	text_atom,
} from "../theme_store/themestore";
import { Star } from "lucide-react";

let testimonials_data = [
	{
		name: "Sarah Thompson",
		job: "Graphic Designer",
		review: "Wow! I love this site. Yhemer is all websites at the same time. It makes my design process so much easier!",
	},
	{
		name: "Michael Johnson",
		job: "Marketing Specialist",
		review: "This platform is a game changer! The ability to choose any color and export without limits is fantastic. Highly recommend it!",
	},
	{
		name: "Emily Davis",
		job: "Web Developer",
		review: "I can't believe how simple it is to use. Yhemer  has transformed my workflow, and the dashboard access is a huge plus!",
	},
];
function Testimonials() {
	return (
		<div className="container mx-auto py-6 flex flex-col gap-4 justify-center items-center">
			<h2 className="text-3xl text-center lg:text-5xl  font-bold">Testimonials</h2>
			<p className="text-md text-center lg:text-lg font-bold px-4 lg:px-0">
				AI generated users comments and review (its fake fyi){" "}
			</p>
			<div className=" mt-8 w-full grid grid-cols-[repeat(auto-fit,320px)] lg:grid-cols-[repeat(auto-fit,350px)] gap-4 lg:gap-8 justify-center items-center">
				{testimonials_data.map((e, i) => {
					return (
						<TestCard
							{...e}
							key={e.name + i}
						/>
					);
				})}
			</div>
		</div>
	);
}

let TestCard = ({ name, job, review }) => {
	let [primcol] = useAtom(primary_atom);
	let [textCol] = useAtom(text_atom);
	let [accentCol] = useAtom(accent_atom);
	return (
		<div
			className="h-[350px] p-6 py-12 rounded-lg gap-4 flex  flex-col"
			style={{
				background: primcol + "0D",
			}}
		>
			<div className="flex items-center gap-4 ">
				<div
					className=" rounded-full w-20 h-20 "
					style={{
						background: primcol,
					}}
				></div>
				<div className="flex flex-col gap-1">
					<p
						className="font-bold"
						style={{
							color: textCol,
						}}
					>
						{name}
					</p>
					<p
						className=""
						style={{
							color: textCol + "80",
						}}
					>
						{job}
					</p>
				</div>
			</div>
			<div className="h-10 w-full items-center flex">
				{Array(5)
					.fill((e) => e)
					.map((_, i) => (
						<Star
							fill={accentCol}
							stroke="0"
							size={32}
							key={"star" + i}
						/>
					))}
			</div>
			<p
				style={{
					color: textCol,
				}}
			>
				{review}
			</p>
		</div>
	);
};

export default Testimonials;
