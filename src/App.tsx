// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Import the new Home component
import Add from './components/Add'; // Import your Add Product page component
import Register from './components/Register'; // Import your Register page component
import Setting from './components/Setting'; // Import your Settings page component
import About from './components/About'; // Import your About page component
import Detail from './components/Detail'; // Import your Product Detail page component

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home component as the main route */}
          <Route path="/add-product" element={<Add />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product-detail" element={<Detail />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
