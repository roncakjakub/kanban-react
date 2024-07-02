import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { showSidebar, hideSidebar } from "../store/sidebar-sice"; // Adjust the path as necessary

const MOBILE_WIDTH = 670;

const useHandleResize = () => {
  const dispatch = useDispatch();
  const prevWidth = useRef(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const currWidth = window.innerWidth;
      if (currWidth <= MOBILE_WIDTH && prevWidth.current > MOBILE_WIDTH) {
        dispatch(hideSidebar());
      } else if (currWidth > MOBILE_WIDTH && prevWidth.current <= MOBILE_WIDTH) {
        dispatch(showSidebar());
      }
      prevWidth.current = currWidth;
    };

    if (window.innerWidth <= MOBILE_WIDTH) {
      dispatch(hideSidebar());
    } else {
      dispatch(showSidebar());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return { showSidebar: () => dispatch(showSidebar()), hideSidebar: () => dispatch(hideSidebar()) };
};

export default useHandleResize;
