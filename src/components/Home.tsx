// src/components/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaRegCreditCard } from 'react-icons/fa';
import { RiChatHistoryFill } from 'react-icons/ri';
import { GrTransaction } from 'react-icons/gr';
import { GiCctvCamera } from 'react-icons/gi';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { FcSalesPerformance } from 'react-icons/fc';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { TiShoppingCart } from 'react-icons/ti';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
    {/* Top Section */}
    <div className="border border-gray-300 bg-[#106cb8] bg-gradient-to-r from-black/60 to-transparent rounded-b-[60px] shadow-md h-[250px] text-white mb-5">
      <h2 className="text-center mt-5">Sales Activity</h2>
      <div className="flex justify-around mt-10">
        <div>
          <h4>Product Sold</h4>
          <p>Name</p>
          <h4>Quantity Sold</h4>
          <p>10000</p>
        </div>
        <div>
          <h4>Today's Sales</h4>
          <p>200</p>
          <h4>Total Sales</h4>
          <p>4000</p>
        </div>
      </div>
    </div>

    {/* Middle Section */}
    <div className="flex flex-col items-center flex-grow">
      <div className="bg-[#106cb8] bg-gradient-to-r from-black/60 to-transparent rounded-lg shadow-lg p-4 mb-5">
        <Link to="/add-product" className="text-white text-lg">Add New Product</Link>
      </div>

      {/* Transaction and Payment Icons */}
      <div className="flex justify-around mb-5 w-full">
        <Link to="/transaction" className="bg-whitesmoke rounded-lg p-2 flex flex-col items-center">
          <GrTransaction className="text-black" size={30} />
          <span>Transaction</span>
        </Link>
        <Link to="/payment" className="bg-whitesmoke rounded-lg p-2 flex flex-col items-center">
          <FaRegCreditCard className="text-black" size={30} />
          <span>Payment</span>
        </Link>
        <div className="bg-whitesmoke rounded-lg p-2 flex flex-col items-center">
          <FcSalesPerformance className="text-black" size={30} />
          <span>Top Sales</span>
        </div>
      </div>

      {/* Product Details and Other Options */}
      <div className="flex justify-around mb-5 w-full">
        <Link to="/product-detail" className="bg-whitesmoke rounded-lg p-2 flex flex-col items-center">
          <MdProductionQuantityLimits className="text-black" size={30} />
          <span>Product Detail</span>
        </Link>
        <div className="bg-whitesmoke rounded-lg p-2 flex flex-col items-center">
          <FaShoppingCart className="text-black" size={30} />
          <span>All Stock</span>
        </div>
        <div className="bg-whitesmoke rounded-lg p-2 flex flex-col items-center">
          <FaMoneyBillTrendUp className="text-black" size={30} />
          <span>Financial Details</span>
        </div>
      </div>

      {/* More Options */}
      <div className="flex justify-around mb-5 w-full">
        <div className="bg-whitesmoke rounded-lg p-2 flex flex-col items-center">
          <GiCctvCamera className="text-black" size={30} />
          <span>Connect Camera</span>
        </div>
        <div className="bg-whitesmoke rounded-lg p-2 flex flex-col items-center">
          <TiShoppingCart className="text-black" size={30} />
          <span>Stockouts</span>
        </div>
        <div className="bg-whitesmoke rounded-lg p-2 flex flex-col items-center">
          <RiChatHistoryFill className="text-black" size={30} />
          <span>History</span>
        </div>
      </div>
    </div>

    {/* Bottom Navigation */}
    <ul className="flex justify-evenly bg-[#106cb8] bg-gradient-to-r from-black/60 to-transparent rounded-t-lg shadow-lg p-2 w-full">
      <li>
        <Link className="text-white" to="/">Home</Link>
      </li>
      <li>
        <Link className="text-white" to="/settings">Settings</Link>
      </li>
      <li>
        <Link className="text-white" to="/about">About</Link>
      </li>
    </ul>
  </div>
  );
};

export default Home;
