import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaHeadset,
  FaLock,
  FaMoneyBillWave,
  FaShippingFast,
  FaTag,
} from "react-icons/fa";

function InformationSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  });

  const infoItems = [
    {
      id: 1,
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },

    {
      id: 2,
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: "Support 24/7",
      description: "We are here to assist you anytime",
    },

    {
      id: 3,
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      title: "100% Money Back",
      description: "Full refund if you are not statified",
    },

    {
      id: 4,
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "Payment Secure",
      description: "Your payment information is safe with us",
    },

    {
      id: 5,
      icon: <FaTag className="text-3xl text-red-600" />,
      title: "Discount",
      description: "Enjoy the best prices on our products",
    },
  ];

  return (
    <div className="bg-white pb-8 pt-12">
      <div data-aos='fade-up' className="container mx-auto grid text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center p-4 border rounded-lg shodow-md  transform duration-300 hover:scale-105 hover:bg-slate-100 transition-all cursor-pointer"
          >
            {item.icon}
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InformationSection;
