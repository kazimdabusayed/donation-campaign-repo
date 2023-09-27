import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import Donation from "../pages/Donation/Donation";
import Error from "../pages/Error/Error";
import OneDonation from "../pages/OneDonation/OneDonation";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <Error></Error>,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: () => fetch("./fakeData.json"),
			},
			{
				path: "/donation",
				element: <Donation />,
			},
			{
				path: "/statistics",
				element: <Statistics />,
			},
			{
				path: "/donations/:id",
				element: <OneDonation />,
				loader: () => fetch("./fakeData.json"),
			},
		],
	},
]);

export default router;