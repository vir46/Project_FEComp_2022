import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

function Navigasi() {
  return (
    <div class="navcont">
      <nav class="absolute navMenu">
        <NavLink
          className="text-center text-orange-100 no-underline uppercase font-medium inline-block w-20"
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className="text-center text-orange-100 no-underline uppercase font-medium inline-block w-20"
          to="/welcome"
        >
          How To?
        </NavLink>
        <NavLink
          className="text-center text-orange-100 no-underline uppercase font-medium inline-block w-20"
          to="/welcome"
        >
          Login
        </NavLink>
        <NavLink
          className="text-center text-orange-100 no-underline uppercase font-medium inline-block w-20"
          to="/welcome"
        >
          FAQ
        </NavLink>
        <NavLink
          className="text-center text-orange-100 no-underline uppercase font-medium inline-block w-20"
          to="/about"
        >
          About
        </NavLink>
        {/* <a
          class="text-center text-orange-100 no-underline uppercase font-medium inline-block w-20"
          href="https://github.com"
        >
          Home
        </a>
        <a
          class="text-center text-orange-100 no-underline uppercase font-medium inline-block w-20"
          href="https://github.com"
        >
          How To?
        </a>
        <a
          class="text-center text-orange-100 no-underline uppercase font-medium inline-block w-20"
          href="https://github.com"
        >
          Login
        </a>
        <a
          class="text-center text-orange-100 no-underline uppercase font-medium inline-block w-20"
          href="https://github.com"
        >
          FAQ
        </a>
    */}
        {/* <a
          class="text-center text-orange-100 no-underline uppercase font-medium inline-block w-20"
          href="https://github.com"
        >
          About
        </a> */}
      </nav>
    </div>
  );
}
export default Navigasi;
