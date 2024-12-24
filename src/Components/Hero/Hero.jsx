import React from "react";
import PrimaryButton from "../../Shared/Button/PrimaryButton";
import { FaBehance, FaDribbble, FaFacebookF, FaTwitter } from "react-icons/fa6";
import banner from "../../Assets/image/banner.png";
const Hero = () => {
  const ButtonStyle =
    "text-[#111827] hover:text-white hover:bg-primary duration-300 text-xl border border-secondary-200 hover:border-primary p-2";
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      {/* Navigation */}

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center md:gap-0 mt-6 pb-10 md:pb-0">
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <p className="text-primary text-lg">Hello, this is</p>
          <h1 className="text-5xl font-bold text-secondary mt-2">
            Graphic Art
          </h1>
          <h2 className="text-2xl text-accent mt-4">
            Professional Graphic Design Provider
          </h2>
          <p className="text-secondary-300 mt-4 leading-relaxed">
            I’m a top online marketer and branding expert. I started my career
            by launching the popular metaverse design. In just a few short
            years, I built the brand to millions of social media followers and
            website visitors.
          </p>
          <div className="mt-6 flex items-center justify-start space-x-4">
            {/* <Button title=" Hire me" type="fill" /> */}
            <PrimaryButton title=" Hire me" type="fill" link="#" />
            <button className="border-2 border-secondary-200 hover:border-secondary-300 text-secondary-800 duration-300 px-6 py-2 rounded flex items-center">
              View work
            </button>
          </div>
          {/* Social Links */}
          <div className="mt-6 md:mt-12 flex items-center space-x-4">
            <a href="#dribbble" className={ButtonStyle}>
              <FaDribbble />
            </a>
            <a href="#behance" className={ButtonStyle}>
              <FaBehance />
            </a>
            <a href="#facebook" className={ButtonStyle}>
              <FaFacebookF />
            </a>
            <a href="#twitter" className={ButtonStyle}>
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="mt-12 md:mt-0 order-1 md:order-2">
          <img
            src={banner} // Replace with the actual image
            alt="Banner"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
