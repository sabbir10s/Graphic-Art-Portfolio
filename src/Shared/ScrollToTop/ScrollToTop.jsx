import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // 👈 Get the current URL path

  useEffect(() => {
    window.scrollTo(0, 0); // 👈 Reset scroll position to top
  }, [pathname]); // 👈 Runs every time the route changes

  return null;
};

export default ScrollToTop;
