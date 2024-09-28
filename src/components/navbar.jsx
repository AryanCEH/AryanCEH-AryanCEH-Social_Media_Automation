import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-white shadow fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Social Media Automation</h1>
        <div className="flex space-x-6">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 hover:text-blue-500 transition"
          >
            Home
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 hover:text-blue-500 transition"
          >
            Features
          </Link>
          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 hover:text-blue-500 transition"
          >
            Testimonials
          </Link>
          <Link
            to="pricing"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 hover:text-blue-500 transition"
          >
            Pricing
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
