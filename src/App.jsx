import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <div className="h-1/2">
                <Navbar />
            </div>
            <Outlet />
        </>
    );
}
export default App;
