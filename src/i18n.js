let lang = localStorage.getItem("lang") || "ar";
const listeners = [];

function setDom() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("lang", lang);
}
setDom();

export const ui = {
  consulted: { ar: "اطُّلع عليه في 11/11/2026", fr: "consulté le 11/11/2026" },
  unverified: { ar: "الرابط لم يُتحقق منه بعد", fr: "lien non vérifié" },
  refPending: {
    ar: "لا يوجد بعد مرجع خاص بهذا السرطان؛ المحتوى عام ويحتاج مراجعة ومصدراً قبل النشر.",
    fr: "Pas encore de référence spécifique à ce cancer ; contenu général à sourcer et relire avant publication.",
  },
  evid: { ar: "مستوى الأدلة", fr: "Niveau de preuve" },
  faq: { ar: "الأسئلة الشائعة", fr: "Questions fréquentes" },
  sources: { ar: "المصادر العلمية", fr: "Sources scientifiques" },
  sideT: { ar: "الآثار الجانبية", fr: "Effets secondaires" },
  skip: { ar: "تخطَّ إلى المحتوى", fr: "Aller au contenu" },
  featured: { ar: "محتوى تثقيفي مختار", fr: "Contenus éducatifs à la une" },
  refs: { ar: "المراجع", fr: "Références" },
  searchLbl: { ar: "بحث", fr: "Rechercher" },
  langLbl: { ar: "تغيير اللغة إلى الفرنسية", fr: "Passer en arabe" },
  searchHint: {
    ar: "اكتب كلمة للبحث (سرطان، خزعة، علاج…).",
    fr: "Saisissez un mot (cancer, biopsie, traitement…).",
  },
  refNote: {
    ar: "مراجع المنظمات المعتمدة. تأكد من العنوان الدقيق وتاريخ النشر وأضف تاريخ الاطلاع قبل النشر النهائي.",
    fr: "Organismes de référence. Vérifiez le titre exact et la date de publication, et ajoutez la date de consultation avant publication.",
  },
  seeTx: {
    ar: "الآثار الجانبية وعلامات الإنذار",
    fr: "Effets secondaires et signes d’alerte",
  },
  contact: { ar: "الاتصال", fr: "Contact" },
  nav: [
    { to: "/", t: { ar: "الصفحة الرئيسية", fr: "Accueil" } },
    { to: "/cancers", t: { ar: "فهم السرطان", fr: "Comprendre le cancer" } },
    {
      to: "/prevention",
      t: { ar: "الوقاية والكشف المبكر", fr: "Prévention et dépistage" },
    },
    { to: "/diagnosis", t: { ar: "التشخيص", fr: "Diagnostic" } },
    { to: "/treatments", t: { ar: "العلاجات", fr: "Traitements" } },
    { to: "/centers", t: { ar: "المراكز الطبية", fr: "Centres de soins" } },
    { to: "/support", t: { ar: "الدعم والمرافقة", fr: "Accompagnement" } },
    { to: "/about", t: { ar: "من نحن", fr: "À propos" } },
  ],
  subtitle: {
    ar: "منصة للمعلومات الطبية ومرافقة مرضى السرطان في الجزائر.",
    fr: "Plateforme d'information et d'accompagnement des patients atteints de cancer en Algérie.",
  },
  slogan: {
    ar: "المعلومة الصحيحة، في الوقت المناسب، لكل مريض.",
    fr: "La bonne information, au bon moment, pour chaque patient.",
  },
  h1: {
    ar: "لست وحدك في رحلة العلاج.",
    fr: "Vous n'êtes pas seul dans votre parcours de soins.",
  },
  h2: {
    ar: "نفهمك، نرافقك، ونوفر لك المعلومات الطبية الموثوقة لتكون أكثر وعياً وفهماً لرحلتك مع السرطان.",
    fr: "Nous vous comprenons, vous accompagnons et vous offrons une information médicale fiable pour mieux comprendre votre parcours.",
  },
  disclaimer: {
    ar: "المحتوى المنشور في CancerGuide DZ مخصص للتثقيف الصحي ولا يُعد بديلاً عن الاستشارة الطبية أو التشخيص أو العلاج. يجب مناقشة القرارات الطبية مع الطبيب المختص.",
    fr: "Les contenus de CancerGuide DZ sont destinés à l'information et à l'éducation en santé. Ils ne remplacent en aucun cas une consultation médicale, un diagnostic ou un traitement prescrit par un professionnel de santé.",
  },
  important: {
    ar: "المعلومة الطبية الموثوقة تساعدك على فهم حالتك والمشاركة في قرارات العلاج، لكنها لا تعوض استشارة الطبيب المختص.",
    fr: "Une information médicale fiable vous aide à comprendre votre situation et à participer aux décisions, mais ne remplace pas l'avis du médecin spécialiste.",
  },
  cta: [
    { ar: "اكتشف المعلومات الطبية", fr: "Découvrir les informations" },
    { ar: "ابحث عن مركز علاج", fr: "Trouver un centre" },
    { ar: "تعرف على خدماتنا", fr: "Nos services" },
  ],
  help: { ar: "كيف يمكننا مساعدتك؟", fr: "Comment pouvons-nous vous aider ?" },
  cards: [
    {
      to: "/cancers",
      t: { ar: "فهم أنواع السرطان", fr: "Comprendre les cancers" },
    },
    {
      to: "/diagnosis",
      t: { ar: "فهم التشخيص والفحوصات", fr: "Comprendre le diagnostic" },
    },
    {
      to: "/treatments",
      t: { ar: "معرفة طرق العلاج", fr: "Découvrir les traitements" },
    },
    {
      to: "/centers",
      t: { ar: "البحث عن مراكز العلاج", fr: "Trouver un centre de soins" },
    },
    {
      to: "/support",
      t: {
        ar: "الدعم النفسي والاجتماعي",
        fr: "Soutien psychologique et social",
      },
    },
    { to: "/faq", t: { ar: "الأسئلة الشائعة", fr: "Questions fréquentes" } },
  ],
  journeyT: { ar: "رحلة المريض", fr: "Parcours du patient" },
  journeyNote: {
    ar: "المسار الفعلي يختلف بحسب نوع السرطان والحالة السريرية لكل مريض.",
    fr: "Le parcours réel varie selon le type de cancer et la situation clinique de chaque patient.",
  },
  journey: [
    {
      t: { ar: "الاشتباه بالمرض", fr: "Suspicion" },
      b: {
        ar: "ظهور علامة أو نتيجة فحص تستدعي المتابعة الطبية.",
        fr: "Un signe ou un examen justifie un avis médical.",
      },
    },
    {
      t: { ar: "الاستشارة والفحوصات", fr: "Consultation et examens" },
      b: {
        ar: "فحص سريري وتحاليل وتصوير حسب الحالة.",
        fr: "Examen clinique, analyses et imagerie selon le cas.",
      },
    },
    {
      t: { ar: "تأكيد التشخيص والخزعة", fr: "Diagnostic et biopsie" },
      b: {
        ar: "التشخيص النهائي يعتمد عادة على الفحص التشريحي المرضي.",
        fr: "Le diagnostic repose en général sur l'examen anatomopathologique.",
      },
    },
    {
      t: { ar: "تحديد مرحلة المرض", fr: "Bilan d’extension" },
      b: {
        ar: "تقدير مدى انتشار المرض لتوجيه القرار.",
        fr: "Évaluer l'extension de la maladie pour guider la décision.",
      },
    },
    {
      t: { ar: "اجتماع RCP", fr: "RCP" },
      b: {
        ar: "فريق متعدد التخصصات يناقش الملف.",
        fr: "Une équipe pluridisciplinaire discute le dossier.",
      },
    },
    {
      t: { ar: "اختيار الخطة العلاجية", fr: "Plan de traitement" },
      b: {
        ar: "تُناقش الخطة مع المريض.",
        fr: "Le plan est discuté avec le patient.",
      },
    },
    {
      t: { ar: "العلاج والمتابعة", fr: "Traitement et suivi" },
      b: {
        ar: "تنفيذ العلاج وتقييم الاستجابة والمتابعة.",
        fr: "Traitement, évaluation de la réponse et suivi.",
      },
    },
  ],
  trust: {
    ar: "يستند المحتوى إلى منظمات علمية معروفة (منظمة الصحة العالمية، IARC، NCI، INCa). راجع صفحة المصادر.",
    fr: "Les contenus s’appuient sur des organismes reconnus (OMS, CIRC, NCI, INCa). Voir la page Sources.",
  },
  ph: {
    ar: "ابحث: سرطان، خزعة، مركز…",
    fr: "Rechercher : cancer, biopsie, centre…",
  },
  sec: {
    def: { ar: "التعريف", fr: "Définition" },
    risk: {
      ar: "عوامل الخطورة (ليست أسباباً مؤكدة)",
      fr: "Facteurs de risque (≠ causes prouvées)",
    },
    signs: {
      ar: "علامات محتملة (لا تعني بالضرورة السرطان؛ وقد لا توجد أعراض في المراحل المبكرة)",
      fr: "Signes possibles (pas forcément un cancer ; la maladie peut être silencieuse au début)",
    },
    dx: { ar: "التشخيص", fr: "Diagnostic" },
    tx: {
      ar: "الخيارات العلاجية (يحددها الفريق الطبي)",
      fr: "Options de traitement (décidées par l’équipe médicale)",
    },
  },
  generic: {
    ar: "الخزعة والفحص التشريحي المرضي يؤكدان التشخيص ويحددان النوع. المرحلة تقدّر مدى الانتشار. المتابعة تكون دورية وفق توصيات الفريق المعالج. راجع الطبيب عند أي علامة مستمرة أو مقلقة.",
    fr: "La biopsie et l'anatomopathologie confirment le diagnostic et le type. Le stade estime l'extension. Le suivi est régulier selon l'équipe soignante. Consultez devant tout signe persistant ou inquiétant.",
  },
  filters: {
    q: { ar: "اسم المركز أو المدينة", fr: "Nom ou ville" },
    wilaya: { ar: "كل الولايات", fr: "Toutes les wilayas" },
    clear: { ar: "مسح الفلاتر", fr: "Effacer les filtres" },
    n: { ar: "نتيجة", fr: "résultat(s)" },
    empty: {
      ar: "لا توجد مراكز مطابقة. قاعدة البيانات قيد التوثيق ولا تدّعي الشمول.",
      fr: "Aucun centre correspondant. L'annuaire est en cours de vérification et n'est pas exhaustif.",
    },
    pending: {
      ar: "معلومات في انتظار التحقق الرسمي",
      fr: "Information en attente de vérification officielle",
    },
  },
  srv: {
    radiotherapy: { ar: "العلاج الإشعاعي", fr: "Radiothérapie" },
    chemo: { ar: "العلاج الكيميائي", fr: "Chimiothérapie" },
    consult: { ar: "استشارات الأورام", fr: "Consultations" },
    surgery: { ar: "جراحة الأورام", fr: "Chirurgie oncologique" },
  },
  noRes: { ar: "لا نتائج.", fr: "Aucun résultat." },
  urgent: {
    ar: "علامات تستدعي تقييماً طبياً عاجلاً",
    fr: "Signes nécessitant une évaluation médicale urgente",
  },
  whenDr: { ar: "متى أراجع الطبيب؟", fr: "Quand consulter ?" },
  print: { ar: "طباعة", fr: "Imprimer" },
  fs: { ar: "حجم الخط", fr: "Taille du texte" },
  notFound: { ar: "الصفحة غير موجودة", fr: "Page introuvable" },
  privacyT: { ar: "الخصوصية", fr: "Confidentialité" },
  privacyB: {
    ar: "لا تسجيل، لا رفع ملفات طبية، ولا جمع لأي بيانات صحية أو شخصية. يُحفظ فقط اختيار اللغة وحجم الخط في متصفحك.",
    fr: "Pas d'inscription, pas de dépôt de dossier médical, aucune collecte de données de santé ou personnelles. Seuls la langue et la taille du texte sont mémorisés dans votre navigateur.",
  },
  aboutB: {
    ar: "CancerGuide DZ مبادرة تعليمية مستقلة يقودها طلبة طب لتحسين الوصول إلى معلومات مفهومة عن السرطان في الجزائر. ليست منصة رسمية لوزارة الصحة ولا تقدم تشخيصاً أو استشارة طبية.",
    fr: "CancerGuide DZ est une initiative éducative indépendante menée par des étudiants en médecine. Ce n'est pas une plateforme officielle du ministère de la Santé et elle ne fournit ni diagnostic ni consultation.",
  },
  review: {
    ar: "من يراجع المحتوى؟ أُعدّ المحتوى من طرف طلبة طب، ويجب أن يراجعه مهنيون صحيون مؤهلون قبل النشر. لم تتم أي مراجعة سريرية بعد. [فريق المشروع: يُستكمل]",
    fr: "Qui relit le contenu ? Rédigé par des étudiants en médecine, il doit être relu par des professionnels qualifiés avant publication. Aucune relecture clinique n'a encore eu lieu. [Équipe : à compléter]",
  },
  srcNote: {
    ar: "الروابط تشير إلى المواقع الرئيسية للمنظمات. أضف عنوان الوثيقة وتاريخ نشرها وتاريخ الاطلاع قبل النشر؛ لم نخترع أي مرجع.",
    fr: "Les liens pointent vers les sites des organismes. Ajoutez titre exact, date de publication et date de consultation avant publication ; aucune référence n'a été inventée.",
  },
};

export const l = (x) => x[lang];
export const getLang = () => lang;

export function setLang(newLang) {
  lang = newLang;
  setDom();
  listeners.forEach((fn) => fn());
}

export function onLangChange(fn) {
  listeners.push(fn);
}
