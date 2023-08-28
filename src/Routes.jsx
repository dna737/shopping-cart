import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Electronics from "./components/Electronics";
import Jewelry from "./components/Jewelry";
import MClothing from "./components/MClothing";
import WClothing from "./components/WClothing";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                { index: true, element: <Home /> },
                { path: "electronics", element: <Electronics /> },
                { path: "jewelry", element: <Jewelry /> },
                { path: "m-clothing", element: <MClothing /> },
                { path: "w-clothing", element: <WClothing /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export { Router };
