import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="relative flex items-center justify-center">
          <div className="w-24 h-24 rounded-2xl bg-white/30 backdrop-blur-md shadow-xl flex items-center justify-center border border-white/20">
            <span className="block w-16 h-16 border-4 border-t-transparent border-b-transparent border-r-indigo-400 border-l-pink-400 border-solid rounded-full animate-spin"></span>
            <span
              className="absolute text-transparent bg-gradient-to-r from-indigo-400 via-pink-400 to-fuchsia-500 bg-clip-text font-extrabold text-xl animate-pulse drop-shadow-lg select-none"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Loading
            </span>
          </div>
        </div>
        {/* <p className="mt-6 text-lg text-gray-700 font-medium animate-fade-in">Fetching products, please wait...</p> */}
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  if (!product) return null;

  return (
    <div className="flex justify-center items-center min-h-[60vh]  py-10">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 flex items-center justify-center bg-gray-100 p-6">
          <img
            src={
              Array.isArray(product.images)
                ? product.images[0]
                : product.thumbnail
            }
            alt={product.title}
            className="object-contain rounded-xl max-h-72 w-full h-full transition-transform duration-700 hover:scale-110"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2 ">
              {product.title}
            </h2>
            <p className="text-gray-500 mb-4 line-clamp-3">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
             {Array.isArray(product.tags)
                ? product.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-xl bg-pink-400 text-white px-3 py-1 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))
                : product.tags && (
                    <span className="rounded-xl bg-pink-400 text-white px-3 py-1 text-xs font-semibold">
                      {product.tags}
                    </span>
                  )}
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-indigo-600">
                ${product.price}
              </span>
              {product.discountPercentage && (
                <span className="text-sm text-gray-400 line-through">
                  $
                  {(
                    product.price /
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)}
                </span>
              )}
              {product.discountPercentage && (
                <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                  -{product.discountPercentage}%
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-yellow-400">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
            </div>
              <div className="text-gray-500 text-xs">
                Rating : ({product.rating} reviews)
              </div>
            <div className="text-xs text-gray-400 my-2">
              {product.brand ? <span>Brand <span className="font-medium bg-purple-500 rounded-xl px-4 py-[1.4px] text-white">{product.brand}</span></span> : <span></span>}
            </div>
            <div className="text-xs text-gray-400 mb-2">
              Category: <span className="bg-green-500 rounded-xl px-4 py-[1.7px] text-white">{product.category}</span>
            </div>
          </div>
          {/* <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-bold transition-colors duration-300 flex items-center justify-center gap-2 shadow">
            <i className="fas fa-shopping-cart" /> Add to Cart
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Detail;
