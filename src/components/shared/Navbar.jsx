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

            {/* Dark Blur Background */}
            {isDropdownOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
                onClick={() => setDropdownOpen(false)} // Close dropdown when clicking the background
              ></div>
            )}

            {/* Dropdown Content */}
            {isDropdownOpen && (
             <div
             className={`absolute right-[600px] top-0 transform translate-x-[50%] translate-y-[25%] w-[500px] h-[600px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-20 ${
               isDropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
             }`}
           >
           
                <div className="p-14">
                  <h2 className="text-3xl text-center font-semibold text-gray-700">
                    Login
                  </h2>
                  <form className="mt-4">
                  <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="flex items-center justify-between">
                        <div className="flex items-start mt-4">
                          <div className="flex items-center h-5">
                            <input
                              id="remember"
                              aria-describedby="remember"
                              type="checkbox"
                              className="w-4 h-4 border border-[#FF6A1A]  rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                              required
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-[#4A4A52] ">
                              Remember me
                            </label>
                          </div>
                        </div>
                        <a href="#" className="text-sm text-[#4A4A52] font-medium text-primary-600 hover:underline dark:text-primary-500">
                          Forgot password?
                        </a>
                      </div>

                    <div className="flex items-center justify-between mt-4">
                      <button
                        type="submit"
                        className="w-full btn mt-4 btn-primary text-white"
                      >
                        Login
                      </button>
                    </div>
                    <div className="inline-flex items-center justify-center w-full">
                      <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                      <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2  ">or</span>
                  </div>
                  </form>
                  <div className="lg:flex lg:justify-between lg:items-center">
                    <div>
                    <button type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                      <svg className="w-16 h-5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                      <path  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                      </svg>
                       Facebook
                      </button>
                    </div>
                    <div>
                    <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                      <svg className="w-16 h-5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                      <path  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
                      </svg>
                       Google
                      </button>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-center text-gray-600">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-green-500">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;