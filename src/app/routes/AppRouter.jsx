import { createBrowserRouter } from "react-router-dom"
import { PATH } from "../../utils/constants/Constants";
import { Layout } from "../layout/Layout";
import { Home } from "../../pages/Home/Home";
import { Skills } from "../../pages/Skills/Skills";
import { Works } from "../../pages/Works/Works";
import { Contacts } from "../../pages/Contacts/Contacts";

export const AppRouter = createBrowserRouter([
	{
		path: PATH.main,
		element: <Layout />,
		children: [
			{
				path: PATH.main,
				element: <Home />,
			},
			{
				path: PATH.works,
				element: <Works />,
			},
			{
				path: PATH.skills,
				element: <Skills />,
			},
			{
				path: PATH.contacts,
				element: <Contacts />,
			},
		],
	}
]);