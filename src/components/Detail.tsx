// Detail.tsx
import React from "react";
import { useLocation } from "react-router-dom";

// Define the type for the Product
interface Product {
  image: string | null;
  name: string;
  id: string;
  buyRate: string;
  color: string;
  date: string;
}

const Detail: React.FC = () => {
  const location = useLocation();
  const { productList } = location.state || { productList: [] }; // Default to empty array if no state is passed

  return (
    <div className="detail min-h-screen bg-[#106cb8] bg-gradient-to-r from-black/60 to-transparent p-6 text-white overflow-hidden">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search For Product"
        className="w-64 h-10 rounded-lg border border-whitesmoke shadow-lg p-2 outline-none focus:shadow-blue-500 transition-shadow duration-300 ease-in-out"
      />

      {/* Product Details Section */}
      <h3 className="text-2xl mt-6 mb-4">Product List</h3>
      <hr className="border-white/30 mb-6" />

      {productList.length === 0 ? (
        <p className="text-center text-xl">No products found!</p>
      ) : (
        <ul className="space-y-8">
          {productList.map((product: Product, index: number) => (
            <li
              key={index}
              className="p-6 border border-white/30 rounded-lg shadow-md bg-black/20"
            >
              {/* Product Image */}
              {product.image && (
                <img
                  src={product.image}
                  alt="Product image"
                  className="w-48 h-48 object-cover mb-6 rounded-lg"
                />
              )}
              <hr className="border-white/30 mb-6" />

              {/* Product Name */}
              <h4 className="text-lg font-semibold mb-2">Product Name</h4>
              <hr className="border-white/30 mb-4" />
              <p className="text-sm mb-6">{product.name}</p>

              {/* Product ID */}
              <h4 className="text-lg font-semibold mb-2">Product ID</h4>
              <hr className="border-white/30 mb-4" />
              <p className="text-sm mb-6">{product.id}</p>

              {/* Buy Rate */}
              <h4 className="text-lg font-semibold mb-2">Buy Rate</h4>
              <hr className="border-white/30 mb-4" />
              <p className="text-sm mb-6">{product.buyRate}</p>

              {/* Colour */}
              <h4 className="text-lg font-semibold mb-2">Colour</h4>
              <hr className="border-white/30 mb-4" />
              <p className="text-sm mb-6">{product.color}</p>

              {/* Stock Up Date */}
              <h4 className="text-lg font-semibold mb-2">Stock Up Date</h4>
              <hr className="border-white/30 mb-4" />
              <p className="text-sm mb-6">{product.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Detail;
