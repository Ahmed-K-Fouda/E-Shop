import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../Redux/productSlice";
import { FaSearch, FaShoppingCart, FaSignOutAlt, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { logout } from "../Redux/userSlice";
import { clearCart } from "../Redux/cartSlice";

function Navbar() {
  const products = useSelector((state) => state.cart.products);
  const productsLength = products.length;
  const isAuthenticated = useSelector((state) => state.user.isAuth);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  function handleSearch(e) {
    e.preventDefault();
    if (search.trim().length === 0) {
      toast.error("Please enter something to search", {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      dispatch(setSearchTerm(search));
      navigate("/filtered-products");
    }
  }

  function handleLogout() {
    localStorage.removeItem("cartProducts");
    localStorage.removeItem("totalQuantity");
    localStorage.removeItem("totalPrice");

    dispatch(clearCart());

    dispatch(logout());
    toast.success("Successfully logged out", {
      position: "top-center",
      autoClose: 3000,
    });
    navigate("/");
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">E-SHOP</Link>
        </div>

        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Product"
              className="w-full border py-2 px-4"
            />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg" />
            {productsLength > 0 && (
              <span className="text-white absolute top-4 text-xs w-4 h-4 left-0 bg-red-600 rounded-full flex justify-center items-center">
                {productsLength}
              </span>
            )}
          </Link>

          <div className="hidden md:block">
            {!isAuthenticated ? (
              <>
                <span
                  onClick={() => navigate("/login")}
                  className="cursor-pointer"
                >
                  Login
                </span>{" "}
                |{" "}
                <span
                  onClick={() => navigate("/register")}
                  className="cursor-pointer"
                >
                  Register
                </span>
              </>
            ) : (
              <>
                <span>Welcome, {user.name}</span>
                <span onClick={handleLogout} className="cursor-pointer">
                  <FaSignOutAlt />
                </span>
              </>
            )}
          </div>

          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/shop" className="hover:underline">
          Shop
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
