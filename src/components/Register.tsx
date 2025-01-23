import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Register: React.FC = () => {
  const [formValues, setFormValues] = useState({
    organizationName: "",
    location: "",
    currency: "",
    timeZone: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const isFormValid = Object.values(formValues).every(
      (val) => val.trim() !== ""
    );

    if (isFormValid) {
      // Proceed with form submission logic
      console.log("Form Submitted:", formValues);

      // Navigate to Home.tsx after successful submission
      navigate("/home"); // Make sure /home route is configured in your router
    } else {
      // Alert the user if the form is invalid
      alert("Please fill all the form to register.");
    }
  };

  return (
    <div className="min-h-screen bg-[#106cb8] bg-gradient-to-r from-black/60 to-transparent flex items-center justify-center">
      <div className="absolute text-left p-6">
        <h2 className="text-lightgray mb-4">Let's Set Up Your Organization</h2>

        <form className="main space-y-6" onSubmit={handleSubmit}>
          <div>
            <h3 className="text-white">Organization Name</h3>
            <input
              type="text"
              name="organizationName"
              placeholder="Name"
              value={formValues.organizationName}
              onChange={handleInputChange}
              className="mt-1 block w-64 h-10 border border-whitesmoke rounded-lg p-2 shadow-md focus:outline-none focus:shadow-lg transition"
              required
            />
          </div>

          <div>
            <h3 className="text-white">Location</h3>
            <input
              type="text"
              name="location"
              placeholder="Country"
              value={formValues.location}
              onChange={handleInputChange}
              className="mt-1 block w-64 h-10 border border-whitesmoke rounded-lg p-2 shadow-md focus:outline-none focus:shadow-lg transition"
              required
            />
          </div>

          <div>
            <h3 className="text-white">Currency</h3>
            <input
              type="text"
              name="currency"
              placeholder="Currency"
              value={formValues.currency}
              onChange={handleInputChange}
              className="mt-1 block w-64 h-10 border border-whitesmoke rounded-lg p-2 shadow-md focus:outline-none focus:shadow-lg transition"
              required
            />
          </div>

          <div>
            <h3 className="text-white">Time Zone</h3>
            <input
              type="text"
              name="timeZone"
              placeholder="Time"
              value={formValues.timeZone}
              onChange={handleInputChange}
              className="mt-1 block w-64 h-10 border border-whitesmoke rounded-lg p-2 shadow-md focus:outline-none focus:shadow-lg transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-56 h-12 mt-4 bg-gradient-to-r from-black/60 to-[#106cb8] rounded-full border border-whitesmoke text-white shadow-lg transition hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
