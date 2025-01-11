"use client";
import Link from "next/link";
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
        console.log(data);
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
        products.slice(0, 8).map((product) => (
          
          <div
            key={product?.id}
            className="card bg-base-100 w-full shadow-xl flex flex-col justify-between"
            
          >
            <Link href={`/products/${product?.id}`}>
            <figure className="p-6 flex justify-center">
              <img
                src={product?.images[0] || "https://via.placeholder.com/150"}
                alt={product?.productName}
                className="rounded-2xl bg-gray-200 w-full h-60 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center p-4">
              <h2 className="card-title text-[#212337] text-lg font-semibold">
                {product?.productName}
              </h2>
              <p className="text-[#4A4A52] text-sm">${product?.price}/kg</p>
              <div className="w-full mt-4">
                <button className="btn btn-primary border-[#A6A6A6] hover:bg-[#FF6A1A] hover:border-0 hover:text-white text-[#212337] bg-[white] w-full">
                  Add to cart
                </button>
              </div>
            </div>
            </Link>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default CustomCard;
