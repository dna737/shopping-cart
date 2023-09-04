import { useImmer } from "use-immer";
import { Outlet, useOutlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
    const [cart, setCart] = useImmer([]);

    console.log("cart:", cart);
    return (
        <>
            <Navbar />
            <Outlet context={[cart, setCart]} />
        </>
    );
}
export default App;
