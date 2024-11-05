import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import emptyCart from "../assets/Images/emptyCart.png";
import Modal from "../Components/Modal";
import ChangeAddress from "../Components/ChangeAddress";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../Redux/cartSlice";

function Cart() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  });

  const productsInCart = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [address, setAddress] = useState("Shibin el-Qanater, Qalyubia");
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleRemoveFromCart(productId) {
    dispatch(removeFromCart(productId));
    toast.success("product removed successfully", {
      position: "top-center",
      autClose: 3000,
      className: "bg-black text-white",
    });
  }

  function handleIncreaseQuantity(productId) {
    dispatch(increaseQuantity(productId));
  }
  function handleDecreaseQuantity(productId) {
    dispatch(decreaseQuantity(productId));
  }

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {productsInCart.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3" data-aos="fade-right">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p>PRODUCTS</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>

              {productsInCart.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-3 border-b"
                >
                  <div className="md:flex items-center justify-between space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div className="flex-1 ml-4">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                    </div>
                  </div>

                  <div className="flex space-x-12 items-center">
                    <p>${product.price}</p>
                    <div className="flex items-center justify-center border">
                      <button
                        className="text-xl font-bold px-1.5 border-r"
                        onClick={() => handleDecreaseQuantity(product.id)}
                      >
                        -
                      </button>
                      <p className="text-xl px-2">{product.quantity}</p>
                      <button
                        className="text-xl px-1 border-l"
                        onClick={() => handleIncreaseQuantity(product.id)}
                      >
                        +
                      </button>
                    </div>

                    <p>${(product.quantity * product.price).toFixed(2)}</p>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div
              data-aos="fade-down"
              className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border"
            >
              <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items:</span>
                <span>{totalQty}</span>
              </div>

              <div className="mb-4 border-b pb-2">
                <p>Shipping</p>
                <div className="flex flex-col justify-between items-center">
                  <p className="mt-1 text-sm">Shipping to:</p>
                  <span className="text-xs font-bold">{address}</span>
                </div>
                <button
                  className="text-blue-500 hover:underline mt-1 ml-2"
                  onClick={() => setIsModalOpen(true)}
                >
                  Change Address
                </button>
              </div>

              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                <span>${Number(totalPrice).toFixed(2)}</span>
              </div>

              <button
                className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
                onClick={() => navigate("/checkout")}
              >
                Process to checkout
              </button>
            </div>
          </div>

          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setIsModalOpen={setIsModalOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={emptyCart} alt="emptyCart" className="h-96" />
        </div>
      )}
    </div>
  );
}

export default Cart;
