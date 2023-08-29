import { useOutletContext } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Cart() {
    const cart = useOutletContext();
    console.log("HI THERE", cart);
    // return <h2> what: {cart}</h2>;
}
