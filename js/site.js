// Theme toggle and mobile navigation. Kept small and dependency free.
(function () {
  const saved = (() => { try { return localStorage.getItem("theme"); } catch (e) { return null; } })();
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  window.toggleTheme = function () {
    const now = document.documentElement.getAttribute("data-theme");
    const next = now === "dark" ? "light" : (now === "light" ? "dark"
      : (matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark"));
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  };
  document.addEventListener("DOMContentLoaded", function () {
    const t = document.querySelector(".navtoggle"), m = document.querySelector(".nav .menu");
    if (t && m) t.addEventListener("click", () => m.classList.toggle("open"));
    const here = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav .menu a").forEach(a => {
      if (a.getAttribute("href") === here) { a.style.color = "var(--ink)"; a.style.background = "var(--accent-soft)"; }
    });
  });
})();

// Gentle entrance for sections. Respects the reduced motion preference through CSS.
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".reveal");
  if (!items.length || !("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("in")); return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("in"), i * 60);
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: .08 });
  items.forEach(el => io.observe(el));
});

// Visitor counting.
//
// GitHub Pages serves static files and keeps no logs you can read, so counting
// visits needs a small external service. This loads GoatCounter, which is free for
// a personal site, sets no cookies and stores no personal data, so no consent
// banner is needed for visitors in the European Union. That is the reason for
// choosing it over Google Analytics, which would need one.
//
// To switch it on, put your GoatCounter site code between the quotes below. It is
// the first part of the address you are given when you register, so for
// kumwilai.goatcounter.com the code is "kumwilai". Until then the constant stays
// empty and nothing is loaded and nothing is sent anywhere.
const ANALYTICS_CODE = "";

if (ANALYTICS_CODE) {
  const s = document.createElement("script");
  s.async = true;
  s.dataset.goatcounter = "https://" + ANALYTICS_CODE + ".goatcounter.com/count";
  s.src = "https://gc.zgo.at/count.js";
  document.head.appendChild(s);
}
