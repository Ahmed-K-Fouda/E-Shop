import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";

function Shop() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  });
  const product = useSelector((state) => state.products);
  return (
    <div data-aos='fade-right' className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {product.products.map((prod) => (
          <ProductCard product={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
