import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function initMotion() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.remove("reveal"));
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((root) => {
    const items = root.querySelectorAll("[data-stagger-item]");
    if (!items.length) return;
    gsap.from(items, {
      opacity: 0,
      y: 12,
      filter: "blur(4px)",
      duration: 0.3,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: { trigger: root, start: "top 85%", once: true },
    });
  });

  const header = document.querySelector("header");
  if (header) {
    ScrollTrigger.create({
      start: 0,
      end: 99999,
      onUpdate: (self) => header.classList.toggle("is-scrolled", self.scroll() > 8),
    });
  }
}
