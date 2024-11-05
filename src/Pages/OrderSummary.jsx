import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function OrderSummary({ order }) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  });

  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-semibold mb-4" data-aos="fade-up">
        Thank you for your order
      </h2>
      <p data-aos="fade-down">
        You Order has been placed successfully you will recive and email
        confiramtion shortly
      </p>
      <div
        className="mt-6 p-4 border rounded-lg bg-gray-100"
        data-aos="fade-right"
      >
        <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
        <p>Order Number: {order?.orderNumber}</p>
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Shipping Information</h4>
          <p>{order?.shippingInfo.address}</p>
          <p>{order?.shippingInfo.city}</p>
          <p>{order?.shippingInfo.zip}</p>
        </div>
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Items Ordered</h4>
          {order?.products.map((product) => (
            <div key={product.id} className="flex justify-between mt-2">
              <p>
                {product?.name} x {product?.quantity}
              </p>
              <p>{product?.price * product?.quantity}</p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <span>Total Price:</span>
          <span className="font-semibold">${order?.totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <div data-aos="fade-left" className="mt-6">
        <button className="bg-green-500 text-white py-2 hover:bg-green-600">
          Order tracking
        </button>
        <button
          onClick={() => navigate("/")}
          className="ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
