import { useOutletContext } from "react-router-dom";
import { LoadItems } from "./LoadItems";
import PropTypes from "prop-types";
export default function MClothing() {
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
            category={"men's clothing"}
            handleAddToCart={handleAddToCart}
        />
    );
}

MClothing.propTypes = {
    handleAddToCart: PropTypes.func,
};
