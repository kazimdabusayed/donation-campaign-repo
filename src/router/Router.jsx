import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import Donation from "../pages/Donation/Donation";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/donation",
				element: <Donation />
			},
			{
				path: "/statistics",
				element: <Statistics />
			},
		],
	},
]);

export default router;