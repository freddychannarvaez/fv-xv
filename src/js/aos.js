import AOS from "aos";

export function aosInit() {
  // AOS.init();
  AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 50 });
}