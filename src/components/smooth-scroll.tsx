"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // Handle all anchor links for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for navbar height
          behavior: "smooth",
        });

        // Add animation class to the target section
        targetElement.classList.add("scroll-highlight");

        // Remove the class after animation completes
        setTimeout(() => {
          targetElement.classList.remove("scroll-highlight");
        }, 1500);

        // Update URL without page reload
        window.history.pushState(null, "", href);
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
}
