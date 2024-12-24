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
          <h2 className="text-[#FFA500] text-lg uppercase font-semibold mb-2">
            A Bit
          </h2>
          <h1 className="text-4xl font-bold text-[#111827] mb-4">About Us</h1>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            I’m a top online marketer and branding expert. I started my career
            by launching the popular metaverse design. In just a few short
            years, I built the brand to millions of social media followers and
            website visitors. I also created award-winning online products with
            millions of dollars in online sales. With me, you’ll get
            personalized experiences worth upwards of $1000 an hour.
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
            <PrimaryButton title=" Hire me" type="fill" link="#" />
            <button className="border-2 border-secondary-200 hover:border-secondary-300 text-secondary-800 duration-300 px-6 py-2 rounded flex items-center">
              View work
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
