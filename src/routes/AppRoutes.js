import { Route, Routes } from "react-router-dom"
import { DetailsView } from "../views/DetailsView";
import { ActionsView } from "../views/ActionsView";




export const AppRoutes = () => {

	return (
		<Routes>
			<Route path="/" element={<ActionsView />} />
			<Route path='/detalle/:symbol' element={<DetailsView />} />
		</Routes>
	)
};
