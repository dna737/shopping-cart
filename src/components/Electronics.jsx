import useFetch from "react-fetch-hook";

export default function Electronics() {
    const { isLoading, data, error } = useFetch(
        "https://fakestoreapi.com/products/category/electronics"
    );
    if (data) {
        console.log("data:", data[0]);
    }
    return (
        <>
            {console.log("hi there")}
            {isLoading && <div>Loading...</div>}
            {error && (
                <div className="h-full flex justify-center items-center">
                    <div>{`There is a problem fetching the post data - ${error}`}</div>
                </div>
            )}
            <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4 p-2.5">
                {data &&
                    data.map((image) => {
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
                                </li>
                            </div>
                        );
                    })}
            </ul>
        </>
    );
}
