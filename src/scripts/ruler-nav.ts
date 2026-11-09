import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initRulerNav() {
  const nav = document.getElementById("ruler-nav");
  if (!nav) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const sections = [...document.querySelectorAll<HTMLElement>("[data-ruler-section]")];

  const canShow = () =>
    sections.length >= 2 && window.matchMedia("(min-width: 1024px)").matches;

  const syncVisibility = () => {
    if (!canShow()) {
      nav.classList.add("hidden");
      document.body.classList.remove("has-ruler-nav");
      return false;
    }
    nav.classList.remove("hidden");
    document.body.classList.add("has-ruler-nav");
    return true;
  };

  if (!syncVisibility()) return;

  const header = document.querySelector<HTMLElement>("header");

  const syncRulerTop = () => {
    const top = header?.offsetHeight ?? 56;
    nav.style.setProperty("--ruler-top", `${top}px`);
  };

  syncRulerTop();
  header && new ResizeObserver(syncRulerTop).observe(header);

  let dragEngaged = false;
  let engageLeaveTimer: ReturnType<typeof setTimeout> | undefined;
  const setEngaged = (on: boolean) => nav.classList.toggle("is-engaged", on);

  nav.addEventListener("mouseenter", () => {
    clearTimeout(engageLeaveTimer);
    if (!dragEngaged) setEngaged(true);
  });
  nav.addEventListener("mouseleave", () => {
    if (dragEngaged) return;
    clearTimeout(engageLeaveTimer);
    engageLeaveTimer = setTimeout(() => setEngaged(false), 140);
  });

  const labelsRoot = nav.querySelector<HTMLElement>(".ruler-nav__labels");
  const scale = nav.querySelector<HTMLElement>(".ruler-nav__scale");
  const needle = nav.querySelector<HTMLElement>(".ruler-nav__needle");
  const trail = nav.querySelector<HTMLElement>(".ruler-nav__trail");
  const readout = nav.querySelector<HTMLElement>(".ruler-nav__readout");

  if (!labelsRoot || !needle || !trail || !readout) return;

  labelsRoot.replaceChildren();
  const labelBtns: HTMLButtonElement[] = [];

  sections.forEach((sec, index) => {
    const label = sec.dataset.rulerSection ?? `Section ${index + 1}`;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "ruler-nav__label";
    btn.textContent = label.toUpperCase();
    btn.addEventListener("click", () => {
      sec.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    });
    labelsRoot.appendChild(btn);
    labelBtns.push(btn);
  });

  let activeIndex = 0;

  const setActive = (index: number) => {
    activeIndex = index;
    labelBtns.forEach((btn, i) => {
      btn.classList.toggle("is-active", i === index);
    });
  };

  const scrollSpan = () =>
    Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

  const positionLabels = () => {
    const span = scrollSpan();
    sections.forEach((sec, i) => {
      const btn = labelBtns[i];
      if (!btn) return;
      const ratio = sec.offsetTop / span;
      const pct = Math.min(96, Math.max(4, ratio * 100));
      btn.style.top = `${pct}%`;
    });
  };

  const updateMotion = (progress: number) => {
    const pct = progress * 100;
    readout.textContent = String(Math.round(pct));

    if (reduced) {
      needle.style.top = `${pct}%`;
      trail.style.height = `${pct}%`;
      return;
    }

    gsap.to(needle, {
      top: `${pct}%`,
      duration: 0.45,
      ease: "power2.out",
      overwrite: "auto",
    });
    gsap.to(trail, {
      height: `${pct}%`,
      duration: 0.55,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => updateMotion(self.progress),
  });

  sections.forEach((sec, index) => {
    ScrollTrigger.create({
      trigger: sec,
      start: "top 55%",
      end: "bottom 45%",
      onEnter: () => setActive(index),
      onEnterBack: () => setActive(index),
    });
  });

  const onLayout = () => {
    syncRulerTop();
    positionLabels();
    ScrollTrigger.refresh();
  };

  onLayout();
  window.addEventListener("resize", () => {
    if (!syncVisibility()) return;
    onLayout();
  });
  ScrollTrigger.addEventListener("refreshInit", positionLabels);

  setActive(0);
  updateMotion(0);

  const rulerTrack = nav.querySelector<HTMLElement>(".ruler-nav__inner");

  const scrollToPointer = (clientY: number) => {
    const track = rulerTrack ?? scale;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientY - rect.top) / rect.height));
    window.scrollTo({ top: ratio * scrollSpan(), behavior: reduced ? "auto" : "smooth" });
  };

  if (rulerTrack) {
    rulerTrack.style.cursor = "ns-resize";

    rulerTrack.addEventListener("pointerdown", (event) => {
      if ((event.target as HTMLElement).closest(".ruler-nav__label")) return;

      dragEngaged = true;
      setEngaged(true);
      rulerTrack.setPointerCapture(event.pointerId);
      scrollToPointer(event.clientY);

      const onMove = (ev: PointerEvent) => scrollToPointer(ev.clientY);
      const onUp = () => {
        dragEngaged = false;
        setEngaged(nav.matches(":hover"));
        rulerTrack.removeEventListener("pointermove", onMove);
        rulerTrack.removeEventListener("pointerup", onUp);
        rulerTrack.removeEventListener("pointercancel", onUp);
      };

      rulerTrack.addEventListener("pointermove", onMove);
      rulerTrack.addEventListener("pointerup", onUp);
      rulerTrack.addEventListener("pointercancel", onUp);
    });
  }
}
