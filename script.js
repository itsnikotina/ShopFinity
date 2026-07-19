/* ==========================================================================
   ShopFinity — Interações leves em JavaScript puro (sem dependências)
   ========================================================================== */

(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----- Header: estado "scrolled" + barra de progresso de leitura ----- */
  const header = document.getElementById("siteHeader");
  const progressBar = document.getElementById("scrollProgress");
  const backToTop = document.getElementById("backToTop");

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (header) header.classList.toggle("scrolled", scrollTop > 10);
    if (progressBar) progressBar.style.width = progress + "%";
    if (backToTop) backToTop.classList.toggle("visible", scrollTop > 480);
  }

  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  /* ----- Revelação de elementos ao rolar a página ----- */
  const revealEls = document.querySelectorAll(".reveal");

  if (revealEls.length) {
    if (prefersReducedMotion) {
      revealEls.forEach((el) => el.classList.add("visible"));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );

      revealEls.forEach((el, index) => {
        el.style.transitionDelay = Math.min(index % 4, 3) * 0.08 + "s";
        revealObserver.observe(el);
      });
    }
  }
})();
