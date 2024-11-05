import { useEffect, useState } from "react";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../Redux/cartSlice";
import { toast } from "react-toastify";

function ProductDetails() {
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const [product, setProduct] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuth);

  useEffect(() => {
    const newProduct = products.find((product) => product.id === parseInt(id));
    setProduct(newProduct);
  }, [id, products]);

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

  if (!product) return <div>Loading ...</div>;
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg-px-24">
      <div className="flex flex-col md:flex-row gap-x-16">
        <div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center">
          <img src={product.image} alt={product.name} className="h-full" />
        </div>

        <div className="md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2">
          <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
          <p className="text-xl font-semibold text-gray-800 mb-4">
            ${product.price}
          </p>

          <div className="flex items-center mb-4 gap-x-2">
            <button
              onClick={(e) => handleAddToCart(e, product)}
              className="bg-red-600 text-white py-1.5 px-4 hover:bg-red-800"
            >
              Add To Cart
            </button>
          </div>

          <div className="flex flex-col gap-y-4 mt-4">
            <p className="flex items-center">
              <FaCarSide className="mr-1" />
              Delivery & Return
            </p>

            <p className="flex items-center">
              <FaQuestion className="mr-1" />
              Frequently Asked Questions
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Product Description</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
