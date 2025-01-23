// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import Add from "./components/Add";
import Setting from "./components/Setting";
import About from "./components/About";
import Detail from "./components/Detail";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/add-product" element={<Add />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<Detail />} />{" "}
          {/* Product Detail page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
