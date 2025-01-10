"use client"
import { useEffect, useState } from 'react';
import './Navbar.css'

const Navbar = () => {
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    // Set the active path based on the current URL
    setActivePath(window.location.pathname);
  }, []);

  const isActive = (path) => activePath === path;

  return (
    <div className="navbar bg-transparent text-black">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              href="/item1"
              className={`nav-link ${isActive('/item1') ? 'active' : ''}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/item3"
              className={`nav-link ${isActive('/item3') ? 'active' : ''}`}
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="/item3"
              className={`nav-link ${isActive('/item3') ? 'active' : ''}`}
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="/item3"
              className={`nav-link ${isActive('/item3') ? 'active' : ''}`}
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
