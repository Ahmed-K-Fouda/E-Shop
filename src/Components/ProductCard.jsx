import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuth);
  const navigate = useNavigate();

  function handleAddToCart(e, product) {
    if (!isAuthenticated) {
      toast.warn("Please sign in to add products to your cart", {
        position: "top-center",
        autoClose: 3000,
      });
      navigate("/login");
    } else {
      e.stopPropagation();
      e.preventDefault();

      dispatch(addToCart(product));
      toast.success("Product Added Successfully", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  }

  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105">
        <img
          src={product?.image}
          alt={product?.name}
          className="w-full h-48 object-contain mb-4"
        />
        <h3 className="text-lg font-semibold">{product?.name}</h3>
        <p className="text-gray-500">${product?.price}</p>
        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
        </div>
        <div
          onClick={(e) => handleAddToCart(e, product)}
          className="absolute bottom-4 cursor-pointer right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all"
        >
          <span className="group-hover:hidden  ">+</span>
          <span className="hidden cursor-pointer group-hover:block">
            Add to cart
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
