import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import RootLayout from "../layouts/RootLayout";
import ContactUs from "../pages/Contact";
import Home from "../pages/Home";

export const routesConfig = createBrowserRouter([{
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
        {index: true, element: <Home />},
        {path: "/contact", element: <ContactUs />}
    ]
}])

