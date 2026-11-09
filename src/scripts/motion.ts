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

  const pulse = document.querySelector("#train-pulse");
  if (pulse) {
    gsap.timeline({ repeat: -1, defaults: { ease: "power1.inOut" } })
      .to(pulse, { attr: { cx: 340, cy: 356 }, duration: 1.4 })
      .to(pulse, { attr: { cx: 540, cy: 316 }, duration: 1.4 })
      .to(pulse, { attr: { cx: 680, cy: 276 }, duration: 1.4 })
      .to(pulse, { attr: { cx: 200, cy: 396 }, duration: 0.8 });
  }

  const orbit = document.querySelector("#train-orbit");
  if (orbit) {
    gsap.to(orbit, { rotation: 360, duration: 60, repeat: -1, ease: "none", transformOrigin: "50% 50%" });
  }

  const header = document.querySelector("header");
  if (header) {
    ScrollTrigger.create({
      start: 0,
      end: 99999,
      onUpdate: (self) => header.classList.toggle("is-scrolled", self.scroll() > 8),
    });
  }
}
