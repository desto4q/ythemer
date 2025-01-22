import { useAtom } from "jotai";
import Floater from "./components/Floater";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { bg_atom } from "./theme_store/themestore";
import WhySection from "./components/WhySection";
import LandMarkSection from "./components/LandMarkSection";
import InfoSection from "./components/InfoSection";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Featured from "./components/Featured";
import Other from "./components/Other";
import Footer from "./components/Footer";
function App() {
	const [color] = useAtom(bg_atom);
	return (
		<div
			style={{
				background: color,
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

export default App;
