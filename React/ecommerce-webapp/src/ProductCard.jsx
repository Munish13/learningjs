import React from "react";


let ProductCard = ({ obj }) => {

    let { title, category, price, rating, stock, thumbnail } = obj;
    return (
        <div className="card w-96 bg-base-100 shadow-md m-5 border-2 border-black">
            <figure><img src={thumbnail} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <div className="card-actions justify-start">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating}</div>
                    <div className="badge badge-outline">{stock}</div>
                </div>
                <p>Price: <b>{price}</b></p>
                <button className="btn bg-[#007aff] mt-2 text-white text-xl">Add to cart</button>
            </div>
        </div>
    )
};

export default ProductCard;