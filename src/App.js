import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { Fotter } from "./Components/Fotter";
import { Collections } from "./Pages/Collections";
import { Product } from "./Pages/Product";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <Fotter />
      </Router>
    </div>
  );
}

export default App;
