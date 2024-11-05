import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, register } from "../Redux/UserSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Register() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  });

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();
    const userData = {
      name: userName,
      email: email,
      password: password,
    };
    dispatch(register(userData));
    toast.success("Successfully registered", {
      position: "top-center",
      autoClose: 3000,
    });
    navigate("/login");
  }

  return (
    <div className="container mx-auto bg-gray-100 w-full my-10">
      <div className="flex justify-center items-center">
        <h2 className="text-2xl my-3" data-aos='fade-left'>
          Welcome To E-Shop Please Register From Here
          <span className="flex justify-center items-center">
            <FaArrowDown className="text-red-500" />
          </span>
        </h2>
      </div>
      <form onSubmit={handleRegister} data-aos='fade-right'>
        <div className="flex flex-col justify-center items-center">
          <label htmlFor="username" className="mb-2">
            User Name:
          </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            name="usename"
            id=""
            required
            className="w-72 p-1 rounded-lg outline-none bg-white border"
          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <label className="mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id=""
            className="w-72 p-1 rounded-lg outline-none bg-white border"
            required
          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <label className="mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="w-72 p-1 rounded-lg outline-none bg-white border mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id=""
            required
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-64 rounded-lg mb-5 bg-red-600 text-white py-2 hover:bg-red-800"
          >
            Register
          </button>
        </div>
        <div className="flex justify-center items-center">
          <Link to="/login" className="text-red-600 hover:underline mb-5">
            Already Have Account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
