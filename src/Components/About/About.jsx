import PrimaryButton from "../../Shared/Button/PrimaryButton";
import about from "../../Assets/image/about.png";
const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-white md:py-10 grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 lg:gap-20"
      >
        {/* Image Section */}
        <div className="w-full">
          <img src={about} alt="About Us" className="w-fit" />
        </div>

        {/* Text Content */}
        <div className="w-full">
          <h2 className="text-primary text-lg uppercase font-semibold mb-2">
            A Bit
          </h2>
          <h1 className="text-4xl font-bold text-secondary mb-4">About Us</h1>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            At Graphic Art, we specialize in crafting visually compelling
            graphic design solutions that elevate brands and engage audiences.
            From brand identity and print design to digital media and motion
            graphics, our team blends creativity with strategy to deliver
            designs that resonate. We believe design is more than just
            aesthetics—it’s about creating meaningful connections and solving
            business challenges. Whether you’re looking to establish a new
            brand, refresh your visual identity, or launch a marketing campaign,
            our agency is dedicated to producing custom design solutions that
            leave a lasting impression and drive results. Let us bring your
            vision to life through powerful design.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start space-x-6 mb-6">
            <div>
              <p className="text-xl font-bold text-[#111827]">5 years+</p>
              <p className="text-[#6B7280]">Experience</p>
            </div>
            <div>
              <p className="text-xl font-bold text-[#111827]">700+</p>
              <p className="text-[#6B7280]">Projects</p>
            </div>
            <div>
              <p className="text-xl font-bold text-[#111827]">24/7</p>
              <p className="text-[#6B7280]">Customer Support</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-start space-x-4">
            <PrimaryButton title="Contact Us" type="fill" link="#contact" />
            <a
              href="#projects"
              className="border-2 border-secondary-200 hover:border-secondary-300 text-secondary-800 duration-300 px-6 py-2 rounded flex items-center"
            >
              View work
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
