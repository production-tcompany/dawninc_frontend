import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { Fotter } from "./Components/Fotter";
import { Collections } from "./Pages/Collections";
import { Product } from "./Pages/Product";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signin";
import { Account } from "./Pages/Account";
import { Orders } from "./Pages/Orders";
import { Wishlist } from "./Pages/Wishlist";
import { TrackOrder } from "./Pages/TrackOrder"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/trackorders" element={<TrackOrder />} />
            <Route path="/collections/:category" element={<Collections />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </div>
        <Fotter />
      </Router>
    </div>
  );
}

export default App;
