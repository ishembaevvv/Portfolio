import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./app/routes/AppRouter";
import "./app/styles/index.scss";
import "./utils/helpers/i1next";
import { Loading } from "./ui/Loading/Loading";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Suspense fallback={<Loading />}>
			<RouterProvider router={AppRouter} />
		</Suspense>
	</StrictMode>
);
