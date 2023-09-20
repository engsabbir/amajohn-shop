import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Product = ({ product }) => {
    // console.log(product)
    const { id, title, thumbnail, stock, description, category, discountPercentage, price } = product;
    return (
        <div className="card bg-gray-200 shadow-xl p-5">
            <figure><img src={thumbnail} alt="product_img" className="h-[250px] w-full" /></figure>
            <div className="my-5 flex-1">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">available: {stock}</div>
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

            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-medium">Price: ${price}</h2>
                <Link to={`/products/${id}`}>
                    <button className="btn bg-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white hover:text-black">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Product;