import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useSelector } from "react-redux";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Checkout({ setOrder }) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  });

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMehod, setPaymentMethod] = useState("cod"); // cash on delivery

  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });

  function handlePlaceOrder() {
    const newOrder = {
      products: cart.products,
      orderNumber: Math.floor(Math.random() * 50) + 1,
      shippingInfo: shippingInfo,
      totalPrice: cart.totalPrice,
    };
    setOrder(newOrder);
    navigate("/order-summary");
  }
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">
        CHECKOUT
      </h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3" data-aos="fade-left">
          <div className="border p-2 mb-6">
            <div
              className="cursor-pointer flex items-center justify-between"
              onClick={() => setBillingToggle((prevBill) => !prevBill)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Billing Information
              </h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label htmlFor="" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="w-full px-3 py-2 border"
                />
              </div>

              <div>
                <label htmlFor="" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border"
                  name="email"
                  placeholder="Enter Your Email"
                />
              </div>

              <div>
                <label htmlFor="" className="block text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  className="w-full px-3 py-2 border"
                />
              </div>
            </div>
          </div>

          {/* shipping */}
          <div className="border p-2 mb-6">
            <div
              className="cursor-pointer flex items-center justify-between"
              onClick={() => setShippingToggle((prevToggle) => !prevToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Shipping Information
              </h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label htmlFor="" className="block text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Your Address"
                  className="w-full px-3 py-2 border"
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label htmlFor="" className="block text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border"
                  name="city"
                  placeholder="Enter Your City"
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, city: e.target.value })
                  }
                />
              </div>

              <div>
                <label htmlFor="" className="block text-gray-700">
                  Zip Code
                </label>
                <input
                  type="text"
                  name="zipcode"
                  placeholder="Enter Zip Code"
                  className="w-full px-3 py-2 border"
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, zip: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Payment */}

          <div className="border p-2 mb-6">
            <div
              className="cursor-pointer flex items-center justify-between"
              onClick={() => setPaymentToggle((prevToggle) => !prevToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMehod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label htmlFor="" className="block text-gray-700 ml-2">
                  Cash On Delivery
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMehod === "dc"} // depit card
                  onChange={() => setPaymentMethod("dc")}
                />
                <label htmlFor="" className="block text-gray-700 ml-2">
                  Depit Card
                </label>
              </div>
              {paymentMehod === "dc" && (
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Debit Card Information
                  </h3>
                  <div className="mb-4">
                    <label
                      htmlFor=""
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="Card Number"
                      required
                      className="border p-2 w-full rounded"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-semibold mb-2"
                      htmlFor=""
                    >
                      Card Holder
                    </label>
                    <input
                      type="text"
                      placeholder="Card Holder Name"
                      required
                      className="border p-2 w-full rounded"
                    />
                  </div>

                  <div className="flex flex-col justify-between mb-4 sm:flex-row">
                    <div className="w-1/2 mr-2">
                      <label
                        className="block text-gray-700 font-semibold mb-2"
                        htmlFor=""
                      >
                        Expired Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        required
                        className="border p-2 w-full rounded"
                      />
                    </div>

                    <div className="w-1/2 ml-2">
                      <label
                        className="block text-gray-700 font-semibold mb-2"
                        htmlFor=""
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="CVV"
                        required
                        className="border p-2 w-full rounded"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className="md:w-2/3 bg-white p-6 rounded-lg shadow-md border"
          data-aos="fade-right"
        >
          <h3 className="text-lg font-semibold mb-4" data-aos="fade-up">
            Order Summary
          </h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="ml-4">
                    <h3 className="text-md font-semibold">{product.name}</h3>
                    <p className="text-gray-600">
                      ${product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-800">
                  ${product.price * product.quantity}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>Total Price: </span>
              <span className="font-semibold">
                ${cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
          <button
            className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
