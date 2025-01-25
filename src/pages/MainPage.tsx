import Footer from "../components/Footer";
import Other from "../components/Other";
import Featured from "../components/Featured";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Floater from "../components/Floater";
import InfoSection from "../components/InfoSection";
import LandMarkSection from "../components/LandMarkSection";
import WhySection from "../components/WhySection";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import { useAtom } from "jotai";
import { bg_atom } from "../theme_store/themestore";

function MainPage() {
	// let {} = use
	let [bg_col] = useAtom(bg_atom);
	return (
		<div
			style={{
				background: bg_col,
			}}
			className=" "
		>
			<NavBar />
			<div
				className="pb-20 flex-col flex gap-20 z-20"
				// style={{
				// 	background: "red"
				// }}
			>
				<Hero />
				{/* <div className="w-[200px] h-[500px] bg-slate-700">
			</div> */}
				{/* <div className="h-[1080px]"></div> */}
				<WhySection />
				<LandMarkSection />
				<InfoSection />
				<Floater />
				<Pricing />
				<Testimonials />
				<Faq />
				<Featured />
				<Other />
			</div>
			<Footer />
		</div>
	);
}

export default MainPage;
