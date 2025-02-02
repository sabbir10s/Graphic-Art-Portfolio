import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";
const Layout = () => {
  return (
    <div className="font-SourceSans ">
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
