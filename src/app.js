import { l, ui, getLang, setLang, onLangChange } from "./i18n.js";
import { cancers, topics, centers, faqs, sources, refs } from "./data.js";

/* ---------------- icons (lucide-style, inline SVG) ---------------- */
const ICONS = {
  search:
    '<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path>',
  menu: '<path d="M4 12h16"></path><path d="M4 6h16"></path><path d="M4 18h16"></path>',
  x: '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>',
  alertTriangle:
    '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><path d="M12 9v4"></path><path d="M12 17h0.01"></path>',
  printer:
    '<path d="M6 18h12v-7H6z"></path><path d="M6 8h12V6a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2z"></path><path d="M12 17h0.01"></path><path d="M7 21h10"></path>',
  chevronDown: '<path d="m6 9 6 6 6-6"></path>',
  heartHandshake:
    '<path d="M19 14c1.5 0 3-1 3-2a1 1 0 0 0-1-1h-4c0-1 1-2 2-2h2l1 3c-1 0-1.5.5-2 1a2 2 0 0 0-2 2c0 2 1 3 1 3z"></path><path d="M5 7a2 2 0 0 0 2 2"></path><path d="m2 18 2.3-2.3a1 1 0 0 1 1.4 0l1.4 1.4a1 1 0 0 1 0 1.4L7.3 19"></path>',
  languages:
    '<circle cx="12" cy="12" r="10"></circle><path d="M5 15a13 13 0 0 1 19 0z"></path><path d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path><path d="M12 5v0.01"></path><path d="M12 19v0.01"></path><path d="M19 12h0.01"></path><path d="M5 12h0.01"></path>',
  check: '<path d="M20 6 9 17l-5-5"></path>',
  home: '<path d="m3 10 7-7 7 7"></path><path d="M5 10v7h4v-7"></path><path d="M15 10v7h4v-7"></path><path d="M9 22h6"></path>',
  bookOpen:
    '<path d="M12 7v14"></path><path d="M3 9v8a2 2 0 0 0 2 2h5v-5H5a2 2 0 0 1-2-2v-1z"></path><path d="M21 9v8a2 2 0 0 1-2 2h-5v-5h5a2 2 0 0 0 2-2v-1z"></path>',
  mapPin:
    '<path d="M20 10c0 6-3.5 6-7 10-4.5-4-.9-3.4-7-10v5z"></path><path d="M12 2C7.1 2 3 4 3 9c0 7 9 14 9 22s-6 7-6 7"></path>',
  microscope:
    '<path d="M9 3H5a2 2 0 0 0-2 2v4"></path><path d="M9 5h0.01"></path><path d="M14 3h4a2 2 0 0 1 2 2v4"></path><path d="M14 5h0.01"></path><path d="M5 21h14"></path><path d="M12 9v12"></path><path d="M6 19h3"></path><path d="M15 19h3"></path>',
  clipboardList:
    '<rect x="8" y="3" width="8" height="14" rx="1"></rect><path d="M12 3v14"></path><path d="M8 9h4"></path><path d="M8 13h4"></path><path d="M8 17h4"></path>',
  pill: '<path d="M6 3h12a3 3 0 0 1 0 6H9a1.5 1.5 0 0 0 0 3h0a3 3 0 0 1 0-6h3"></path><circle cx="8" cy="16.5" r="1.5"></circle>',
  helpCircle:
    '<circle cx="12" cy="12" r="10"></circle><path d="M9.1 9a3 3 0 0 1 5.8 1.9c0 2-3 3-3 3"></path><path d="M12 17h0.01"></path>',
  info: '<circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h0.01"></path>',
  chevronRight: '<path d="m9 18 6-6-6-6"></path>',
};

function icon(name, size = 24, cls = "") {
  return `<svg aria-hidden="true" class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;
}

const H = (children) =>
  `<h1 class="text-2xl sm:text-4xl font-bold mb-6">${children}</h1>`;

/* ---------------- routing ---------------- */
function parseHash() {
  const hash = (location.hash || "").replace(/^#/, "");
  const qIndex = hash.indexOf("?");
  const path = qIndex === -1 ? hash : hash.slice(0, qIndex);
  const searchParams =
    qIndex === -1
      ? new URLSearchParams()
      : new URLSearchParams(hash.slice(qIndex + 1));
  return { path: path === "" ? "/" : path, searchParams };
}

const ROUTE_TABLE = [
  { page: "home", path: "/" },
  { page: "library", path: "/cancers" },
  { page: "detail", path: "/cancers/:id" },
  { page: "topic", key: "prevention", path: "/prevention" },
  { page: "topic", key: "diagnosis", path: "/diagnosis" },
  { page: "topic", key: "treatments", path: "/treatments" },
  { page: "topic", key: "side-effects", path: "/side-effects" },
  { page: "centers", path: "/centers" },
  { page: "support", path: "/support" },
  { page: "faq", path: "/faq" },
  { page: "search", path: "/search" },
  { page: "sources", path: "/sources" },
  { page: "static", path: "/about", t: ui.nav[7].t, b: [ui.aboutB, ui.review] },
  { page: "static", path: "/privacy", t: ui.privacyT, b: [ui.privacyB] },
];

function currentRoute() {
  const { path, searchParams } = parseHash();
  const p = path.replace(/\/+$/, "") || "/";
  for (const r of ROUTE_TABLE) {
    const spec = r.path.split("/").slice(1);
    const actual = p.split("/").slice(1);
    if (spec.length !== actual.length) continue;
    let match = true;
    const params = {};
    for (let i = 0; i < spec.length; i++) {
      if (spec[i].startsWith(":")) {
        params[spec[i].slice(1)] = actual[i];
        if (!actual[i]) match = false;
      } else if (spec[i] !== actual[i]) match = false;
    }
    if (match) return { ...r, path: p, params, searchParams };
  }
  return { page: "notFound", path: p, params: {}, searchParams };
}

function navigate(to) {
  location.hash = "#" + to;
  renderApp();
}

/* ---------------- shell ---------------- */
function skipLink() {
  return `<a href="#main" data-skip class="sr-only focus:not-sr-only focus:absolute focus:z-30 focus:bg-white focus:p-3">${l(ui.skip)}</a>`;
}

function closeMobileNav() {
  const nav = document.getElementById("mobile-nav");
  const btn = document.getElementById("menu-btn");
  if (nav) nav.classList.remove("open");
  if (btn) btn.setAttribute("aria-expanded", "false");
}

function toggleMobileNav(open) {
  const nav = document.getElementById("mobile-nav");
  const btn = document.getElementById("menu-btn");
  const svg = btn?.querySelector("svg");
  if (nav) nav.classList.toggle("open", open);
  if (btn) btn.setAttribute("aria-expanded", String(open));
  if (svg) svg.innerHTML = open ? ICONS.x : ICONS.menu;
}

function searchForm(cls) {
  return `<form role="search" class="flex items-center" data-search-form>
    <input class="border border-slate-300 rounded-s-xl px-3 text-base min-h-[44px] ${cls} focus:outline-none focus:border-teald" placeholder="${l(ui.ph)}" aria-label="${l(ui.searchLbl)}">
    <button type="button" class="bg-teald text-white min-h-[44px] px-3 rounded-e-xl hover:bg-navy transition" aria-label="${l(ui.searchLbl)}">${icon("search", 16)}</button>
  </form>`;
}

function header(route) {
  const isActive = (p) => route.path === p;
  const desktopNav = ui.nav
    .map(
      (n) =>
        `<a href="#${n.to}" class="px-2 py-1 rounded-lg whitespace-nowrap ${isActive(n.to) ? "bg-teall text-teald font-semibold" : "text-mute hover:text-navy"}" data-nav>${l(n.t)}</a>`,
    )
    .join("");
  const mobileNavLinks = ui.nav
    .map(
      (n) =>
        `<a href="#${n.to}" class="min-h-[48px] flex items-center px-3 rounded-xl ${isActive(n.to) ? "bg-teall text-teald font-semibold" : ""}" data-nav>${l(n.t)}</a>`,
    )
    .join("");
  const lang = getLang();
  return `<header class="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-slate-200 shadow-soft noprint">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
      <a href="#/" class="font-bold text-xl text-navy shrink-0 flex items-center gap-2" data-nav><svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="#1B6F69"></rect><path d="M16 25s-8-5-8-10.5a4.3 4.3 0 0 1 8-1.9 4.3 4.3 0 0 1 8 1.9C24 20 16 25 16 25z" fill="#fff"></path></svg><span>CancerGuide <span class="text-teald">DZ</span></span></a>
      <nav aria-label="main" class="hidden xl:flex gap-1 flex-1 text-sm">${desktopNav}</nav>
      <div class="ms-auto hidden md:block">${searchForm("w-40")}</div>
      <button type="button" class="btn btn-ghost ms-auto md:ms-0 !px-3" data-lang aria-label="${l(ui.langLbl)}">${icon("languages", 18)}${lang === "ar" ? "Français" : "العربية"}</button>
      <nav aria-label="mobile" class="xl:hidden border-t p-3 grid gap-1 max-h-[75vh] overflow-y-auto" id="mobile-nav">
        <div class="md:hidden mb-2">${searchForm("flex-1 min-w-0")}</div>
        ${mobileNavLinks}
      </nav>
    </div>
  </header>`;
}

function footer() {
  const links = [
    ["/faq", ui.faq],
    ["/side-effects", ui.sideT],
    ["/sources", ui.sources],
    ["/privacy", ui.privacyT],
    ["/about", ui.nav[7].t],
  ];
  return `<footer class="bg-navy text-white mt-16 pb-24 xl:pb-0 noprint">
    <div class="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3 text-sm">
      <div><p class="font-bold text-lg">CancerGuide DZ</p><p class="opacity-90 mt-1">${l(ui.slogan)}</p></div>
      <nav aria-label="footer" class="grid gap-1">${links.map(([to, t]) => `<a href="#${to}" class="py-1.5 text-white/90" data-nav>${l(t)}</a>`).join("")}</nav>
      <div>
        <p class="opacity-90 leading-relaxed">${l(ui.disclaimer)}</p>
        <div class="mt-4 flex items-center gap-2">${l(ui.fs)}: ${[14, 16, 19].map((s) => `<button type="button" aria-label="${l(ui.fs)} ${s}" class="border border-white/40 rounded-lg min-w-[44px] min-h-[44px]" data-fs="${s}">${s === 14 ? "A−" : s === 16 ? "A" : "A+"}</button>`).join("")}</div>
      </div>
    </div>
  </footer>`;
}

function bottomNav(route) {
  const isActive = (p) => route.path === p;
  const tabs = [
    ["/", { ar: "الرئيسية", fr: "Accueil" }, "home"],
    ["/cancers", { ar: "السرطان", fr: "Cancers" }, "bookOpen"],
    ["/centers", { ar: "المراكز", fr: "Centres" }, "mapPin"],
    ["/support", { ar: "الدعم", fr: "Soutien" }, "heartHandshake"],
    ["/search", { ar: "بحث", fr: "Recherche" }, "search"],
  ];
  return `<nav aria-label="quick" class="xl:hidden fixed bottom-0 inset-x-0 z-20 bg-white border-t border-slate-200 grid grid-cols-5 noprint pb-[env(safe-area-inset-bottom)]">
    ${tabs.map(([to, t, ic]) => `<a href="#${to}" class="flex flex-col items-center justify-center gap-0.5 min-h-[56px] text-xs ${isActive(to) ? "text-teald font-semibold" : "text-mute"}" data-nav>${icon(ic, 22)}${l(t)}</a>`).join("")}
  </nav>`;
}

function crumbs(route) {
  const p = route.path;
  const id = p.split("/")[2];
  const c = cancers.find((x) => x.id === id);
  const m = {
    "/faq": ui.faq,
    "/sources": ui.sources,
    "/privacy": ui.privacyT,
    "/side-effects": ui.sideT,
    "/search": ui.searchLbl,
  };
  const cur = c
    ? c.n
    : ui.nav.find((x) => x.to === p)?.t || m[p] || ui.notFound;
  const mid = c ? [{ to: "/cancers", t: ui.nav[1].t }] : [];
  return `<nav aria-label="breadcrumb" class="noprint text-sm text-mute mb-4"><ol class="flex flex-wrap items-center gap-1">
    ${[{ to: "/", t: ui.nav[0].t }, ...mid].map((x) => `<li class="flex items-center gap-1"><a href="#${x.to}" class="hover:text-teald" data-nav>${l(x.t)}</a>${icon("chevronRight", 14, "rtl:rotate-180")}</li>`).join("")}
    <li aria-current="page" class="text-navy font-semibold">${l(cur)}</li></ol></nav>`;
}

function metaTitle(path) {
  const m = {
    "/faq": ui.faq,
    "/sources": ui.sources,
    "/privacy": ui.privacyT,
    "/side-effects": ui.sideT,
    "/search": ui.searchLbl,
  };
  const t =
    ui.nav.find((x) => x.to === path)?.t ||
    m[path] ||
    (path.startsWith("/cancers/") ? ui.nav[1].t : ui.notFound);
  document.title = `${l(t)} — CancerGuide DZ`;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", l(ui.subtitle));
}

/* ---------------- shared content ---------------- */
function disclaimer() {
  return `<aside class="card bg-teall border-teall flex gap-3 text-sm mt-8">${icon("info", 20, "shrink-0 text-teald mt-0.5")}<p>${l(ui.disclaimer)}</p></aside>`;
}

function refsHtml(id) {
  const list = [...((id && refs[id]) || []), ...refs.general];
  return `<section class="card mt-6">
    <h2 class="font-bold mb-2">${l(ui.refs)}</h2>
    <ul class="list-disc ms-6 text-sm">
      ${list.map((r) => `<li><a class="text-teald underline" href="${r.u}" target="_blank" rel="noreferrer">${r.o} — ${r.t}</a> <span class="text-mute">(${r.v ? l(ui.consulted) : l(ui.unverified)}${r.d ? ` · ${r.d}` : ""})</span></li>`).join("")}
    </ul>
    <p class="text-xs text-mute mt-2">${l(ui.refNote)}</p>
    ${id && cancers.some((c) => c.id === id) && !refs[id] ? `<p class="text-xs text-warnd mt-1">${l(ui.refPending)}</p>` : ""}
  </section>`;
}

/* ---------------- pages ---------------- */
function home() {
  const check = [
    { ar: "مجاني", fr: "Gratuit" },
    { ar: "بدون تسجيل", fr: "Sans inscription" },
    { ar: "بالعربية والفرنسية", fr: "Arabe et français" },
  ];
  return `<section class="bg-gradient-to-b from-teall to-soft"><div class="max-w-6xl mx-auto px-4 py-10 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
    <div>
      <p class="text-teald font-semibold mb-3">${l(ui.subtitle)}</p>
      <h1 class="text-3xl sm:text-5xl font-bold mb-4">${l(ui.h1)}</h1>
      <p class="text-ink2 text-lg mb-5">${l(ui.h2)}</p>
      <ul class="flex flex-wrap gap-2 mb-6 text-sm">
        ${check.map((c, i) => `<li class="inline-flex items-center gap-1 bg-white border border-slate-200 rounded-full px-3 py-1">${icon("check", 14)}${l(c)}</li>`).join("")}
      </ul>
      <div class="flex flex-wrap gap-3">
        ${["/cancers", "/centers", "/about"].map((to, i) => `<a href="#${to}" class="btn ${i === 0 ? "btn-primary" : "btn-ghost"} w-full sm:w-auto" data-nav>${l(ui.cta[i])}</a>`).join("")}
      </div>
    </div>
    <svg viewBox="0 0 300 220" aria-hidden="true" class="w-full max-w-sm mx-auto"><circle cx="150" cy="110" r="95" fill="#E8F5F2"></circle><path d="M150 170s-60-38-60-78a32 32 0 0 1 60-14 32 32 0 0 1 60 14c0 40-60 78-60 78z" fill="#238B83"></path><path d="M110 112h28l10-22 14 40 10-18h18" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></svg>
  </div></section>
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-xl sm:text-2xl font-bold mt-14 mb-5">${l(ui.help)}</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      ${ui.cards
        .map((c, i) => {
          const Ic = [
            "microscope",
            "clipboardList",
            "pill",
            "mapPin",
            "heartHandshake",
            "helpCircle",
          ][i];
          return `<a href="#${c.to}" class="card flex items-center gap-4" data-nav><span class="w-12 h-12 rounded-xl bg-teall text-teald flex items-center justify-center shrink-0">${icon(Ic, 24)}</span><span class="font-semibold text-lg">${l(c.t)}</span></a>`;
        })
        .join("")}
    </div>
    <h2 class="text-xl sm:text-2xl font-bold mt-14 mb-5">${l(ui.featured)}</h2>
    <div class="grid sm:grid-cols-3 gap-4">
      ${cancers
        .slice(0, 3)
        .map(
          (c) =>
            `<a href="#/cancers/${c.id}" class="card hover:shadow-md" data-nav><b>${l(c.n)}</b><p class="text-sm text-mute mt-1">${l(c.d)}</p></a>`,
        )
        .join("")}
    </div>
    <h2 class="text-xl sm:text-2xl font-bold mt-14 mb-2">${l(ui.journeyT)}</h2>
    <p class="text-mute mb-5">${l(ui.journeyNote)}</p>
    <ol class="max-w-3xl">
      ${ui.journey.map((s, i) => `<li class="relative flex gap-4 pb-6 last:pb-0">${i < ui.journey.length - 1 ? '<span aria-hidden="true" class="absolute top-9 bottom-0 start-[15px] w-px bg-teald/30"></span>' : ""}<span class="bg-teald text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-semibold z-[1]">${i + 1}</span><div class="card !p-4 flex-1"><b>${l(s.t)}</b><p class="text-ink2">${l(s.b)}</p></div></li>`).join("")}
    </ol>
    <aside class="card mt-12 border-s-4 border-s-warn flex gap-3 text-base sm:text-lg">${icon("info", 20, "shrink-0 text-warnd mt-1")}<p>${l(ui.important)}</p></aside>
    <p class="card mt-4 text-sm">${l(ui.trust)} <a href="#/sources" class="text-teald" data-nav>${l(ui.sources)}</a></p>
  </div>`;
}

function library() {
  return `${H(l(ui.nav[1].t))}<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    ${cancers.map((c) => `<a href="#/cancers/${c.id}" class="card hover:shadow-md" data-nav><b>${l(c.n)}</b><p class="text-sm text-mute mt-1">${l(c.d)}</p></a>`).join("")}
  </div>${disclaimer()}`;
}

function detail(id) {
  const c = cancers.find((x) => x.id === id);
  if (!c) return notFoundPage();
  const toc = [
    { ar: "التعريف", fr: "Définition" },
    { ar: "الخطورة", fr: "Risques" },
    { ar: "العلامات", fr: "Signes" },
    { ar: "التشخيص", fr: "Diagnostic" },
    { ar: "العلاج", fr: "Traitement" },
  ];
  const rows = [
    [ui.sec.def, c.d],
    [ui.sec.risk, c.r],
    [ui.sec.signs, c.s],
    [ui.sec.dx, c.dx],
    [ui.sec.tx, c.tx],
  ];
  return `<article>
    <div class="flex justify-between items-start gap-3">
      ${H(l(c.n))}
      <button type="button" class="btn btn-ghost noprint shrink-0" data-print>${icon("printer", 16)}${l(ui.print)}</button>
    </div>
    <nav aria-label="toc" class="noprint flex gap-2 overflow-x-auto pb-3 mb-3 -mx-4 px-4">
      ${toc.map((t, i) => `<button type="button" class="chip shrink-0" data-toc="${i}">${l(t)}</button>`).join("")}
    </nav>
    <div class="grid gap-4">
      ${rows.map(([t, b], i) => `<section id="s${i}" class="card"><h2 class="font-bold text-teald text-lg mb-2">${l(t)}</h2><p class="text-ink2">${l(b)}</p></section>`).join("")}
      <section class="card"><p class="text-ink2">${l(ui.generic)}</p></section>
    </div>
    ${refsHtml(c.id)}
    ${disclaimer()}
  </article>`;
}

function topicPage(k) {
  const t = topics[k];
  const urgent = t.urgent
    ? `<div class="card border-2 border-danger bg-red-50 mb-6"><h2 class="font-bold text-dangerd flex gap-2 items-center">${icon("alertTriangle")}${l(ui.urgent)}</h2><ul class="list-disc ms-6 mt-2">${t.urgent.map((u, i) => `<li>${l(u)}</li>`).join("")}</ul>
      <p class="text-sm mt-2">${l({ ar: "اتصل فوراً بفريق الأورام المعالج أو اطلب تقييماً طارئاً ليلاً أو نهاراً، وأخبر الطقم أنك تتلقى علاجاً كيميائياً. بحسب مراكز CDC الأمريكية: الحمى أثناء العلاج الكيميائي طارئ طبي، ويُنصح بالاتصال فوراً عند 38°م (100.4°ف) أو أكثر؛ قد يحدد فريقك عتبة مختلفة فاتبع تعليماته. لا تتناول خافضاً للحرارة قبل استشارة الفريق، ولا توقف العلاج أو تؤخره بنفسك. باقي العلامات مبادئ عامة للطوارئ ولا تغني عن تعليمات فريقك.", fr: "Contactez immédiatement votre équipe d’oncologie ou les urgences, de jour comme de nuit, en précisant que vous êtes sous chimiothérapie. Selon les CDC (États-Unis), une fièvre pendant la chimiothérapie est une urgence médicale : appeler sans attendre dès 38 °C (100,4 °F) ; votre équipe peut fixer un autre seuil, suivez ses consignes. Ne prenez pas d’antipyrétique sans l’avis de l’équipe et n’arrêtez ni ne retardez le traitement seul. Les autres signes sont des principes généraux d’urgence et ne remplacent pas les consignes de votre équipe." })}</p></div>`
    : "";
  const items = `<div class="grid gap-4">
      ${t.items.map((i, x) => `<section class="card flex gap-4"><span class="w-9 h-9 rounded-full bg-teall text-teald font-bold flex items-center justify-center shrink-0">${x + 1}</span><div><h2 class="font-bold text-lg mb-1">${l(i.t)}</h2><p class="text-ink2">${l(i.b)}</p></div></section>`).join("")}
    </div>`;
  const seeTx =
    k === "treatments"
      ? `<a href="#/side-effects" class="btn btn-soft mt-4" data-nav>${l(ui.seeTx)}</a>`
      : "";
  return `${H(l(t.title))}${urgent}${items}${seeTx}${refsHtml(k)}${disclaimer()}`;
}

/* ---------------- centers ---------------- */
const centersState = { q: "", w: "", s: [] };

function centersFiltered() {
  const { q, w, s } = centersState;
  return centers.filter(
    (c) =>
      (!w || c.wilaya === w) &&
      (!q || (c.name + c.city).toLowerCase().includes(q.toLowerCase())) &&
      s.every((x) => c.services.includes(x)),
  );
}

function centersResultsHtml(res) {
  if (res.length === 0) return `<div class="card">${l(ui.filters.empty)}</div>`;
  return `<div class="grid sm:grid-cols-2 gap-4">
    ${res
      .map((c) => {
        const services = c.services
          .map(
            (x) =>
              `<span class="bg-teall text-teald text-xs rounded-full px-2 py-0.5">${l(ui.srv[x])}</span>`,
          )
          .join("");
        const extra =
          c.status === "verified"
            ? `<p class="text-sm">${c.address}</p>${c.contact ? `<p class="text-sm">${l(ui.contact)}: ${c.contact}</p>` : ""}<div class="flex flex-wrap gap-1 my-2">${services}</div><p class="text-xs text-mute">${c.source} · ${c.verifiedOn}</p>`
            : `<p class="text-warnd text-sm">${l(ui.filters.pending)}</p>`;
        return `<div class="card"><b>${c.name}</b><p class="text-sm">${c.wilaya} — ${c.city}</p>${extra}</div>`;
      })
      .join("")}
  </div>`;
}

function centersUpdateResults() {
  const res = centersFiltered();
  const el = document.getElementById("centers-results");
  if (el) el.innerHTML = centersResultsHtml(res);
  const count = document.querySelector("[data-count]");
  if (count) count.textContent = `${res.length} ${l(ui.filters.n)}`;
}

function centersPage() {
  const wil = [...new Set(centers.map((c) => c.wilaya))];
  return `${H(l(ui.nav[5].t))}
    <div class="card grid gap-3">
      <input class="field" placeholder="${l(ui.filters.q)}" aria-label="q" data-q>
      <select class="field" aria-label="wilaya" data-wilaya><option value="">${l(ui.filters.wilaya)}</option>${wil.map((x) => `<option>${x}</option>`).join("")}</select>
      <div class="flex flex-wrap gap-3">${Object.keys(ui.srv)
        .map(
          (k) =>
            `<label class="chip"><input type="checkbox" data-service="${k}" ${centersState.s.includes(k) ? "checked" : ""}>${l(ui.srv[k])}</label>`,
        )
        .join("")}</div>
      <button type="button" class="btn btn-ghost w-fit" data-clear>${l(ui.filters.clear)}</button>
    </div>
    <p class="my-3 text-mute" data-count>${centersFiltered().length} ${l(ui.filters.n)}</p>
    <div id="centers-results">${centersResultsHtml(centersFiltered())}</div>
    ${disclaimer()}`;
}

/* ---------------- other pages ---------------- */
function supportPage() {
  const qs = [
    {
      ar: "ما النوع الدقيق لسرطاني؟",
      fr: "Quel est le type exact de mon cancer ?",
    },
    { ar: "ما مرحلته؟", fr: "Quel est son stade ?" },
    {
      ar: "ما الفحوص الإضافية اللازمة؟",
      fr: "Quels examens supplémentaires sont nécessaires ?",
    },
    { ar: "ما هدف العلاج؟", fr: "Quel est l'objectif du traitement ?" },
    {
      ar: "ما الآثار الجانبية التي أراقبها؟",
      fr: "Quels effets secondaires surveiller ?",
    },
    { ar: "من أتصل به عند المشكلة؟", fr: "Qui contacter en cas de problème ?" },
    {
      ar: "متى التقييم القادم؟",
      fr: "Quand aura lieu la prochaine évaluation ?",
    },
  ];
  return `${H(l(ui.nav[6].t))}
    <div class="card mb-4"><p>${l({ ar: "الدعم النفسي، التغذية، النشاط البدني المناسب طبياً، والمساعدة الاجتماعية جزء من الرعاية. اطلب تقييماً مختصاً؛ لا نذكر شروط استحقاق أو خدمات غير موثّقة.", fr: "Soutien psychologique, nutrition, activité physique adaptée et aide sociale font partie des soins. Demandez une évaluation spécialisée ; nous n'indiquons aucun critère d'éligibilité ni service non vérifié." })}</p></div>
    <div class="card">
      <div class="flex justify-between"><h2 class="font-bold">${l({ ar: "أسئلة لطبيب الأورام", fr: "Questions pour votre oncologue" })}</h2><button type="button" class="btn btn-ghost noprint" data-print>${icon("printer", 16)}${l(ui.print)}</button></div>
      <div class="grid md:grid-cols-2 gap-6 mt-3"><ul dir="rtl" class="space-y-2">${qs.map((q) => `<li>☐ ${q.ar}</li>`).join("")}</ul><ul dir="ltr" class="space-y-2">${qs.map((q) => `<li>☐ ${q.fr}</li>`).join("")}</ul></div>
    </div>
    ${disclaimer()}`;
}

function faqPage() {
  return `${H(l(ui.faq))}<div class="grid gap-2">
    ${faqs.map((f, i) => `<div class="card p-0"><button type="button" data-faq="${i}" aria-expanded="false" class="w-full flex items-center justify-between gap-3 p-4 min-h-[56px] text-start font-semibold">${l(f.q)}${icon("chevronDown", 16, "shrink-0 transition")}</button><p class="px-4 pb-4 text-ink2 hidden">${l(f.a)}</p></div>`).join("")}
  </div>${disclaimer()}`;
}

const norm = (x) =>
  x
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f\u064b-\u065f\u0640]/g, "")
    .replace(/[إأآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه");

function searchPage(searchParams) {
  const raw = (searchParams.get("q") || "").trim();
  const q = norm(raw);
  const has = (...x) =>
    x.some((y) => norm(y.ar).includes(q) || norm(y.fr).includes(q));
  const r = !q
    ? []
    : [
        ...cancers
          .filter((c) => has(c.n, c.d, c.r, c.s, c.dx, c.tx))
          .map((c) => ({ to: "/cancers/" + c.id, t: l(c.n) })),
        ...Object.entries(topics).flatMap(([k, tp]) =>
          tp.items
            .filter((i) => has(i.t, i.b))
            .map((i) => ({ to: "/" + k, t: l(i.t) })),
        ),
        ...faqs
          .filter((f) => has(f.q, f.a))
          .map((f) => ({ to: "/faq", t: l(f.q) })),
        ...centers
          .filter((c) => norm(c.name + c.city + c.wilaya).includes(q))
          .map((c) => ({ to: "/centers", t: c.name })),
      ];
  const body = !q
    ? `<p class="card">${l(ui.searchHint)}</p>`
    : r.length
      ? `<ul class="grid gap-2">${r.map((x) => `<li><a href="#${x.to}" class="card block hover:shadow-md" data-nav>${x.t}</a></li>`).join("")}</ul>`
      : `<p class="card">${l(ui.noRes)}</p>`;
  return `${H(l(ui.searchLbl) + ": " + raw)}${body}`;
}

function sourcesPage() {
  const ev = [
    [
      { ar: "أدلة راسخة", fr: "Données établies" },
      {
        ar: "التدخين سبب رئيسي لسرطان الرئة؛ عدوى HPV المستمرة سبب لمعظم سرطانات عنق الرحم؛ التشخيص يتأكد عادة بالخزعة والفحص المرضي؛ الحمى أثناء العلاج الكيميائي تستدعي اتصالاً فورياً بالفريق.",
        fr: "Le tabac est la cause principale du cancer du poumon ; le HPV persistant est à l’origine de la plupart des cancers du col ; le diagnostic repose en général sur la biopsie et l’anatomopathologie ; une fièvre sous chimiothérapie impose d’appeler l’équipe sans attendre.",
      },
    ],
    [
      {
        ar: "توصيات تختلف بين البلدان",
        fr: "Recommandations variables selon les pays",
      },
      {
        ar: "أعمار الكشف وفتراته وطرقه. عرضنا توصيات منظمة الصحة العالمية كمرجع عالمي فقط؛ لم نتحقق من توصية جزائرية رسمية حالية.",
        fr: "Âges, intervalles et méthodes de dépistage. Les recommandations OMS sont présentées comme référence mondiale ; aucune recommandation algérienne officielle actuelle n’a été vérifiée.",
      },
    ],
    [
      { ar: "مجالات غير مؤكدة", fr: "Zones d’incertitude" },
      {
        ar: "النتائج الفردية لا يمكن وعد أحد بها؛ الطب البديل لم يثبت علمياً أنه يعالج السرطان.",
        fr: "Aucun résultat individuel ne peut être promis ; l’efficacité des médecines alternatives n’est pas démontrée.",
      },
    ],
  ];
  return `${H(l(ui.sources))}
    <div class="grid gap-3 mb-6"><h2 class="font-bold">${l(ui.evid)}</h2>${ev.map(([t, b]) => `<div class="card"><b class="text-teald">${l(t)}</b><p>${l(b)}</p></div>`).join("")}</div>
    <p class="mb-4">${l(ui.srcNote)}</p>
    <ul class="grid gap-2">${sources.map((s) => `<li class="card"><a class="text-teald" href="${s.url}" target="_blank" rel="noreferrer">${s.org}</a></li>`).join("")}</ul>`;
}

function staticPage(t, b) {
  return `${H(l(t))}<div class="card space-y-3">${b.map((x) => `<p>${l(x)}</p>`).join("")}</div>${disclaimer()}`;
}

function notFoundPage() {
  return `<div class="text-center py-20">${H("404")}<p>${l(ui.notFound)}</p><a href="#/" class="text-teald" data-nav>${l(ui.nav[0].t)}</a></div>`;
}

function pageContent(route) {
  switch (route.page) {
    case "home":
      return home();
    case "library":
      return library();
    case "detail":
      return detail(route.params.id);
    case "topic":
      return topicPage(route.key);
    case "centers":
      return centersPage();
    case "support":
      return supportPage();
    case "faq":
      return faqPage();
    case "search":
      return searchPage(route.searchParams);
    case "sources":
      return sourcesPage();
    case "static":
      return staticPage(route.t, route.b);
    default:
      return notFoundPage();
  }
}

/* ---------------- render + events ---------------- */
function renderApp() {
  const route = currentRoute();
  const page = pageContent(route);
  const mainContent =
    route.page === "home"
      ? page
      : `<div class="max-w-6xl mx-auto px-4 py-6 md:py-10">${crumbs(route)}${page}</div>`;
  document.getElementById("root").innerHTML = [
    skipLink(),
    header(route),
    `<main id="main" tabindex="-1" class="outline-none">${mainContent}</main>`,
    footer(),
    bottomNav(route),
  ].join("\n");
  window.scrollTo(0, 0);
  metaTitle(route.path);
}

function onRootClick(e) {
  const navEl = e.target.closest("[data-nav]");
  if (navEl) {
    closeMobileNav();
    return;
  }
  const faqBtn = e.target.closest("[data-faq]");
  if (faqBtn) {
    const open = faqBtn.getAttribute("aria-expanded") !== "true";
    faqBtn.setAttribute("aria-expanded", open ? "true" : "false");
    const ans = faqBtn.nextElementSibling;
    if (ans) ans.classList.toggle("hidden", !open);
    const chev = faqBtn.querySelector("svg");
    if (chev) chev.classList.toggle("rotate-180", open);
    return;
  }
  const tocBtn = e.target.closest("[data-toc]");
  if (tocBtn) {
    document
      .getElementById("s" + tocBtn.dataset.toc)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  const printBtn = e.target.closest("[data-print]");
  if (printBtn) {
    window.print();
    return;
  }
  const fsBtn = e.target.closest("[data-fs]");
  if (fsBtn) {
    document.documentElement.style.setProperty("--fs", fsBtn.dataset.fs + "px");
    return;
  }
  const menuBtn = e.target.closest("[data-menu]");
  if (menuBtn) {
    const nav = document.getElementById("mobile-nav");
    if (nav) toggleMobileNav(!nav.classList.contains("open"));
    return;
  }
  const langBtn = e.target.closest("[data-lang]");
  if (langBtn) {
    setLang(getLang() === "ar" ? "fr" : "ar");
    return;
  }
  const skip = e.target.closest("[data-skip]");
  if (skip) {
    e.preventDefault();
    const m = document.getElementById("main");
    m?.focus();
    m?.scrollIntoView({ block: "start" });
    return;
  }
  const clearBtn = e.target.closest("[data-clear]");
  if (clearBtn) {
    centersState.q = "";
    centersState.w = "";
    centersState.s = [];
    const q = document.querySelector("[data-q]");
    if (q) q.value = "";
    const w = document.querySelector("[data-wilaya]");
    if (w) w.value = "";
    document.querySelectorAll("[data-service]").forEach((c) => {
      c.checked = false;
    });
    centersUpdateResults();
    return;
  }
}

function onRootChange(e) {
  const qEl = e.target.closest("[data-q]");
  if (qEl) {
    centersState.q = qEl.value;
    centersUpdateResults();
    return;
  }
  const wEl = e.target.closest("[data-wilaya]");
  if (wEl) {
    centersState.w = wEl.value;
    centersUpdateResults();
    return;
  }
  const sEl = e.target.closest("[data-service]");
  if (sEl) {
    centersState.s = sEl.checked
      ? [...centersState.s, sEl.dataset.service]
      : centersState.s.filter((x) => x !== sEl.dataset.service);
    centersUpdateResults();
  }
}

function onRootInput(e) {
  const qEl = e.target.closest("[data-q]");
  if (qEl) {
    centersState.q = qEl.value;
    centersUpdateResults();
  }
}

function onRootSubmit(e) {
  const form = e.target.closest("[data-search-form]");
  if (!form) return;
  e.preventDefault();
  const q = (form.querySelector("input").value || "").trim();
  closeMobileNav();
  navigate("/search?q=" + encodeURIComponent(q));
}

function init() {
  window.addEventListener("hashchange", renderApp);
  const root = document.getElementById("root");
  root.addEventListener("click", onRootClick);
  root.addEventListener("change", onRootChange);
  root.addEventListener("input", onRootInput);
  root.addEventListener("submit", onRootSubmit);
  renderApp();
}

onLangChange(renderApp);

export { renderApp, init };
