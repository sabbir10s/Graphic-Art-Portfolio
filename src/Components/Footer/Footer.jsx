import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="bg-secondary py-8 mt-14">
      <div className="container mx-auto px-2 ">
        <p className="text-center text-light">
          Copyright &copy; {year} |{" "}
          <a
            className="text-primary font-bold"
            href="https://www.linkedin.com/in/sabbir10s/"
            target="_blank"
          >
            Company
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
