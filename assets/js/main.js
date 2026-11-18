/* =========================================================
   Comportements du site : langue, thème, menu mobile, section active,
   apparition au défilement, filtres et fenêtre de détail des projets.
   Dépend de i18n.js (textes) et projects.js (données des projets).
   ========================================================= */

(function () {
  "use strict";

  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const currentLang = () => root.lang || I18N_DEFAULT;

  /* ---------- Langue ---------- */
  const langBtn = document.getElementById("lang-toggle");
  langBtn.addEventListener("click", () => {
    applyLang(currentLang() === "fr" ? "en" : "fr", true);
  });

  /* ---------- Thème clair / sombre ---------- */
  const themeBtn = document.getElementById("theme-toggle");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : systemDark.matches;

  function updateThemeLabel() {
    const label = t(isDark() ? "a11y.themeLight" : "a11y.themeDark");
    themeBtn.setAttribute("aria-label", label);
    themeBtn.setAttribute("title", label);
  }
  themeBtn.addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    root.dataset.theme = next;
    storageSet("portfolio-theme", next);
    updateThemeLabel();
  });
  systemDark.addEventListener("change", updateThemeLabel);

  /* ---------- Menu burger ---------- */
  const burger = document.getElementById("burger");
  const menu = document.getElementById("nav-menu");

  function setMenu(open) {
    menu.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", t(open ? "a11y.menuClose" : "a11y.menuOpen"));
  }
  burger.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) { setMenu(false); burger.focus(); }
  });
  window.matchMedia("(min-width: 901px)").addEventListener("change", (e) => { if (e.matches) setMenu(false); });

  /* ---------- Section active dans le menu ---------- */
  const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
  const sections = navLinks.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);

  function setActive(id) {
    navLinks.forEach((a) => {
      if (a.getAttribute("href") === "#" + id) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => spy.observe(s));
    document.getElementById("accueil") && spy.observe(document.getElementById("accueil"));
  }

  /* ---------- Apparition au défilement ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || reduceMotion.matches) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => revealer.observe(el));
  }

  /* ---------- Projets : cartes et filtres ---------- */
  const grid = document.getElementById("projects-grid");
  const emptyMsg = document.getElementById("projects-empty");
  const filterBtns = Array.from(document.querySelectorAll(".filter-btn"));
  let activeFilter = "all";

  const catColor = (cat) => "var(--cat-" + cat + ")";
  function bandStyle(cats) {
    if (cats.length === 1) return catColor(cats[0]);
    return "linear-gradient(90deg, " + cats.map(catColor).join(", ") + ")";
  }
  const toolName = (tool, lang) => (lang === "en" && TOOL_TRANSLATIONS[tool]) || tool;

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    Object.entries(attrs || {}).forEach(([k, v]) => {
      if (k === "text") node.textContent = v;
      else if (k === "style") node.style.cssText = v;
      else node.setAttribute(k, v);
    });
    (children || []).forEach((c) => c && node.appendChild(c));
    return node;
  }

  function catTags(project, lang) {
    return project.categories.map((c) => el("span", { class: "cat-tag", style: "--tag:" + catColor(c), text: t("cat." + c, lang) }));
  }

  function renderProjects() {
    const lang = currentLang();
    grid.textContent = "";
    PROJECTS.forEach((p) => {
      const txt = p[lang];
      const titleId = "project-title-" + p.id;
      const meta = el("div", { class: "project-meta" }, [
        ...catTags(p, lang),
        el("span", { class: "project-year", text: p.year }),
        p.ongoing ? el("span", { class: "status-tag", text: t("status.ongoing", lang) }) : null
      ]);
      const img = p.image
        ? el("img", { class: "project-img", src: p.image, alt: t("projects.imgAlt", lang) + " : " + txt.title, loading: "lazy", width: "640", height: "360" })
        : null;
      const openBtn = el("button", { type: "button", class: "project-open", "aria-haspopup": "dialog", "aria-describedby": titleId }, [
        document.createTextNode(t("projects.open", lang) + " "),
        el("span", { "aria-hidden": "true", text: "→" })
      ]);
      openBtn.addEventListener("click", () => openModal(p, openBtn));

      const card = el("li", { "data-categories": p.categories.join(" ") }, [
        el("article", { class: "project-card" }, [
          el("div", { class: "project-band", style: "--band:" + bandStyle(p.categories) }),
          img,
          el("div", { class: "project-body" }, [
            meta,
            el("h3", { id: titleId, text: txt.title }),
            el("p", { class: "project-summary", text: txt.summary }),
            openBtn
          ])
        ])
      ]);
      grid.appendChild(card);
    });
    applyFilter(activeFilter);
  }

  function applyFilter(filter) {
    activeFilter = filter;
    let visible = 0;
    grid.querySelectorAll("li").forEach((li) => {
      const show = filter === "all" || li.dataset.categories.split(" ").includes(filter);
      li.hidden = !show;
      if (show) visible++;
    });
    emptyMsg.hidden = visible > 0;
    filterBtns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === filter)));
  }
  filterBtns.forEach((b) => b.addEventListener("click", () => applyFilter(b.dataset.filter)));

  /* ---------- Fenêtre de détail ---------- */
  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");
  let lastTrigger = null;
  let openProject = null;

  function listBlock(titleKey, items, lang) {
    if (!items || !items.length) return null;
    return el("div", {}, [
      el("h3", { text: t(titleKey, lang) }),
      el("ul", {}, items.map((i) => el("li", { text: i })))
    ]);
  }

  function fillModal(p) {
    const lang = currentLang();
    const txt = p[lang];
    modalContent.textContent = "";
    modal.style.setProperty("--band", bandStyle(p.categories));

    const closeBtn = el("button", { type: "button", class: "modal-close", "aria-label": t("projects.close", lang), title: t("projects.close", lang) }, [
      el("span", { "aria-hidden": "true", text: "×" })
    ]);
    closeBtn.addEventListener("click", () => modal.close());

    const blocks = [
      el("div", { class: "modal-head" }, [
        el("div", {}, [
          el("div", { class: "project-meta" }, [...catTags(p, lang), el("span", { class: "project-year", text: p.year + " · " + txt.type })]),
          el("h2", { id: "modal-title", text: txt.title, style: "margin-top:8px" })
        ]),
        closeBtn
      ]),
      p.image ? el("img", { class: "project-img", src: p.image, alt: t("projects.imgAlt", lang) + " : " + txt.title, loading: "lazy", style: "border-radius:8px;margin-top:16px" }) : null,
      el("h3", { text: t("projects.context", lang) }),
      el("p", { text: txt.context }),
      listBlock("projects.did", txt.did, lang),
      el("h3", { text: t("projects.tools", lang) }),
      el("ul", { class: "chips" }, p.tools.map((tool) => el("li", { class: "chip", text: toolName(tool, lang) }))),
      listBlock("projects.results", txt.results, lang)
    ];
    if (p.github) {
      blocks.push(el("p", { class: "modal-link" }, [
        el("a", { class: "btn btn-primary", href: p.github, target: "_blank", rel: "noopener" }, [
          document.createTextNode(t("projects.github", lang)),
          el("span", { class: "visually-hidden", text: " " + t("contact.newTab", lang) })
        ])
      ]));
    }
    blocks.forEach((b) => b && modalContent.appendChild(b));
  }

  function openModal(p, trigger) {
    openProject = p;
    lastTrigger = trigger;
    fillModal(p);
    modal.showModal(); // Échap ferme la fenêtre nativement
    document.body.classList.add("no-scroll");
    modal.querySelector(".modal-close").focus();
  }

  modal.addEventListener("close", () => {
    document.body.classList.remove("no-scroll");
    openProject = null;
    if (lastTrigger && document.body.contains(lastTrigger)) lastTrigger.focus();
  });
  // Clic sur le fond sombre : ferme la fenêtre
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

  /* ---------- Changement de langue ---------- */
  document.addEventListener("langchange", () => {
    updateThemeLabel();
    burger.setAttribute("aria-label", t(menu.classList.contains("is-open") ? "a11y.menuClose" : "a11y.menuOpen"));
    const reopenId = openProject && openProject.id;
    renderProjects();
    if (reopenId) {
      fillModal(openProject);
      // Le bouton d'origine a été recréé : on retrouve le nouveau pour y revenir à la fermeture
      lastTrigger = grid.querySelector('[aria-describedby="project-title-' + reopenId + '"]');
    }
  });

  /* ---------- Démarrage ---------- */
  applyLang(currentLang(), false);
})();
