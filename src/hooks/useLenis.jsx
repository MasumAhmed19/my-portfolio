import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3), // Smooth ease-out
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Smooth scroll on link click
    const handleAnchorClick = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        lenis.scrollTo(targetElement, { offset: -50 }); 
      }
    };

    // Attach event listeners to all internal links
    const anchorLinks = document.querySelectorAll("a[href^='#']");
    anchorLinks.forEach((link) => link.addEventListener("click", handleAnchorClick));

    return () => {
      lenis.destroy();
      anchorLinks.forEach((link) => link.removeEventListener("click", handleAnchorClick));
    };
  }, []);
};

export default useLenis;
