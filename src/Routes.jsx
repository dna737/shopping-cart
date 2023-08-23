import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Electronics from "./components/Electronics";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            // children: [{ path: "home", element: <HomePage /> }],
            children: [
                { index: true, element: <Home /> },
                { path: "electronics", element: <Electronics /> },
            ],
        },
        {
            // path: "profile/:name",
            // element: <Profile />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export { Router };
