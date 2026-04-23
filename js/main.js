/* ═══════════════════════════════════════════════════════════════════════════
   SECONROB DGZfP 2026 – Main JavaScript
   ═══════════════════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ── Auto-build table of contents from <section id="..."> + <h2> ─────── */
  function buildTOC() {
    const tocList = document.getElementById("toc-list");
    if (!tocList) return;

    const sections = document.querySelectorAll("main section[id]");
    sections.forEach(function (section) {
      const h2 = section.querySelector("h2");
      if (!h2) return;

      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#" + section.id;
      a.textContent = h2.textContent;
      li.appendChild(a);
      tocList.appendChild(li);
    });
  }

  /* ── Highlight active TOC item while scrolling ──────────────────────── */
  function initScrollSpy() {
    const links = document.querySelectorAll("#toc-list a");
    if (links.length === 0) return;

    const sections = Array.from(links).map(function (a) {
      return document.querySelector(a.getAttribute("href"));
    }).filter(Boolean);

    function onScroll() {
      const scrollY = window.scrollY + 120; // offset for sticky nav height
      let current = sections[0];

      sections.forEach(function (section) {
        if (section.offsetTop <= scrollY) {
          current = section;
        }
      });

      links.forEach(function (a) {
        a.classList.toggle(
          "active",
          a.getAttribute("href") === "#" + current.id
        );
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on load
  }

  /* ── Add descriptive label to missing-image placeholders ────────────── */
  function labelMissingImages() {
    document.querySelectorAll("figure img").forEach(function (img) {
      img.addEventListener("error", function () {
        const fig = img.closest("figure");
        if (fig) {
          fig.setAttribute("data-alt", img.alt ? img.alt + " – " : "");
        }
      });
    });
  }

  /* ── Init ────────────────────────────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", function () {
    buildTOC();
    initScrollSpy();
    labelMissingImages();
  });
})();
