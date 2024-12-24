import React from "react";
import logo from "../../Assets/image/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer class="bg-secondary py-2 mt-14">
      <div class="container mx-auto px-2 p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} class="h-8 md:h-16" alt="Flowbite Logo" />
          </Link>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-light sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/" class="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <a href="#about" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#projects" class="hover:underline me-4 md:me-6">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" class="hover:underline me-4 md:me-6">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="container mx-auto px-2 ">
          <p className="text-center text-light">
            Copyright &copy; {year} |{" "}
            <a
              className="text-primary font-bold"
              href="https://www.linkedin.com/in/sabbir10s/"
              target="_blank"
            >
              Graphic Art
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
