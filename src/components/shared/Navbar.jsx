"use client"

import logo from "../../assets/Logo.png";
import logoName from "../../assets/Fresh Harvests.png";
import heart from "../../assets/Heart.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-white lg:px-[90px]">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-black lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-black rounded-box z-[1] mt-3 w-52 p-2  shadow">
              <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            </ul>
          </div>
         <div className="flex justify-center gap-2">
         <Image src={logo} style={{ width: '25%', height: 'auto' }}  alt="Logo" />
         <Image src={logoName} width={80} height={50} alt="Fresh Harvests Logo" />
         </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-7 pr-24 font-medium text-base text-gray-600 px-1">
          <li>
              <Link href="/">Home</Link>
            </li>
              <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
        <div className="hidden sm:flex justify-center gap-3 font-medium text-base text-gray-600 pr-5">
  <div className="flex gap-2">
    <Image src={heart} width={30} height={30} style={{ fill: "gray" }} alt="icon heart"/>
    <h1>Favorites</h1>
  </div>
  <div className="flex gap-2">
    <div className="indicator">
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
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <span className="badge badge-sm indicator-item">8</span>
    </div>
    <h1>Cart</h1>
  </div>
</div>

          <a className="btn btn-outline md:px-7 px-5 ">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;