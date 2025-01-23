// Add.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Define the type for the Product
interface Product {
  image: string | null;
  name: string;
  id: string;
  buyRate: string;
  color: string;
  date: string;
}

const Add: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    image: null,
    name: "",
    id: "",
    buyRate: "",
    color: "",
    date: "",
  });

  const [productList, setProductList] = useState<Product[]>([]);
  const navigate = useNavigate();

  // Handle input field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  // Handle file input (for image or video)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setProduct({
        ...product,
        image: URL.createObjectURL(file),
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedProductList = [...productList, product]; // Add the new product to the list
    setProductList(updatedProductList); // Update the product list state
    setProduct({
      image: null,
      name: "",
      id: "",
      buyRate: "",
      color: "",
      date: "",
    }); // Reset the form after submission
    navigate("/detail", { state: { productList: updatedProductList } }); // Pass productList to Detail page
  };

  return (
    <div className="min-h-screen bg-[#106cb8] bg-gradient-to-r from-black/60 to-transparent flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <h3 className="text-center text-lg font-semibold mb-4">
          Add New Product
        </h3>
        <div className="contain space-y-4">
          <input
            type="file"
            accept="image/*, video/*"
            className="border border-whitesmoke rounded-lg p-2 w-full"
            onChange={handleFileChange}
          />
          <label className="block">
            <span className="text-gray-700">Product Name</span>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="E.g"
              className="mt-1 block w-full h-10 border border-whitesmoke rounded-lg p-2 shadow-md"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Product ID</span>
            <input
              type="text"
              name="id"
              value={product.id}
              onChange={handleChange}
              placeholder="E.g"
              className="mt-1 block w-full h-10 border border-whitesmoke rounded-lg p-2 shadow-md"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Buy Rate</span>
            <input
              type="text"
              name="buyRate"
              value={product.buyRate}
              onChange={handleChange}
              placeholder="E.g 4.5"
              className="mt-1 block w-full h-10 border border-whitesmoke rounded-lg p-2 shadow-md"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Colour</span>
            <input
              type="text"
              name="color"
              value={product.color}
              onChange={handleChange}
              placeholder="E.g"
              className="mt-1 block w-full h-10 border border-whitesmoke rounded-lg p-2 shadow-md"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Date</span>
            <input
              type="date"
              name="date"
              value={product.date}
              onChange={handleChange}
              className="mt-1 block w-full h-10 border border-whitesmoke rounded-lg p-2 shadow-md"
            />
          </label>
          <button
            type="submit"
            className="w-32 h-12 mt-4 bg-[#0D47A1] text-white rounded-2xl shadow-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
