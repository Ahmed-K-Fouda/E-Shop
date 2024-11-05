import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ManCategory from "../assets/Images/man.png";
import WomanCategory from "../assets/Images/woman.png";
import KidCategory from "../assets/Images/kid.png";
function CategorySection() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  });
  const categories = [
    {
      id: 1,
      title: "Men",
      imgUrl: ManCategory,
    },
    {
      id: 2,
      title: "Women",
      imgUrl: WomanCategory,
    },
    {
      id: 3,
      title: "Kids",
      imgUrl: KidCategory,
    },
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 ">
      {categories.map((category) => (
        <div data-aos='fade-up'
          key={category.id}
          className="relative transform duration-300 hover:scale-105 transition-all h-64 cursor-pointer"
        >
          <img
            src={category.imgUrl}
            alt="CategoryImg"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-20 left-12">
            <p className="text-xl font-bold">{category.title}</p>
            <p className="text-gray-600">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategorySection;
