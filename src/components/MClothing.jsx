import { useOutletContext } from "react-router-dom";
import { LoadItems } from "./LoadItems";
import PropTypes from "prop-types";
export default function MClothing() {
    const [cart, setCart] = useOutletContext();

    function handleAddToCart(product, quantity) {
        let cartCopy = JSON.parse(JSON.stringify(cart));
        cartCopy.push({ product: product, quantity: quantity });
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
