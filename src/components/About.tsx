import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#106cb8] bg-gradient-to-r from-black/60 to-transparent p-6 text-center flex flex-col items-center justify-center shadow-lg">
      {/* Logo */}
      {/* <img src={logo} alt="logo" className="h-[15%] w-[25%] mb-6" /> */}
      <img src="./logo.jpeg" alt="LOGOIT" className="h-32 w-32 mb-6 rounded-lg" />
      {/* Version Info */}
      <h3 className="text-white text-lg mb-6">Jaystokk version 1.0</h3>

      {/* Download App Section */}
      <div className="page py-6">
        <button className="w-36 h-20 bg-[#0D47A1] text-white rounded-2xl shadow-lg transition hover:bg-blue-700">
          <a href="https://play.google.com/store/apps?hl=en_US" className="text-white no-underline">
            Download App
          </a>
        </button>
        <br />
        <br />

        {/* Links */}
        <a href="Terms and Condition.html" className="text-white underline mb-4 block">Terms and Condition</a>
        <a href="Privacy Policy.html" className="text-white underline mb-4 block">Privacy Policy</a>
      </div>

      {/* Description Section */}
      <div className="act py-6 text-center">
        <h3 className="text-white text-lg mb-6">
          Jaystokk is a comprehensive inventory and sale management system that offers numerous benefits to businesses
        </h3>

        {/* Footer */}
        <footer>
          <p className="text-white text-lg">Jaystokk Inventory And Sales Management, Copyright &copy; 2024</p>
        </footer>
      </div>
    </div>
  );
};

export default About;
