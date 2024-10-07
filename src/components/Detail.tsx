import React from 'react';

const Detail: React.FC = () => {
  return (
    <div className="detail min-h-screen bg-[#106cb8] bg-gradient-to-r from-black/60 to-transparent p-6 text-white overflow-hidden">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search For Product"
        className="w-64 h-10 rounded-lg border border-whitesmoke shadow-lg p-2 outline-none focus:shadow-blue-500 transition-shadow duration-300 ease-in-out"
      />

      {/* Product Details Section */}
      <h3 className="text-2xl mt-6 mb-4">Product Details</h3>
      <hr className="border-white/30 mb-6" />

      {/* Product Image */}
      <img src="" alt="Product image" className="w-48 h-48 object-cover mb-6" />
      <hr className="border-white/30 mb-6" />

      {/* Product Name */}
      <h4 className="text-lg mb-2">Product Name</h4>
      <hr className="border-white/30 mb-4" />
      <p className="pro mb-6"></p>

      {/* Available Quantity */}
      <h4 className="text-lg mb-2">Available Quantity</h4>
      <hr className="border-white/30 mb-4" />
      <p className="Available mb-6"></p>

      {/* Colour */}
      <h4 className="text-lg mb-2">Colour</h4>
      <hr className="border-white/30 mb-4" />
      <p className="color mb-6"></p>

      {/* Price */}
      <h4 className="text-lg mb-2">Price</h4>
      <hr className="border-white/30 mb-4" />
      <p className="price mb-6"></p>

      {/* Stock Up Date */}
      <h4 className="text-lg mb-2">Stock Up Date</h4>
      <hr className="border-white/30 mb-4" />
      <p className="date mb-6"></p>
    </div>
  );
};

export default Detail;
