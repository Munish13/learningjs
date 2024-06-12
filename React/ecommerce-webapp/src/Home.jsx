import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Data from "./Data.js";


let Home = () => {
    let [allProducts, setAllProducts] = useState([...Data]);
    let [productData, setProductData] = useState([...Data]);
    let [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        console.log("useEffect called");
        setSearchQuery("rick")
    }, []);

    if (allProducts == 0) {
        return <Shimmer />
    }

    let handleRating = () => {
        let ratingResult = allProducts.filter((rating) => {
            return rating.rating > 4;
        });

        setProductData(ratingResult);
    };

    let handleCategory = (category) => {
        let categoryResult = allProducts.filter((obj) => {
            return obj.category == category;
        });
        setProductData(categoryResult);
    }

    let handelSearch = () => {
        // console.log(searchQuery)
        let filterSearch = allProducts.filter((value) => {
            return value.title.toLowerCase().includes(searchQuery.toLowerCase())
        });
        setProductData(filterSearch);
        setSearchQuery("");
    }

    let setLowToHigh = () => {
        let sortArray = allProducts.sort((a, b) => {
            return a.price - b.price;
        })
        setProductData([...sortArray]);
    }

    let setHighToLow = () => {
        let sortArray = allProducts.sort((a, b) => {
            return b.price - a.price;
        })
        setProductData([...sortArray]);
    }

    let resetProduct = () => {
        const resetProduct = allProducts;
        setProductData([...Data])
    }

    return (

        <>
            <div className="buttons-group block flex justify-center items-center gap-20 pb-8 pt-8">
                {/* we have to pass the refrence of the callback function */}
                {console.log("render content")}
                <button className="btn bg-[#007aff] mt-2 text-white " onClick={handleRating}>Top Rating</button>
                {/* we have to pass the refrence of the callback function  // we are calling the function */}

                <button className="btn bg-[#007aff] mt-2 text-white " onClick={() => handleCategory("furniture")}>Furniture</button>
                <div className="searchProduct">
                    <input type="text" className="h-11 relative top-[2px] border-2 border-black rounded-r-sm px-3 rounded-md"
                        value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value) }}></input>
                    <button className="btn bg-[#007aff] mt-2 text-white " onClick={handelSearch}>Search</button>
                </div>
                <button className="btn bg-[#007aff] mt-2 text-white " onClick={() => handleCategory("groceries")}>Groceries</button>
                <button className="btn bg-[#007aff] mt-2 text-white " onClick={() => handleCategory("beauty")}>Beauty</button>
                <button className="btn bg-[#007aff] mt-2 text-white " onClick={setLowToHigh}>Low to High</button>
                <button className="btn bg-[#007aff] mt-2 text-white " onClick={setHighToLow}>High to Low</button>
                <button className="btn bg-[#007aff] mt-2 text-white " onClick={resetProduct}>Reset</button>

            </div>
            <div className="flex justify-center flex-wrap">
                {
                    productData.map((products) => <ProductCard obj={products} />)
                }
            </div>

        </>

    )
}

export default Home;