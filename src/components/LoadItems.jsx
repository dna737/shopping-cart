/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useState } from "react";
import useFetch from "react-fetch-hook";

export function LoadItems({ category, handleAddToCart }) {
    const [quantities, setQuantities] = useState(Array(10).fill(0));
    const { isLoading, data, error } = useFetch(
        `https://fakestoreapi.com/products/category/${category}`,
        { mode: "cors" }
    );

    function handleQuantityChange(index, event) {
        let quantitiesCopy = JSON.parse(JSON.stringify(quantities));
        quantitiesCopy[index] = sanitizeInput(parseInt(event.target.value));
        setQuantities(quantitiesCopy);
    }
    function sanitizeInput(inputValue) {
        if (inputValue) {
            if (inputValue < 0) {
                return 0;
            }
            if (inputValue > 10) {
                return 10;
            }
            return inputValue;
        }
        return 0;
    }

    function resetQuantityCounter(index) {
        let quantitiesCopy = JSON.parse(JSON.stringify(quantities));
        quantitiesCopy[index] = 0;
        setQuantities(quantitiesCopy);
    }
    return (
        <>
            {isLoading && (
                <div className="h-full flex justify-center items-center">
                    <div>Loading...</div>
                </div>
            )}
            {error && (
                <div className="h-full flex justify-center items-center">
                    <div>{`There is a problem fetching the post data - ${error}`}</div>
                </div>
            )}
            <ul className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-4 p-2.5">
                {data &&
                    data.map((product, index) => {
                        return (
                            <div key={product.id}>
                                <li>
                                    <a
                                        href={product.image}
                                        className="flex justify-center h-[280px] w-[350px] flex-col items-center block overflow-hidden group"
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
                                                    ${product.price}
                                                </span>
                                            </p>
                                        </div>
                                    </a>
                                    <input
                                        className="focus:ring-blue-500 focus:border-blue-500 border-yellow-300"
                                        type="number"
                                        min={0}
                                        max={10}
                                        value={quantities[index]}
                                        onChange={(event) => {
                                            handleQuantityChange(index, event);
                                        }}
                                    />
                                    <button
                                        onClick={() => {
                                            if (quantities[index]) {
                                                handleAddToCart(
                                                    product,
                                                    quantities[index]
                                                );
                                            }
                                            resetQuantityCounter(index);
                                        }}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Add to Cart
                                    </button>
                                </li>
                            </div>
                        );
                    })}
            </ul>
        </>
    );
}

LoadItems.propTypes = {
    category: PropTypes.string,
    cartFunction: PropTypes.func,
};
