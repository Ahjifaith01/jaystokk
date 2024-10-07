import React from 'react';

const Register: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#106cb8] bg-gradient-to-r from-black/60 to-transparent flex items-center justify-center">
      <div className="absolute text-left p-6">
        <h2 className="text-lightgray mb-4">Let's Set Up Your Organization</h2>
        
        <form className="main space-y-6">
          <div>
            <h3 className="text-white">Organization Name</h3>
            <input
              type="text"
              placeholder="Name"
              className="mt-1 block w-64 h-10 border border-whitesmoke rounded-lg p-2 shadow-md focus:outline-none focus:shadow-lg transition"
            />
          </div>

          <div>
            <h3 className="text-white">Location</h3>
            <input
              type="text"
              placeholder="Country"
              className="mt-1 block w-64 h-10 border border-whitesmoke rounded-lg p-2 shadow-md focus:outline-none focus:shadow-lg transition"
            />
          </div>

          <div>
            <h3 className="text-white">Currency</h3>
            <input
              type="text"
              placeholder="Currency"
              className="mt-1 block w-64 h-10 border border-whitesmoke rounded-lg p-2 shadow-md focus:outline-none focus:shadow-lg transition"
            />
          </div>

          <div>
            <h3 className="text-white">Time Zone</h3>
            <input
              type="text"
              placeholder="Time"
              className="mt-1 block w-64 h-10 border border-whitesmoke rounded-lg p-2 shadow-md focus:outline-none focus:shadow-lg transition"
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
