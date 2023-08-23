import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            // children: [{ path: "home", element: <HomePage /> }],
            children: [{ index: true, element: <Home /> }],
        },
        {
            // path: "profile/:name",
            // element: <Profile />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export { Router };
