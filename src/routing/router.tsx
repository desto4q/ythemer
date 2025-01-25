import { Route, Routes } from "react-router";
import MainPage from "../pages/MainPage";

function Routing() {
	return (
		<Routes>
			<Route
				path="/"
				element={<MainPage />}
			/>
		</Routes>
	);
}

export default Routing;
