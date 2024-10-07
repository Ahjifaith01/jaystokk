import React from 'react';

const Add: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#106cb8] bg-gradient-to-r from-black/60 to-transparent flex items-center justify-center">
      <form className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-center text-lg font-semibold mb-4">Add New Product</h3>

        <div className="contain space-y-4">
          {/* File Input */}
          <input type="file" accept="image/*, video/*" className="border border-whitesmoke rounded-lg p-2 w-full" />

          {/* Product Name */}
          <label className="block">
            <span className="text-gray-700">Product Name</span>
            <input
              type="text"
              placeholder="E.g"
              className="mt-1 block w-full h-10 border border-whitesmoke rounded-lg p-2 shadow-md focus:outline-none focus:shadow-lg transition"
            />
          </label>

          {/* Product ID */}
          <label className="block">
            <span className="text-gray-700">Product ID</span>
            <input
              type="text"
              placeholder="E.g"
              className="mt-1 block w-full h-10 border border-whitesmoke rounded-lg p-2 shadow-md focus:outline-none focus:shadow-lg transition"
            />
          </label>

          {/* Buy Rate */}
          <label className="block">
            <span className="text-gray-700">Buy Rate</span>
            <input
              type="text"
              placeholder="E.g 4.5"
              className="mt-1 block w-full h-10 border border-whitesmoke rounded-lg p-2 shadow-md focus:outline-none focus:shadow-lg transition"
            />
          </label>

          {/* Colour */}
          <label className="block">
            <span className="text-gray-700">Colour</span>
            <input
              type="text"
              placeholder="E.g"
              className="mt-1 block w-full h-10 border border-whitesmoke rounded-lg p-2 shadow-md focus:outline-none focus:shadow-lg transition"
            />
          </label>

          {/* Date */}
          <label className="block">
            <span className="text-gray-700">Date</span>
            <input
              type="date"
              className="mt-1 block w-full h-10 border border-whitesmoke rounded-lg p-2 shadow-md focus:outline-none focus:shadow-lg transition"
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-32 h-12 mt-4 bg-[#0D47A1] text-white rounded-2xl shadow-lg transition hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
