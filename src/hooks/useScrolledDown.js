import { useEffect, useState, useCallback } from "react";

function useScrolledDown() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const handleScroll = useCallback(() => {
    var prevScrollpos = window.pageYOffset;
    const scrollCheck = debounce(() => {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setIsScrolledDown(false);
      } else {
        setIsScrolledDown(true);
      }
      prevScrollpos = currentScrollPos;
    }, 100);
    window.addEventListener("scroll", scrollCheck, true);
  }, []);

  useEffect(() => {
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [handleScroll]);

  return isScrolledDown;
}

export default useScrolledDown;
