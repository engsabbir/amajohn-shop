import { Link, useLoaderData, useNavigate } from "react-router-dom";

const ProductDetails = () => {
    const productDetails = useLoaderData();
    // console.log(productDetails)
    const { title, thumbnail, stock, description, category, discountPercentage, price } = productDetails;
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className="mx-auto max-w-sm mt-5">
            <div className="card bg-gray-200 shadow-xl p-5">
                <figure><img src={thumbnail} alt="product_img" className="h-[250px] w-full" /></figure>
                <div className="my-5 flex-1">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">{stock}Pcs.</div>
                    </h2>
                    <p>{description}!</p>
                    <div className="card-actions justify-end mt-4 flex items-center">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-secondary badge-outline">{discountPercentage}%off</div>
                        <div>
                            {discountPercentage > 10 ? <h2 className="badge badge-accent badge-outline">Hot Deal</h2> : <h2></h2>}
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-medium">Price: ${price}</h2>
                <div className="flex items-center justify-between">
                    <button onClick={handleGoBack} className="btn bg-purple-600 text-white hover:text-black hover:border hover:border-black">Go Back</button>
                    <Link>
                        <button className="btn bg-secondary text-white hover:text-black hover:border hover:border-black">Buy now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;