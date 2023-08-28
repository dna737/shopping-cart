import PropTypes from "prop-types";
import { useState } from "react";
import useFetch from "react-fetch-hook";

export function LoadItems({ category }) {
    const [quantities, setQuantities] = useState(Array(10).fill(0));
    const { isLoading, data, error } = useFetch(
        `https://fakestoreapi.com/products/category/${category}`
    );

    function handleQuantityChange(index, event) {
        let quantitiesCopy = JSON.parse(JSON.stringify(quantities));
        quantitiesCopy[index] = parseInt(event.target.value);
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
                    data.map((image, index) => {
                        return (
                            <div key={image.id}>
                                <li>
                                    <a
                                        href={image.image}
                                        className="flex justify-center flex-col items-center block overflow-hidden group"
                                    >
                                        <img
                                            src={image.image}
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
                                                {image.title}
                                            </h3>
                                            <p className="mt-2">
                                                <span className="sr-only">
                                                    {" "}
                                                    Regular Price{" "}
                                                </span>
                                                <span className="tracking-wider text-gray-900">
                                                    {" "}
                                                    ${image.price}
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
                                    <button>Add to Cart</button>
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
};
