import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import { LoadItems } from "./LoadItems";

export default function WClothing() {
    const [cart, setCart] = useOutletContext();

    function handleAddToCart(product, quantity, image) {
        let oldProductIndex = cart.findIndex(
            (item) => item.product.id === product.id
        );
        let cartCopy = JSON.parse(JSON.stringify(cart));
        //this means that the product was already in the cart.
        if (oldProductIndex !== -1) {
            cartCopy[oldProductIndex].quantity = Math.min(
                10,
                cart[oldProductIndex].quantity + quantity
            );
        } else {
            // this means that the product is a new addition to the cart.
            cartCopy.push({
                product: product,
                quantity: quantity,
                image: image,
            });
        }
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
