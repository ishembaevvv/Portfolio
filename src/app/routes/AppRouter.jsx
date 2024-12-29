import { createBrowserRouter } from "react-router-dom"
import { PATH } from "../../utils/constants/Constants";
import { Layout } from "../layout/Layout";
import { Home } from "../../pages/Home";
import { Skills } from "../../pages/Skills/Skills";
import { Works } from "../../pages/Works/Works";
import { Contacts } from "../../pages/Contacts/Contacts";
import { About } from "../../pages/About";

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
				path: PATH.about,
				element: <About />,
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