"use client"
import React, { useEffect, useState } from "react";

const CustomCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api-fresh-harvest.code-commando.com/api/v1/products"
        );
        const data = await response.json();
        console.log(data)
        setProducts(data?.data || []); // Adjust according to API response structure
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-2 grid-cols-1">
      {products.length > 0 ? (
        products.slice(0,8).map((product) => (
          <div key={product?.id} className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={product?.images[0] || "https://via.placeholder.com/150"}
                alt={product?.productNname}
                className="rounded-xl bg-gray-200"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-[#212337]">{product?.productName}</h2>
              <p className="text-[#4A4A52]">${product?.price}/kg</p>
              <div className="w-full">
                <button className="btn btn-primary border-[#A6A6A6] hover:bg-[#FF6A1A] hover:border-0 hover:text-white text-[#212337] bg-[white] w-full">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default CustomCard;
