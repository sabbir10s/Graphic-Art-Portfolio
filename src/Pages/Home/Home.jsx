import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Hero from "../../Components/Hero/Hero";
import Projects from "../../Components/Projects/Projects";
import Services from "../../Components/Services/Services";

const Home = () => {
  return (
    <div>
      <div className="bg-light">
        <div className="container mx-auto px-2 mt-[20px]">
          <Hero />
        </div>
      </div>
      <div className="container mx-auto px-2 mt-[20px] space-y-14 md:space-y-16 lg:space-y-20">
        <About />
        <Services />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
