/* =====================================================================
   script.js  —  BUILDS THE PAGE FROM data.js  (you rarely need to edit this)
   ---------------------------------------------------------------------
   - To change content: edit data.js
   - To change colors/spacing: edit style.css
   ===================================================================== */
(function () {
  "use strict";

  const D = PORTFOLIO;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---------- Helpers ---------- */

  // Pretty placeholder picture, used automatically when an image file is missing.
  function placeholder(title, subtitle) {
    const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#ece7ff"/><stop offset="1" stop-color="#dcedff"/></linearGradient></defs>' +
      '<rect width="800" height="600" fill="url(#g)"/>' +
      '<circle cx="400" cy="250" r="74" fill="#ffffff" opacity=".75"/>' +
      '<path d="M365 270l28-34 22 26 16-18 26 26z" fill="#8b6fe8" opacity=".85"/>' +
      '<circle cx="428" cy="226" r="11" fill="#8b6fe8" opacity=".85"/>' +
      '<text x="400" y="388" text-anchor="middle" font-family="Arial,sans-serif" font-size="30" font-weight="700" fill="#6a4cd0">' + esc(title) + "</text>" +
      '<text x="400" y="430" text-anchor="middle" font-family="Arial,sans-serif" font-size="20" fill="#6b678a">' + esc(subtitle) + "</text>" +
      "</svg>";
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  // Set an <img> source, falling back to a placeholder if the file does not exist yet.
  function setImage(img, src, title, subtitle) {
    img.addEventListener("error", () => { img.src = placeholder(title, subtitle); }, { once: true });
    img.src = src;
  }

  function fillImages(root) {
    $$("img[data-src]", root).forEach((img) => {
      setImage(img, img.dataset.src, img.dataset.title, img.dataset.sub);
      img.removeAttribute("data-src");
    });
  }

  const hasValue = (v) => typeof v === "string" && v.trim() !== "";
  const toast = (() => {
    const el = $("#toast"); let t;
    return (msg) => { el.textContent = msg; el.classList.add("show"); clearTimeout(t); t = setTimeout(() => el.classList.remove("show"), 3200); };
  })();

  /* ---------- Basic text bindings (name, role, tagline...) ---------- */
  const P = D.profile;
  document.title = P.name + " | Portfolio";
  $$('[data-bind="brand"], [data-bind="name"]').forEach((el) => (el.textContent = P.name));
  $$('[data-bind="role"]').forEach((el) => (el.textContent = P.role));
  $$('[data-bind="tagline"]').forEach((el) => (el.textContent = P.tagline));
  $$('[data-bind="intro"]').forEach((el) => (el.textContent = P.intro));
  $("#footerNote").textContent = D.footerNote || "";
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Profile photo & resume ---------- */
  setImage($("#profilePhoto"), P.photo, P.name.split(" ").map((w) => w[0]).join("").replace(/\./g, ""), "Add your photo in data.js");

  const resumeBtn = $("#resumeBtn");
  resumeBtn.href ="jananis_resume.pdf";
  resumeBtn.setAttribute("download", P.resumeDownloadName || "Resume.pdf");

  /* ---------- About ---------- */
  $("#aboutText").innerHTML = D.about.paragraphs.map((p) => `<p>${p}</p>`).join("");
  $("#aboutChips").innerHTML = D.about.highlights.map((h) => `<span class="chip"><i class="${h.icon}"></i>${h.text}</span>`).join("");

  /* ---------- Education ---------- */
  $("#educationList").innerHTML = D.education.map((e) => `
    <div class="tl-item reveal">
      <span class="tl-dot"><i class="fa-solid fa-check"></i></span>
      <div class="card">
        <div class="tl-icon"><i class="${e.icon}"></i></div>
        <div>
          <h3>${e.title}</h3>
          ${hasValue(e.institute) ? `<p class="inst">${e.institute}</p>` : ""}
          <span class="badge">${e.status}</span>
        </div>
      </div>
    </div>`).join("");

  /* ---------- Skills ---------- */
  $("#skillsList").innerHTML = D.skills.map((s) => `
    <div class="card skill-card reveal">
      <div class="skill-icon"><i class="${s.icon}"></i></div>
      <h3>${s.name}</h3>
    </div>`).join("");

  /* ---------- Certifications ---------- */
  $("#certList").innerHTML = D.certifications.map((c, i) => `
    <article class="card cert-card reveal">
  <article class="card cert-card reveal">
    <div class="cert-body">
      <span class="cert-issuer">
        <i class="${c.icon || "fa-solid fa-award"}"></i>${c.issuer}
      </span>
      <h3>${c.title}</h3>
      <button class="btn btn-primary btn-sm"
        data-preview="cert" data-index="${i}">
        <i class="fa-solid fa-eye"></i> View Certificate
      </button>
    </div>
  </article>
`).join("");
      <div class="cert-body">
        <span class="cert-issuer"><i class="${c.icon || "fa-solid fa-award"}"></i>${c.issuer}</span>
        <h3>${c.title}</h3>
        <button class="btn btn-primary btn-sm" data-preview="cert" data-index="${i}"><i class="fa-solid fa-eye"></i> View Certificate</button>
      </div>
    </article>`).join("");

  /* ---------- Internship ---------- */
  $("#internList").innerHTML = D.internships.map((n) => `
    <div class="card intern-card reveal">
      <div class="intern-icon"><i class="fa-solid fa-briefcase"></i></div>
      <div>
        <div class="intern-top">
          <h3>${n.title}</h3>
          <span class="badge" style="margin-top:0"><i class="fa-regular fa-clock"></i> ${n.duration}</span>
        </div>
        <p>${n.description}</p>
        <div class="tags">${n.topics.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      </div>
    </div>`).join("");

  /* ---------- Projects ---------- */
  $("#projectList").innerHTML = D.projects.map((p, i) => `
    <article class="card project-card reveal">
      <div class="project-img" data-preview="project" data-index="${i}">
        <img data-src="${p.image}" data-title="${p.title}" data-sub="Add a project screenshot" alt="${p.title}" />
      </div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        <button class="btn btn-primary btn-sm" data-project="${i}"><i class="fa-solid fa-arrow-up-right-from-square"></i> View Project</button>
      </div>
    </article>`).join("");

  /* ---------- Strengths ---------- */
  $("#strengthList").innerHTML = D.strengths.map((s) => `
    <div class="card strength-card reveal">
      <div class="strength-icon"><i class="${s.icon}"></i></div>
      <h3>${s.name}</h3>
    </div>`).join("");

  fillImages(document);

  /* ---------- Contact ---------- */
  const C = D.contact;
  const contactDefs = [
    { key: "email",    label: "Email Address",    icon: "fa-solid fa-envelope",   hint: "Add your email in data.js",    href: (v) => "mailto:" + v },
    { key: "phone",    label: "Phone Number",     icon: "fa-solid fa-phone",      hint: "Add your phone number in data.js", href: (v) => "tel:" + v.replace(/\s+/g, "") },
    { key: "linkedin", label: "LinkedIn Profile", icon: "fa-brands fa-linkedin-in", hint: "Add your LinkedIn link in data.js", href: (v) => v, external: true },
    { key: "github",   label: "GitHub Profile",   icon: "fa-brands fa-github",    hint: "Add your GitHub link in data.js", href: (v) => v, external: true }
  ];

  $("#contactList").innerHTML = contactDefs.map((d) => {
    const v = C[d.key];
    const filled = hasValue(v);
    const inner = `
      <div class="contact-icon"><i class="${d.icon}"></i></div>
      <div><small>${d.label}</small><span class="val">${filled ? v : d.hint}</span></div>`;
    return filled
      ? `<a class="card contact-card reveal" href="${d.href(v)}" ${d.external ? 'target="_blank" rel="noopener"' : ""}>${inner}</a>`
      : `<div class="card contact-card empty reveal">${inner}</div>`;
  }).join("");

  // Social icons (hero, contact, footer). Only real links are clickable.
  const socialDefs = [
    { key: "linkedin", icon: "fa-brands fa-linkedin-in", label: "LinkedIn", href: (v) => v, ext: true },
    { key: "github",   icon: "fa-brands fa-github",      label: "GitHub",   href: (v) => v, ext: true },
    { key: "email",    icon: "fa-solid fa-envelope",     label: "Email",    href: (v) => "mailto:" + v },
    { key: "phone",    icon: "fa-solid fa-phone",        label: "Phone",    href: (v) => "tel:" + v.replace(/\s+/g, "") }
  ];
  const socialsHTML = socialDefs.map((s) => {
    const v = C[s.key];
    return hasValue(v)
      ? `<a href="${s.href(v)}" aria-label="${s.label}" ${s.ext ? 'target="_blank" rel="noopener"' : ""}><i class="${s.icon}"></i></a>`
      : `<a href="#contact" aria-label="${s.label} (add in data.js)" data-empty="${s.label}"><i class="${s.icon}"></i></a>`;
  }).join("");
  ["#heroSocials", "#contactSocials", "#footerSocials"].forEach((id) => ($(id).innerHTML = socialsHTML));
  $$("a[data-empty]").forEach((a) => a.addEventListener("click", () => toast(a.dataset.empty + " not added yet - add it in data.js")));

  // Message form -> opens the visitor's email app (works without a server)
  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#cfName").value.trim();
    const msg = $("#cfMsg").value.trim();
    const note = $("#formNote");
    if (!name || !msg) { note.textContent = "Please fill in your name and message."; return; }
    if (!hasValue(C.email)) { note.textContent = "Email is not set yet. Add it in data.js to enable this form."; return; }
    note.textContent = "";
    location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent("Portfolio message from " + name) + "&body=" + encodeURIComponent(msg);
  });

  /* ---------- Image preview (lightbox) ---------- */
  const lb = $("#lightbox"), lbImg = $("#lbImg"), lbCap = $("#lbCaption");
  function openLightbox(src, title, sub) {
    lbImg.onerror = () => { lbImg.onerror = null; lbImg.src = placeholder(title, sub); };
    lbImg.src = src; lbImg.alt = title; lbCap.textContent = title;
    lb.classList.add("open"); lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target.closest("#lbClose")) closeLightbox(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

  document.addEventListener("click", (e) => {
    const pv = e.target.closest("[data-preview]");
    if (pv) {
      const i = +pv.dataset.index;
      if (pv.dataset.preview === "cert") { const c = D.certifications[i]; openLightbox(c.image, c.title, "Upload certificate image"); }
      else { const p = D.projects[i]; openLightbox(p.image, p.title, "Add a project screenshot"); }
      return;
    }
    const pb = e.target.closest("[data-project]");
    if (pb) {
      const p = D.projects[+pb.dataset.project];
      if (hasValue(p.link)) window.open(p.link, "_blank", "noopener");
      else openLightbox(p.image, p.title, "Add a project screenshot");
    }
  });

  /* ---------- Header: mobile menu, scroll shadow, active link ---------- */
  const header = $("#header"), toggle = $("#navToggle"), links = $("#navLinks"), toTop = $("#toTop");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
  });
  $$("a", links).forEach((a) => a.addEventListener("click", () => {
    links.classList.remove("open"); toggle.classList.remove("open"); toggle.setAttribute("aria-expanded", "false");
  }));

  const navAnchors = $$("a", links);
  const sections = navAnchors.map((a) => $(a.getAttribute("href"))).filter(Boolean);
  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 20);
    toTop.classList.toggle("show", y > 500);
    let current = sections[0];
    sections.forEach((s) => { if (s.getBoundingClientRect().top <= window.innerHeight * 0.35) current = s; });
    // the Strengths section has no menu item; highlight Projects until Contact begins
    navAnchors.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current.id));
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- Section reveal animations ---------- */
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach((el, i) => { el.style.transitionDelay = (i % 4) * 90 + "ms"; io.observe(el); });
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }
})();
