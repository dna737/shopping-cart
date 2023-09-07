import { v4 as uuidv4 } from "uuid";
import { useOutletContext } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Cart() {
    const [cart, setCart] = useOutletContext();

    let total = getTotalCost(cart);

    function handleItemQuantityChange(index, event) {
        let cartCopy = JSON.parse(JSON.stringify(cart));
        cartCopy[index].quantity = event.target.value;

        if (event.target.value === 0) {
            cartCopy.splice(index, 1);
        }

        setCart(cartCopy);
    }

    return (
        cart.length > 0 && (
            <>
                <ul className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-4 p-2.5">
                    {cart.map(
                        (product, index) =>
                            product.quantity > 0 && (
                                <li key={uuidv4()}>
                                    <a
                                        href={product.image}
                                        className="flex justify-center flex-col items-center block overflow-hidden group"
                                    >
                                        <img
                                            src={product.image}
                                            alt=""
                                            className="w-full object-cover transition duration-500 group-hover:scale-105 "
                                            style={{
                                                objectFit: "contain",
                                                height: 200,
                                                width: 200,
                                            }}
                                        />
                                        <div className="relative pt-3 bg-white">
                                            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                                {product.title}
                                            </h3>
                                            <p className="mt-2">
                                                <span className="sr-only">
                                                    {" "}
                                                    Regular Price{" "}
                                                </span>
                                                <span className="tracking-wider text-gray-900">
                                                    {" "}
                                                    ${product.product.price}
                                                </span>
                                            </p>
                                        </div>
                                    </a>
                                    <input
                                        className="focus:ring-blue-500 focus:border-blue-500 border-yellow-300"
                                        type="number"
                                        min={0}
                                        max={10}
                                        value={product.quantity}
                                        onChange={(event) => {
                                            handleItemQuantityChange(
                                                index,
                                                event
                                            );
                                        }}
                                    />
                                </li>
                            )
                    )}
                </ul>

                <footer className="sticky bottom-0">
                    Total: {Math.round(total * 100) / 100}
                </footer>
            </>
        )
    );
}

function getTotalCost(cart) {
    let result = 0;
    for (const item of cart) {
        result += Math.round(item.product.price * item.quantity * 100) / 100;
    }
    console.log("result:", result);
    return result;
}
