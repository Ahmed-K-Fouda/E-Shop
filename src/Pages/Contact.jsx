import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import contactImg from "../assets/Images/main-Images/contact.jpg";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const [result, setResult] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setResult("Sending....");

    emailjs
      .sendForm(
        "service_grwxavq",
        "template_0gsu6wn",
        event.target,
        "WWQ5sAJfyl71dvBhA"
      )
      .then(
        (response) => {
          setResult("Form Submitted Successfully");
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 3000,
          });
          event.target.reset();
        },
        (error) => {
          console.log("Error", error);
          setResult("Failed to send message");
          toast.error("Failed to send message.");
        }
      );
  };

  return (
    <div className="container mx-auto px-6 py-16 bg-gray-100">
      <div
        className="relative bg-cover bg-center h-[50vh] rounded-lg overflow-hidden mb-16"
        style={{
          backgroundImage: `url(${contactImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1
            className="text-5xl text-white font-bold text-center"
            data-aos="fade-in"
          >
            Get in Touch
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Send Us a Message
          </h2>
          <form onSubmit={onSubmit} className="border p-5 border-red-500">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                rows="5"
                name="message"
                required
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
              Send Message
            </button>
          </form>
        </div>

        <div data-aos="fade-left">
          <h2 className="text-3xl mt-3 font-bold text-gray-800 mb-1">
            Contact Information
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Reach out to us through any of the following methods. We're here to
            help you.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <i className="fas fa-phone-alt text-red-600 text-2xl mr-4"></i>
              <p className="text-lg text-gray-700">+1 234 567 890</p>
            </div>
            <div className="flex items-center">
              <i className="fas fa-envelope text-red-600 text-2xl mr-4"></i>
              <p className="text-lg text-gray-700">ahmedfoudahany@gmail.com</p>
            </div>
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-red-600 text-2xl mr-4"></i>
              <p className="text-lg text-gray-700">
                4100 Cairo City, Elamana Street
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=cairo%20City,%20CO%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="Map"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
