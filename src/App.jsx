import { Outlet, useOutlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import MClothing from "./components/MClothing";

function App() {
    const [cart, setCart] = [];
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
