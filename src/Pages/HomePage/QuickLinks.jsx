import React from "react";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  return (
    <section className="bg-[#15042E] py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-lg text-white">
        
        {/* Left Side */}
        <p className="font-medium mb-3 sm:mb-0 text-center sm:text-left">
          Quick links to the information:
        </p>

        {/* Right Side (Links) */}
        <nav className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-6 text-base sm:text-lg">
          <Link to="/about" className="hover:underline">
            About us
          </Link>
          <Link to="/use-cases" className="hover:underline">
            Case Studies
          </Link>
          <Link to="/#why-choose" className="hover:underline">
            Why choose us
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact us
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default QuickLinks;
