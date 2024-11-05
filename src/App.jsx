import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import OrderSummary from "./Pages/OrderSummary";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import FilteredProducts from "./Pages/FilteredProducts";
import ProductDetails from "./Pages/ProductDetails";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  const [order, setOrder] = useState(null);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/checkout"
          element={<Checkout setOrder={setOrder} />}
        ></Route>
        <Route
          path="/order-summary"
          element={<OrderSummary order={order} />}
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/filtered-products" element={<FilteredProducts />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
