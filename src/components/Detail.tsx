import React from "react";
import { useLocation } from "react-router-dom";

// Define the type for the Product
interface Product {
  image?: string;
  name: string;
  id: string;
  Quantity: string;
  buyRate: string;
  color: string;
  date: string;
}

const Detail: React.FC = () => {
  const location = useLocation();
  const { productList }: { productList: Product[] } = location.state || {
    productList: [],
  };

  return (
    <div className="detail min-h-screen bg-[#106cb8] bg-gradient-to-r from-black/60 to-transparent p-6 text-white overflow-hidden">
      {/* Product Details Section */}
      <h3 className="text-2xl mt-6 mb-4">Product List</h3>
      <hr className="border-white/30 mb-6" />

      {productList.length === 0 ? (
        <p className="text-center text-xl">No products found!</p>
      ) : (
        <ul className="space-y-8">
          {productList.map((product, index) => (
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
              <h4 className="text-lg font-semibold mb-2">Product Name</h4>
              <p className="text-sm mb-6">{product.name}</p>

              <h4 className="text-lg font-semibold mb-2">Product ID</h4>
              <p className="text-sm mb-6">{product.id}</p>

              <h4 className="text-lg font-semibold mb-2">Product Quantity</h4>
              <p className="text-sm mb-6">{product.Quantity}</p>

              <h4 className="text-lg font-semibold mb-2">Buy Rate</h4>
              <p className="text-sm mb-6">{product.buyRate}</p>

              <h4 className="text-lg font-semibold mb-2">Colour</h4>
              <p className="text-sm mb-6">{product.color}</p>

              <h4 className="text-lg font-semibold mb-2">Stock Up Date</h4>
              <p className="text-sm mb-6">{product.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Detail;
