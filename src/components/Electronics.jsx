import { useOutletContext } from "react-router-dom";
import { LoadItems } from "./LoadItems";
import PropTypes from "prop-types";

export default function Electronics() {
    const [cart, setCart] = useOutletContext();

    function handleAddToCart(product, quantity) {
        let cartCopy = JSON.parse(JSON.stringify(cart));
        cartCopy.push({ product: product, quantity: quantity });
        setCart(cartCopy);
    }
    return (
        <LoadItems category={"electronics"} handleAddToCart={handleAddToCart} />
    );
}

Electronics.propTypes = {
    handleAction: PropTypes.func,
};
