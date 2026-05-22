import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force the window layout to immediately snap to coordinates (0,0) on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render any UI, it just handles background action
}