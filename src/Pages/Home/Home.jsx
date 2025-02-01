import { useEffect, useState } from "react";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Hero from "../../Components/Hero/Hero";
import Projects from "../../Components/Projects/Projects";
import Services from "../../Components/Services/Services";
import WhyChooseUs from "../../Components/whyChooseUs/whyChooseUs";
import Loading from "../../Shared/Loading";
const url =
  "https://raw.githubusercontent.com/sabbir10s/Graphic-Art-Portfolio/refs/heads/main/public/projectData.json";
// const url = "projectData.json";
const Home = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  if (projects.length === 0) {
    return <Loading />;
  }
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
        <Projects projects={projects} />
        <WhyChooseUs />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
