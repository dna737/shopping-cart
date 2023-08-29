import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import { LoadItems } from "./LoadItems";

export default function WClothing() {
    const [cart, setCart] = useOutletContext();

    function handleAddToCart(product, quantity) {
        let cartCopy = JSON.parse(JSON.stringify(cart));
        cartCopy.push({ product: product, quantity: quantity });
        setCart(cartCopy);
    }
    return (
        <LoadItems
            category={"women's clothing"}
            handleAddToCart={handleAddToCart}
        />
    );
}

WClothing.propTypes = {
    handleAction: PropTypes.func,
};
