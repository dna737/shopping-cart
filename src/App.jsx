import { useImmer } from "use-immer";
import { Outlet, useOutlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import MClothing from "./components/MClothing";
// import { useState } from "react";

function App() {
    const [cart, setCart] = useImmer([]);
    console.log("🚀 ~ file: App.jsx:11 ~ App ~ cart:", cart);
    // console.log("🚀 ~ file: App.jsx:9 ~ App ~ setCart:", setCart);
    const outlet = useOutlet();

    function handleAddToCart() {
        console.log("hi there");
        return "hi there";
    }

    return (
        <>
            <Navbar />
            {outlet && outlet instanceof Cart ? (
                <Outlet cart={cart} handleAddToCart={handleAddToCart} />
            ) : (
                <Outlet context={[cart, setCart]} />
            )}
        </>
    );
}
export default App;
