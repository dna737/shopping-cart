import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routesConfig } from "./routesConfig";
const Router = () => {
    const routes = createBrowserRouter(routesConfig);
    return <RouterProvider router={routes} />;
};

export { Router };
