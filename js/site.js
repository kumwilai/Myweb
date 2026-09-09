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
