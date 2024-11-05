import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Categories } from "./../assets/CategData";
import HeroImgae from "../assets/Images/Hero-page.png";
import InformationSection from "../Components/InformationSection";
import CategorySection from "../Components/CategorySection";
import { setProducts } from "../Redux/productSlice";
import { products } from "../assets/product";
import ProductCard from "../Components/ProductCard";
import Shop from "./Shop";

function Home() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(setProducts(products));
  });

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  });
  return (
    <div>
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto py-4 flex flex-col space-x-2 md:flex-row">
          <div data-aos="fade-down" className="w-full md:w-3/12">
            <div className="bg-red-600 uppercase text-white text-xs font-bold px-2 py-2.5">
              Shop By Categories
            </div>
            <ul className="space-y-4 bg-gray-100 p-3 border">
              {Categories.map((category, index) => (
                <li
                  className="flex items-center text-sm font-medium"
                  key={index}
                >
                  <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-9/12 md:mt-0 h-96 relative" data-aos='fade-up'>
            <img src={HeroImgae} alt="Hero" className="h-full w-full" />
            <div className="absolute top-16 left-8">
              <h2 className="text-3xl font-bold">Welcome To E-Shop</h2>
              <p className="text-xl mt-2.5 font-bold text-gray-800">
                Thousand+ Products
              </p>
              <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <InformationSection />
        <CategorySection />

        <div className="container mx-auto py-12" data-aos='fade-right'>
          <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {product.products.slice(0, 5).map((prod) => (
              <ProductCard product={prod} key={prod.id} />
            ))}
          </div>
        </div>
      </div>
      <Shop />
    </div>
  );
}

export default Home;
