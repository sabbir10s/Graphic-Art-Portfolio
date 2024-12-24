import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
const Main = () => {
  return (
    <div className="font-SourceSans ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
