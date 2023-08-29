import { useOutletContext } from "react-router-dom";
import { LoadItems } from "./LoadItems";
import PropTypes from "prop-types";
export default function MClothing() {
    const [cart, setCart] = useOutletContext();

    function handleAddToCart() {
        console.log("works?");
        let cartCopy = JSON.parse(JSON.stringify(cart));
        cartCopy.push("something");
        setCart(cartCopy);
    }
    return (
        <LoadItems
            category={"men's clothing"}
            handleAddToCart={handleAddToCart}
        />
    );
}

MClothing.propTypes = {
    handleAddToCart: PropTypes.func,
};
