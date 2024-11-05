import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, register } from "../Redux/UserSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Login() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const registeredUser = useSelector((state) => state.user.registeredUser);
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    dispatch(login(userData));
    if (
      registeredUser &&
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      toast.success("Successfully logged in", {
        position: "top-center",
        autoClose: 3000,
      });
      navigate("/");
    } else {
      toast.error("Invalid email or password", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  }

  return (
    <div className="container mx-auto bg-gray-100 w-full my-10">
      <div className="flex justify-center items-center" data-aos="fade-left">
        <h2 className="text-2xl my-3">
          Please Login Here
          <span className="flex justify-center items-center">
            <FaArrowDown className="text-red-500" />
          </span>
        </h2>
      </div>
      <form onSubmit={handleLogin} data-aos="fade-right">
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
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            Login
          </button>
        </div>

        <div className="flex justify-center items-center">
          <Link to="/register" className="text-red-600 hover:underline mb-5">
            Register From Here
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
