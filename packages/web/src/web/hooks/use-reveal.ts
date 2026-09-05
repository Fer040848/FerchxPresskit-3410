import { useEffect, useRef } from "react";

/**
 * Adds `is-in` to the element the first time it enters the viewport.
 * Also marks any `.reveal-card` children so staggered cards animate.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mark = (node: Element) => {
      node.classList.add("is-in");
      node.querySelectorAll(".reveal-card").forEach((child) => child.classList.add("is-in"));
    };

    if (typeof IntersectionObserver === "undefined") {
      mark(el);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            mark(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
