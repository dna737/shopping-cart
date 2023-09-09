import App from "./App";
import Home from "./components/Home";
import Electronics from "./components/Electronics";
import Jewelry from "./components/Jewelry";
import MClothing from "./components/MClothing";
import Cart from "./components/Cart";
import WClothing from "./components/WClothing";

export const routesConfig = [
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "electronics", element: <Electronics /> },
            { path: "jewelry", element: <Jewelry /> },
            { path: "m-clothing", element: <MClothing /> },
            { path: "w-clothing", element: <WClothing /> },
            { path: "cart", element: <Cart /> },
        ],
    },
];
