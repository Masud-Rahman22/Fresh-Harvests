"use client";

import { useState, useEffect } from "react";
import logo from "../../assets/Logo (1).png";
import heart from "../../assets/Heart.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".relative")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <div className="bg-white lg:px-[90px] shadow-md">
      <div className="navbar">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-black lg:hidden"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center gap-2">
            <Image
              src={logo}
              alt="logo picture"
              loading="lazy"
              className="h-[40px] mx-auto mt-2 md:h-[50px] lg:ml-2 lg:h-[50px] w-[100px] md:w-[130px] lg:w-[140px]"
            />
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-7 pr-24 font-medium text-base text-gray-600 px-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <div className="hidden sm:flex justify-center gap-3 font-medium text-base text-gray-600 pr-5">
            {/* Favorites */}
            <div className="flex gap-2">
              <Image
                src={heart}
                width={30}
                height={30}
                style={{ fill: "gray" }}
                alt="icon heart"
              />
              <h1>Favorites</h1>
            </div>
            {/* Cart */}
            <div className="flex gap-2">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#749B3F]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item bg-[#EE4536] text-white">
                  8
                </span>
              </div>
              <h1>Cart</h1>
            </div>
          </div>

          {/* Login Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="btn btn-outline md:px-7 px-5"
              aria-label="Login Dropdown" 
            >
              Login
            </button>

        
            {isDropdownOpen && (
  <>
    {/* Dark Blur Background */}
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10 "
      onClick={() => setDropdownOpen(false)}
    ></div>

    {/* Dropdown Content */}
    <div
     className={`fixed 
      top-16 
      right-4 
      w-[90%] 
      lg:absolute 
      lg:right-[600px] 
      lg:top-[25%] 
      lg:translate-x-[50%] 
      lg:translate-y-[20%] 
      lg:w-[500px] 
      lg:h-[600px] 
      rounded-md 
      bg-white 
      shadow-lg 
      ring-1 
      ring-black 
      ring-opacity-5 
      z-20 
      transition 
      duration-200 
      ease-in-out 
      
      ${isDropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        onClick={() => setDropdownOpen(false)}
        aria-label="Close"
      >
        ✖
      </button>

      {/* Login Form */}
      <div className="p-6 lg:p-14 lg:max-h-[100vh] max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl lg:text-3xl text-center font-semibold text-gray-700">
          Login
        </h2>
        <form className="mt-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="flex  lg:flex-row lg:items-center justify-between mt-4">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 border rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                required
              />
              <label
                htmlFor="remember"
                className="ml-2 lg:text-sm text-xs text-gray-700"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="lg:text-sm text-xs text-black underline hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="btn  w-full hover:bg-[#c0561d] mt-6 bg-[#FF6A1A] text-white border-0"
          >
            Login
          </button>

          <div className="relative flex items-center justify-center mt-8">
            <hr className="w-full h-px bg-gray-200" />
            <span className="absolute px-4 bg-white text-gray-700">
              or
            </span>
          </div>
        </form>

        <div className="flex flex-col lg:flex-row items-center mt-6 space-y-4 lg:space-y-0 lg:space-x-4">
          <button
            type="button"
            className="w-full gap-2 font-bold border text-[#212337] bg-white hover:bg-[#3b5998]/90 rounded-lg px-5 py-2.5 flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
            </svg>
            Facebook
          </button>
          <button
            type="button"
            className="w-full gap-2 font-bold border text-[#212337] bg-white pr-3 hover:bg-[#4285F4]/90 rounded-lg px-5 py-2.5 flex items-center justify-center"
          >
            <svg viewBox="-3 0 262 262" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier"  ></g><g id="SVGRepo_iconCarrier"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></g></svg>
            Google
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  </>
)}


          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;