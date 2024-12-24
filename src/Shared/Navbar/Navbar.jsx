import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Assets/image/logo.png";
import PrimaryButton from "../Button/PrimaryButton";
const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/#about",
  },
  {
    name: "Projects",
    link: "/#projects",
  },
  {
    name: "Contact",
    link: "/#contact",
  },
];
const Navbar = () => {
  const { pathname } = useLocation();

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Dropdown options
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={` flex items-center ${
        scrollY > 100 ? "shadow-lg bg-primary-50 scroll-down " : " bg-light"
      }`}
    >
      <div className="py-6 container mx-auto px-2">
        <span className="scroll-watcher"></span>
        <div className="flex justify-between">
          <div className="lg:hidden">
            <div className="flex">
              <Link to="/">
                <img
                  className="block lg:hidden h-20 w-auto"
                  src={logo}
                  alt="graphic art logo"
                />
              </Link>
            </div>
          </div>

          <div className="block lg:hidden pl-2 transition">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                className=" py-2 text-primary transition"
                onClick={toggleDropdown}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute right-0 z-10 mt-1 w-48 py-2 text-left text-sm text-gray-700 bg-primary rounded-lg shadow ">
                  <div className="py-1 flex flex-col gap-6 pl-4">
                    {pathname.includes("projectDetails") && (
                      <>
                        <div className="hover:text-secondary">
                          <Link onClick={handleOptionClick} to="/">
                            Home
                          </Link>
                        </div>
                      </>
                    )}
                    {pathname.split("/")[1] !== "projectDetails" && (
                      <>
                        {navItems.map((item, idx) => (
                          <a
                            className="text-secondary"
                            key={idx}
                            onClick={handleOptionClick}
                            href={item.link}
                          >
                            {item.name}
                          </a>
                        ))}
                      </>
                    )}

                    <div className="pb-2">
                      <a
                        rel="noreferrer"
                        className="border border-white text-white px-3 py-[6px] rounded"
                        href="#contact"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="hidden lg:flex items-center justify-between">
            <div>
              <Link to="/">
                <img
                  className="hidden lg:block h-10 w-auto"
                  src={logo}
                  alt="graphic art logo"
                />
              </Link>
            </div>
            <div className="text-white flex gap-10">
              {pathname.includes("projectDetails") && (
                <>
                  <div className="hover:text-secondary">
                    <Link to="/">Home</Link>
                  </div>
                </>
              )}

              {pathname.split("/")[1] !== "projectDetails" && (
                <>
                  {navItems.map((item, idx) => (
                    <a
                      className=" text-secondary hover:text-primary duration-300"
                      key={idx}
                      onClick={handleOptionClick}
                      href={item.link}
                    >
                      {item.name}
                    </a>
                  ))}
                </>
              )}
            </div>
            <div>
              <PrimaryButton title="Contact Us" type="fill" link="#contact" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
