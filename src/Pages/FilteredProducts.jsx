import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import noProduct from "../assets/Images/not_found.png";
function FilteredProducts() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  });

  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );

  const allProducts = useSelector((state) => state.products);
  const isFiltired = filteredProducts.length === allProducts.length;

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24" data-aos="fade-up">
      {filteredProducts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">
            {isFiltired ? "Shop" : "Your Search Products"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {filteredProducts.map((prod) => (
              <ProductCard product={prod} key={prod.id} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center">
          <img src={noProduct} alt="No Product Found" />
        </div>
      )}
    </div>
  );
}

export default FilteredProducts;
