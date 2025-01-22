import { useAtom } from "jotai";
import {
	primary_atom,
	secondary_atom,
	text_atom,
} from "../theme_store/themestore";

const pricing_data = [
	{
		plan: "Basic",
		price: "$0.00 / month",
		features: [
			"Choose any color",
			"Export all you want",
			"Get a big thank you for checking this site out",
		],
	},
	{
		plan: "Pro",
		price: "$0.00 / month",
		features: [
			"Choose any color",
			"Export all you want",
			"Get a big thank you for checking this site out",
			"Get access to dashboard",
		],
	},
	{
		plan: "Enterprise",
		price: "$0.00 / month",
		features: [
			"Choose any color",
			"Export all you want",
			"Get a big thank you for checking this site out",
			"Get access to dashboard",
			"Super duper exclusive members-only content",
		],
	},
];

function Pricing() {
	let [secondCol] = useAtom(secondary_atom);
	let [primCol] = useAtom(primary_atom);
	let [textCol] = useAtom(text_atom);
	return (
		<div className="container mx-auto py-6 flex flex-col gap-4 justify-center items-center">
			<h2 className="text-5xl font-bold">Pricing & Plans</h2>
			<p className="text-lg font-bold">
				The tool is 100% free! This is just a generic section.
			</p>
			<div className=" mt-8 w-full grid grid-cols-[repeat(auto-fit,350px)] gap-4 lg:gap-8 justify-center items-center">
				{pricing_data.map((e, index) => {
					return (
						<div
							className="h-fit md:min-h-[652px] lg:py-12 rounded-lg p-4 flex flex-col items-center gap-6"
							key={e.plan}
							style={{
								background:
									index != 1
										? secondCol + "0D"
										: primCol + "0D",
							}}
						>
							<h2
								className="text-2xl"
								style={{ color: textCol }}
							>
								{e.plan}
							</h2>
							<p
								className="text-md"
								style={{ color: textCol }}
							>
								{e.price}
							</p>
							<div className="flex flex-col gap-4 px-4 mt-6">
								{e.features.map((feat) => {
									return (
										<div
											key={feat}
											className=" flex items-center gap-6 leading-loose"
											style={{ color: textCol }}
										>
											<div className="h-12 min-w-12 bg-red-500"></div>
											{feat}
										</div>
									);
								})}
							</div>
							<button className="btn btn-primary mt-auto">
								Get Started
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Pricing;
