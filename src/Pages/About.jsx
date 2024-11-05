import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImg from "../assets/Images/hero-page.png";
import pone from "../assets/Images/main-Images/me.png";
import ptwo from "../assets/Images/main-Images/me2.png";
import pthree from "../assets/Images/main-Images/user1.jpg";
import pfour from "../assets/Images/main-Images/user2.jpg";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: "ease-in-out", 
      once: true, 
    });
  }, []);

  return (
    <div className="container mx-auto px-6 py-16">
      <div
        className="relative bg-cover bg-center h-[60vh] rounded-lg overflow-hidden mb-16"
        style={{
          backgroundImage: `url(${heroImg})`,
          objectFit: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1
            className="text-5xl text-white font-bold text-center"
            data-aos="fade-in"
          >
            Elevating Your Shopping Experience
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 text-center">
        <div data-aos="fade-right" className="ml-2 bg-gray-100 p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-justify mb-4">
            To revolutionize the e-commerce landscape by offering unparalleled
            service and value. We aim to provide our customers with the best
            products at unbeatable prices, with a seamless and enjoyable
            shopping experience.
          </p>
        </div>
        <div data-aos="fade-left" className="mr-2 bg-gray-100 p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4  mt-4">
            Our Vision
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-justify mb-4">
            Our vision is to be the global leader in e-commerce, setting new
            standards for customer satisfaction and innovation. We aspire to
            create a shopping ecosystem that is not just convenient, but
            transformative for our users.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 py-12 px-8 rounded-lg shadow-lg mb-16">
        <h2
          className="text-3xl font-bold text-center text-gray-800 mb-8"
          data-aos="fade-up"
        >
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center" data-aos="flip-left">
            <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-heart text-3xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Customer First
            </h3>
            <p className="text-gray-600">
              Our customers are at the heart of everything we do. We are
              committed to providing them with the best service and experience.
            </p>
          </div>
          <div className="text-center" data-aos="flip-up">
            <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-lightbulb text-3xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Innovation
            </h3>
            <p className="text-gray-600">
              We believe in pushing the boundaries and constantly innovating to
              bring the best products and services to our customers.
            </p>
          </div>
          <div className="text-center" data-aos="flip-right">
            <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-rocket text-3xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Excellence
            </h3>
            <p className="text-gray-600">
              We strive for excellence in every aspect of our business, from
              product selection to customer service.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          data-aos="fade-up"
        >
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center" data-aos="fade-up">
            <img
              src={pone}
              alt="Team Member"
              className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-2xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-500">CEO</p>
          </div>
          <div className="text-center" data-aos="fade-up">
            <img
              src={ptwo}
              alt="Team Member"
              className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-2xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-500">CTO</p>
          </div>
          <div className="text-center" data-aos="fade-up">
            <img
              src={pthree}
              alt="Team Member"
              className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-2xl font-semibold text-gray-800">
              Alice Brown
            </h3>
            <p className="text-gray-500">CMO</p>
          </div>
          <div className="text-center" data-aos="fade-up">
            <img
              src={pfour}
              alt="Team Member"
              className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-2xl font-semibold text-gray-800">
              Bob Johnson
            </h3>
            <p className="text-gray-500">COO</p>
          </div>
        </div>
      </div>

      <div className="relative bg-red-600 py-12 px-8 rounded-lg text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to Join Our Journey?</h2>
        <p className="text-lg mb-8">
          Be a part of something great. Subscribe to our newsletter and stay
          updated on the latest trends and offers.
        </p>
        <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}

export default About;
