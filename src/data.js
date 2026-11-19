const L = (ar, fr) => ({ ar, fr });
export const cancers = [
  {
    id: "breast",
    n: L("سرطان الثدي", "Cancer du sein"),
    d: L(
      "تكاثر خبيث لخلايا قنوات الثدي أو فصيصاته.",
      "Prolifération maligne de cellules des canaux ou lobules mammaires.",
    ),
    r: L(
      "التقدم في السن، التاريخ العائلي والعوامل الوراثية، السمنة، الكحول، قلة النشاط البدني. وتحدث نحو نصف الحالات لدى نساء ليس لديهن عامل خطورة غير الجنس والعمر (WHO).",
      "Âge, antécédents familiaux/génétiques, obésité, alcool, sédentarité. Environ la moitié des cas surviennent chez des femmes sans autre facteur de risque que le sexe et l’âge (OMS).",
    ),
    s: L(
      "كتلة أو تثخّن في الثدي (غالباً دون ألم)، تغير في الحجم أو الشكل أو الجلد أو الحلمة. ليست كل كتلة سرطاناً، وقد لا توجد أعراض في البداية.",
      "Masse ou épaississement du sein (souvent indolore), changement de taille, de forme, de la peau ou du mamelon. Toute masse n’est pas un cancer ; la maladie peut aussi être silencieuse au début.",
    ),
    dx: L(
      "فحص سريري، تصوير الثدي (ماموغرافيا/إيكوغرافيا)، خزعة، ثم مستقبلات ER/PR/HER2.",
      "Examen clinique, imagerie (mammographie/échographie), biopsie, puis récepteurs ER/PR/HER2.",
    ),
    tx: L(
      "جراحة، علاج إشعاعي، علاج كيميائي، علاج هرموني، علاجات موجّهة — بحسب الحالة.",
      "Chirurgie, radiothérapie, chimiothérapie, hormonothérapie, thérapies ciblées selon le cas.",
    ),
  },
  {
    id: "colorectal",
    n: L("سرطان القولون والمستقيم", "Cancer colorectal"),
    d: L(
      "ورم خبيث ينشأ في الغشاء المخاطي للقولون أو المستقيم، وقد يتطور من سلائل.",
      "Tumeur maligne de la muqueuse du côlon ou du rectum, pouvant se développer à partir de polypes.",
    ),
    r: L(
      "العمر، السلائل، أمراض الأمعاء الالتهابية، التاريخ العائلي، السمنة، التدخين، الكحول.",
      "Âge, polypes, MICI, antécédents familiaux, obésité, tabac, alcool.",
    ),
    s: L(
      "دم في البراز، تغير مستمر في الإخراج، ألم بطني، فقر دم. قد لا توجد أعراض مبكراً.",
      "Sang dans les selles, changement persistant du transit, douleurs, anémie. Peut être silencieux.",
    ),
    dx: L(
      "تنظير القولون مع خزعة، تصوير مقطعي/رنين لتحديد المرحلة.",
      "Coloscopie avec biopsie, scanner/IRM pour le bilan d’extension.",
    ),
    tx: L(
      "جراحة، علاج كيميائي، علاج إشعاعي (للمستقيم خاصة)، علاجات موجّهة.",
      "Chirurgie, chimiothérapie, radiothérapie (surtout rectum), thérapies ciblées.",
    ),
  },
  {
    id: "lung",
    n: L("سرطان الرئة", "Cancer du poumon"),
    d: L(
      "ورم خبيث ينشأ من خلايا الشعب الهوائية أو النسيج الرئوي.",
      "Tumeur maligne naissant des bronches ou du tissu pulmonaire.",
    ),
    r: L(
      "التدخين هو العامل الأهم؛ التعرض للرادون والأسبستوس وتلوث الهواء.",
      "Le tabac est le facteur principal ; radon, amiante, pollution.",
    ),
    s: L(
      "سعال مستمر، ضيق نفس، نفث دم، ألم صدري. أعراض غير نوعية.",
      "Toux persistante, dyspnée, hémoptysie, douleur thoracique. Signes non spécifiques.",
    ),
    dx: L(
      "تصوير الصدر، تنظير القصبات، خزعة وفحص تشريحي، دراسة جزيئية.",
      "Imagerie thoracique, fibroscopie bronchique, biopsie, anatomopathologie, étude moléculaire.",
    ),
    tx: L(
      "جراحة، إشعاع، كيميائي، علاجات موجّهة، علاج مناعي.",
      "Chirurgie, radiothérapie, chimiothérapie, thérapies ciblées, immunothérapie.",
    ),
  },
  {
    id: "prostate",
    n: L("سرطان البروستاتا", "Cancer de la prostate"),
    d: L(
      "ورم خبيث في غدة البروستاتا، كثير منه بطيء التطور.",
      "Tumeur maligne de la prostate, souvent d’évolution lente.",
    ),
    r: L("التقدم في السن، التاريخ العائلي.", "Âge, antécédents familiaux."),
    s: L(
      "قد لا توجد أعراض؛ اضطرابات التبول ليست خاصة بالسرطان.",
      "Souvent asymptomatique ; troubles urinaires non spécifiques.",
    ),
    dx: L(
      "فحص شرجي، PSA، رنين، خزعة وتقييم درجة Gleason/ISUP. PSA وحده لا يؤكد التشخيص؛ التأكيد يكون بالخزعة.",
      "Toucher rectal, PSA, IRM, biopsie et grade (Gleason/ISUP). Le PSA seul ne confirme pas le diagnostic ; la biopsie le fait.",
    ),
    tx: L(
      "مراقبة، جراحة، إشعاع، علاج هرموني بحسب الخطورة.",
      "Surveillance, chirurgie, radiothérapie, hormonothérapie selon le risque.",
    ),
  },
  {
    id: "cervix",
    n: L("سرطان عنق الرحم", "Cancer du col de l'utérus"),
    d: L(
      "ورم خبيث في عنق الرحم، مرتبط غالباً بعدوى HPV المستمرة.",
      "Tumeur maligne du col, le plus souvent liée à une infection persistante par HPV.",
    ),
    r: L(
      "عدوى HPV المستمرة، التدخين، ضعف المناعة.",
      "Infection persistante à HPV, tabac, immunodépression.",
    ),
    s: L(
      "نزيف غير معتاد أو إفرازات؛ قد تغيب الأعراض مبكراً.",
      "Saignements anormaux, pertes ; peut être silencieux.",
    ),
    dx: L(
      "فحص عنق الرحم، مسحة/اختبار HPV، تنظير عنق الرحم، خزعة.",
      "Examen du col, frottis/test HPV, colposcopie, biopsie.",
    ),
    tx: L(
      "جراحة أو علاج إشعاعي أو كيميائي، منفردة أو مجتمعة، بحسب المرحلة.",
      "Chirurgie, radiothérapie, chimiothérapie, seules ou associées selon le stade.",
    ),
  },
  {
    id: "leukemia",
    n: L("ابيضاض الدم", "Leucémies"),
    d: L(
      "أورام خبيثة للخلايا المكوّنة للدم في نقي العظم.",
      "Cancers des cellules hématopoïétiques de la moelle osseuse.",
    ),
    r: L(
      "عوامل متعددة؛ بعضها إشعاع أو مواد كيميائية أو متلازمات وراثية، وكثير من الحالات بلا سبب واضح.",
      "Multiples ; irradiation, toxiques, syndromes génétiques ; souvent sans cause identifiée.",
    ),
    s: L(
      "تعب، شحوب، عدوى متكررة، نزف أو كدمات. أعراض غير نوعية.",
      "Fatigue, pâleur, infections, saignements. Non spécifique.",
    ),
    dx: L(
      "تعداد الدم، فحص نخاع العظم، دراسة مناعية وجزيئية.",
      "NFS, myélogramme, immunophénotypage, génétique.",
    ),
    tx: L(
      "كيميائي، علاجات موجّهة، زرع نقي في حالات محددة.",
      "Chimiothérapie, thérapies ciblées, greffe dans certains cas.",
    ),
  },
  {
    id: "lymphoma",
    n: L("الأورام اللمفاوية", "Lymphomes"),
    d: L(
      "أورام خبيثة للجهاز اللمفاوي (هودجكين وغير هودجكين).",
      "Cancers du système lymphatique (Hodgkin et non-Hodgkin).",
    ),
    r: L(
      "ضعف المناعة وبعض العدوى؛ كثيراً بلا سبب معروف.",
      "Immunodépression, certaines infections ; souvent inconnu.",
    ),
    s: L(
      "عقد لمفاوية متضخمة غير مؤلمة، حمى، تعرق ليلي، نقص وزن. التضخم غالباً عدوى.",
      "Ganglions indolores, fièvre, sueurs nocturnes, amaigrissement. Le plus souvent infectieux.",
    ),
    dx: L(
      "خزعة عقدة، تصوير، فحص مناعي نسيجي.",
      "Biopsie ganglionnaire, imagerie, immunohistochimie.",
    ),
    tx: L(
      "كيميائي، إشعاع، علاج مناعي/موجّه بحسب النوع.",
      "Chimiothérapie, radiothérapie, immunothérapie/ciblées selon le type.",
    ),
  },
  {
    id: "stomach",
    n: L("سرطان المعدة", "Cancer de l'estomac"),
    d: L(
      "ورم خبيث ينشأ من جدار المعدة.",
      "Tumeur maligne naissant de la paroi gastrique.",
    ),
    r: L(
      "عدوى Helicobacter pylori، التدخين، الملح والأطعمة المحفوظة، التاريخ العائلي.",
      "Infection à H. pylori, tabac, alimentation salée/conservée, antécédents familiaux.",
    ),
    s: L(
      "عسر هضم مستمر، فقدان وزن، نزف هضمي، فقر دم.",
      "Dyspepsie persistante, amaigrissement, saignement digestif, anémie.",
    ),
    dx: L(
      "تنظير المعدة وخزعات، تصوير لتحديد المرحلة.",
      "Fibroscopie gastrique avec biopsies, imagerie d’extension.",
    ),
    tx: L(
      "جراحة، كيميائي، أحياناً إشعاع وعلاجات موجّهة.",
      "Chirurgie, chimiothérapie, parfois radiothérapie et thérapies ciblées.",
    ),
  },
  {
    id: "liver",
    n: L("سرطان الكبد", "Cancer du foie"),
    d: L(
      "الأشيع هو سرطان الخلايا الكبدية، ويظهر غالباً على كبد مصاب بتشمع أو التهاب مزمن.",
      "Le plus fréquent est le carcinome hépatocellulaire, souvent sur cirrhose ou hépatite chronique.",
    ),
    r: L(
      "التهاب الكبد B وC، التشمع، الكحول، الكبد الدهني.",
      "Hépatites B et C, cirrhose, alcool, stéatose.",
    ),
    s: L(
      "ألم أعلى البطن، نقص وزن، يرقان؛ وقد يكون صامتاً.",
      "Douleur de l’hypocondre, amaigrissement, ictère ; peut être silencieux.",
    ),
    dx: L(
      "تصوير الكبد، تحاليل، وأحياناً خزعة.",
      "Imagerie hépatique, biologie, parfois biopsie.",
    ),
    tx: L(
      "جراحة، علاجات موضعية، زرع، علاجات جهازية بحسب الحالة.",
      "Chirurgie, traitements locorégionaux, transplantation, traitements systémiques selon le cas.",
    ),
  },
];
const I = (a, b, c, d) => ({ t: L(a, b), b: L(c, d) });
export const topics = {
  prevention: {
    title: L("الوقاية والكشف المبكر", "Prévention et dépistage"),
    items: [
      I(
        "عوامل يمكن تعديلها",
        "Facteurs modifiables",
        "التبغ، الكحول، السمنة، قلة الحركة، نمط غذائي غير صحي، بعض العدوى، التعرض المهني والبيئي، الأشعة فوق البنفسجية المفرطة.",
        "Tabac, alcool, obésité, sédentarité, alimentation déséquilibrée, certaines infections, expositions professionnelles/environnementales, UV excessifs.",
      ),
      I(
        "الوقاية",
        "Prévention",
        "الإقلاع عن التدخين، نشاط بدني، نمط حياة صحي، التطعيم المناسب (HPV، التهاب الكبد B) حيث يُوصى به.",
        "Arrêt du tabac, activité physique, hygiène de vie, vaccination adaptée (HPV, hépatite B).",
      ),
      I(
        "الفرق بين المفاهيم",
        "Ne pas confondre",
        "الوقاية تقلل الخطر؛ الكشف (dépistage) يُجرى لأشخاص بلا أعراض؛ التشخيص المبكر عند ظهور أعراض؛ الفحوص التشخيصية لتأكيد الحالة.",
        "Prévention = réduire le risque ; dépistage = sans symptôme ; diagnostic précoce = devant des signes ; examens diagnostiques = confirmer.",
      ),
      I(
        "الكشف: ثدي، عنق الرحم، القولون",
        "Dépistage : sein, col, côlon",
        "1) توصيات منظمة الصحة العالمية (عالمية وليست جزائرية): اختبار HPV هو الطريقة المفضلة لكشف عنق الرحم، ويُوصى بالفحص ابتداءً من سن 30 بفاصل 5–10 سنوات باختبار عالي الأداء؛ وتصوير الثدي الشعاعي للنساء بين 50 و69 سنة في الأنظمة الصحية القوية أو شبه القوية؛ وللقولون كشف منظم حيثما وُجدت برامج منظمة. 2) في الجزائر: أفادت مصادر صحفية عن وزارة الصحة بحملات ووحدات متنقلة للكشف عن سرطان الثدي وعنق الرحم وبمخطط وطني للسرطان 2015–2019، ولم نتحقق من توصية جزائرية رسمية حالية بأعمار وفترات محددة، لذلك لا نذكرها. 3) القرار الفردي مع طبيبك. لا يُنصح بواسمات الأورام أو التصوير المقطعي أو PET كفحص شامل للأصحاء.",
        "1) Recommandations OMS (mondiales, pas algériennes) : le test HPV est la méthode préférée pour le col, avec un dépistage dès 30 ans tous les 5 à 10 ans par un test performant ; mammographie pour les femmes de 50 à 69 ans dans les systèmes de santé solides ou relativement solides ; pour le côlon, dépistage organisé là où des programmes existent. 2) En Algérie : des sources de presse rapportent des campagnes et cliniques mobiles de dépistage (sein, col) et un Plan national cancer 2015-2019 ; nous n’avons pas vérifié de recommandation algérienne officielle actuelle (âges, intervalles), donc nous n’en citons pas. 3) Décision individuelle avec votre médecin. Pas de marqueurs tumoraux, scanner ou TEP en dépistage de masse.",
      ),
      I(
        "متى أراجع الطبيب؟",
        "Quand consulter ?",
        "عند أي علامة جديدة مستمرة أو غير مفسَّرة، أو قلق بسبب تاريخ عائلي.",
        "Devant tout signe nouveau, persistant ou inexpliqué, ou inquiétude liée aux antécédents familiaux.",
      ),
    ],
  },
  diagnosis: {
    title: L("التشخيص والفحوصات", "Diagnostic et examens"),
    items: [
      I(
        "الفحص السريري والتحاليل",
        "Examen clinique et biologie",
        "يوجّهان البحث لكنهما لا يؤكدان السرطان وحدهما.",
        "Orientent la recherche mais ne confirment pas seuls un cancer.",
      ),
      I(
        "التصوير",
        "Imagerie",
        "إيكوغرافيا، أشعة عادية، TDM، IRM، PET: كل منها يجيب عن سؤال مختلف (موقع، حجم، انتشار). النتيجة لا تغني عن الخزعة.",
        "Échographie, radio, TDM, IRM, TEP : chacun répond à une question (localisation, taille, extension). Ne remplace pas la biopsie.",
      ),
      I(
        "التنظير",
        "Endoscopie",
        "رؤية مباشرة لأعضاء مجوفة مع أخذ عينات.",
        "Visualisation directe d’organes creux avec prélèvements.",
      ),
      I(
        "الخزعة والفحص التشريحي المرضي",
        "Biopsie et anatomopathologie",
        "العينة تُفحص مجهرياً لتأكيد الورم ونوعه ودرجته. عند إجرائها بطريقة سليمة يُعدّ خطر انتشار الورم بسببها ضعيفاً جداً، وفائدتها التشخيصية تفوقه.",
        "L'échantillon est examiné au microscope : type, grade, marges, ganglions. Le risque de dissémination d’une biopsie correctement réalisée est considéré comme très faible ; le bénéfice diagnostique prime.",
      ),
      I(
        "المناعة النسيجية والفحوص الجزيئية",
        "IHC et tests moléculaires",
        "تحدد علامات حيوية (مثل ER/PR/HER2 في الثدي) توجّه اختيار العلاج. هذا الموقع لا يفسّر تقارير المرضى.",
        "Biomarqueurs (ex. ER/PR/HER2) guidant le traitement. Ce site n'interprète pas les comptes rendus des patients.",
      ),
    ],
  },
  treatments: {
    title: L("العلاجات", "Traitements"),
    items: [
      I(
        "الجراحة",
        "Chirurgie oncologique",
        "استئصال الورم أو جزء من العضو. الهدف يحدده الفريق.",
        "Exérèse de la tumeur ; objectif défini par l'équipe.",
      ),
      I(
        "العلاج الكيميائي",
        "Chimiothérapie",
        "أدوية تؤثر على الخلايا سريعة الانقسام، لذلك تتأثر بعض الخلايا السليمة أيضاً. تُعطى غالباً بالوريد أو فمياً.",
        "Médicaments agissant sur les cellules à division rapide, d'où des effets sur certaines cellules saines.",
      ),
      I(
        "العلاج الإشعاعي",
        "Radiothérapie",
        "أشعة موجهة لتدمير الخلايا الورمية في منطقة محددة.",
        "Rayonnements ciblés sur une zone.",
      ),
      I(
        "العلاج الهرموني",
        "Hormonothérapie",
        "يحدّ من تأثير الهرمونات في أورام حساسة لها.",
        "Limite l'effet des hormones sur les tumeurs hormonosensibles.",
      ),
      I(
        "العلاجات الموجّهة",
        "Thérapies ciblées",
        "تستهدف خللاً جزيئياً محدداً، ولا تناسب إلا من لديه هدف مثبت.",
        "Visent une anomalie moléculaire précise.",
      ),
      I(
        "العلاج المناعي",
        "Immunothérapie",
        "يساعد جهاز المناعة على التعرف على الورم.",
        "Aide le système immunitaire à reconnaître la tumeur.",
      ),
      I(
        "الرعاية الملطِّفة والداعمة",
        "Soins palliatifs et de support",
        "تخفيف الأعراض وتحسين الجودة، ويمكن أن تبدأ مع العلاج.",
        "Soulager les symptômes et améliorer la qualité de vie, dès le début du traitement.",
      ),
      I(
        "كيف يُختار العلاج؟",
        "Comment choisit-on ?",
        "حسب النوع، النسيج، الخصائص الجزيئية، المرحلة، حالة المريض وقرار الفريق. لا نذكر جرعات أو بروتوكولات.",
        "Selon le type, l'histologie, la biologie moléculaire, le stade, l'état du patient et la RCP. Aucune dose ni protocole n'est indiqué.",
      ),
    ],
  },
  "side-effects": {
    title: L("الآثار الجانبية", "Effets secondaires"),
    items: [
      I(
        "غثيان وقيء",
        "Nausées et vomissements",
        "تُوجد أدوية وقائية؛ أخبر فريقك.",
        "Des traitements préventifs existent ; informez votre équipe.",
      ),
      I(
        "التعب",
        "Fatigue",
        "شائع؛ الراحة والنشاط المناسب وتقييم فقر الدم.",
        "Fréquente ; repos, activité adaptée, recherche d'anémie.",
      ),
      I(
        "تساقط الشعر والجلد",
        "Alopécie et peau",
        "يختلف بحسب العلاج وغالباً مؤقت.",
        "Variable selon le traitement, souvent temporaire.",
      ),
      I(
        "التهاب الفم والإسهال/الإمساك والشهية",
        "Mucite, transit, appétit",
        "العناية بالفم والسوائل والتغذية بمساعدة مختص.",
        "Soins de bouche, hydratation, accompagnement nutritionnel.",
      ),
      I(
        "نقص العدلات والعدوى",
        "Neutropénie et infection",
        "العلاج الكيميائي قد يخفض كريات الدم البيضاء فيزداد خطر العدوى، وغالباً ما يحدث ذلك بين اليوم 7 و12 بعد العلاج وقد يختلف بحسب الدواء (CDC). فريقك يخبرك بالموعد المتوقع.",
        "La chimiothérapie peut réduire les globules blancs et augmenter le risque d’infection ; cela survient souvent entre 7 et 12 jours après le traitement, variable selon les médicaments (CDC). Votre équipe vous indique la période.",
      ),
      I(
        "اعتلال الأعصاب الطرفية",
        "Neuropathie périphérique",
        "تنميل أو وخز في اليدين والقدمين؛ أبلغ الفريق مبكراً.",
        "Fourmillements ou engourdissements des mains et pieds ; prévenez l’équipe tôt.",
      ),
      I(
        "الضيق النفسي",
        "Détresse psychologique",
        "القلق والحزن شائعان؛ الدعم النفسي جزء من الرعاية.",
        "Anxiété et tristesse sont fréquentes ; le soutien psychologique fait partie des soins.",
      ),
    ],
    urgent: [
      L(
        "حمى أثناء العلاج الكيميائي (طارئ طبي؛ خطر نقص العدلات)",
        "Fièvre pendant la chimiothérapie (urgence ; risque de neutropénie)",
      ),
      L("صعوبة شديدة في التنفس", "Difficulté respiratoire sévère"),
      L("نزيف لا يتوقف", "Saignement incontrôlé"),
      L(
        "فقدان الوعي أو أعراض عصبية جديدة وشديدة",
        "Perte de connaissance ou signes neurologiques nouveaux et sévères",
      ),
      L(
        "جفاف شديد أو عدم القدرة على الشرب",
        "Déshydratation sévère ou impossibilité de boire",
      ),
      L("تدهور حاد آخر", "Autre dégradation aiguë"),
    ],
  },
};
// Add only records verified from official sources. Never invent data.
export const centers = [];
export const faqs = [
  {
    q: L("هل السرطان مرض معدٍ؟", "Le cancer est-il contagieux ?"),
    a: L(
      "لا، لا ينتقل بالمخالطة. بعض العدوى (مثل HPV وHBV) ترفع الخطر لكنها ليست السرطان نفسه.",
      "Non. Certaines infections (HPV, VHB) augmentent le risque mais le cancer ne se transmet pas.",
    ),
  },
  {
    q: L(
      "هل كل الأورام سرطانية؟",
      "Toutes les tumeurs sont-elles cancéreuses ?",
    ),
    a: L(
      "لا. الورم الحميد لا ينتشر عادة إلى أعضاء بعيدة، والخبيث قد يغزو وينتشر. التمييز يتم بالفحص المرضي.",
      "Non. Une tumeur bénigne ne métastase pas, une maligne peut envahir. C'est l'anatomopathologie qui tranche.",
    ),
  },
  {
    q: L("هل السرطان وراثي دائماً؟", "Le cancer est-il toujours héréditaire ?"),
    a: L(
      "لا. الأغلبية غير وراثية؛ نسبة صغيرة ترتبط بطفرات موروثة.",
      "Non. Une minorité de cancers est liée à des mutations héritées.",
    ),
  },
  {
    q: L("هل الخزعة تنشر السرطان؟", "La biopsie propage-t-elle le cancer ?"),
    a: L(
      "الخطر ضعيف جداً عند إجرائها بشكل صحيح، وهي ضرورية للتشخيص.",
      "Risque considéré comme très faible si elle est correctement réalisée ; elle reste nécessaire au diagnostic.",
    ),
  },
  {
    q: L(
      "هل الطب البديل يعالج السرطان؟",
      "La médecine alternative guérit-elle le cancer ?",
    ),
    a: L(
      "لم يثبت علمياً أنها تعالج السرطان، وقد تتعارض مع العلاج. ناقش أي منتج مع فريقك.",
      "Efficacité non démontrée ; certains produits interfèrent avec les traitements. Parlez-en à votre équipe.",
    ),
  },
  {
    q: L(
      "ماذا أفعل عند ظهور آثار جانبية؟",
      "Que faire en cas d'effets secondaires ?",
    ),
    a: L(
      "اتصل بفريق الأورام المعالج، ولا توقف العلاج أو تعدّله بنفسك. في الحالات الشديدة اطلب تقييماً عاجلاً.",
      "Contactez votre équipe d'oncologie sans arrêter ni modifier le traitement seul. Urgence si signes sévères.",
    ),
  },
  {
    q: L(
      "ما الفرق بين الورم الحميد والخبيث؟",
      "Quelle différence entre tumeur bénigne et maligne ?",
    ),
    a: L(
      "الحميد ينمو موضعياً ولا ينتشر عادة؛ الخبيث قد يغزو الأنسجة المجاورة ويعطي نقائل. يحدده الفحص المرضي.",
      "La bénigne reste localisée ; la maligne peut envahir et métastaser. L’anatomopathologie tranche.",
    ),
  },
  {
    q: L("هل يمكن الشفاء من السرطان؟", "Peut-on guérir d’un cancer ?"),
    a: L(
      "يختلف ذلك كثيراً بحسب النوع والمرحلة وحالة المريض. كثير من السرطانات يمكن الشفاء منها أو السيطرة عليها، لكن لا يمكن وعد أي شخص بنتيجة؛ اسأل فريقك عن حالتك.",
      "Cela dépend beaucoup du type, du stade et du patient. Beaucoup de cancers sont guéris ou contrôlés, mais aucun résultat ne peut être promis ; interrogez votre équipe.",
    ),
  },
  {
    q: L(
      "هل العلاج الكيميائي يؤثر على جميع الخلايا؟",
      "La chimiothérapie agit-elle sur toutes les cellules ?",
    ),
    a: L(
      "لا؛ يؤثر خاصة على الخلايا سريعة الانقسام، ومنها خلايا سليمة (الشعر، الجهاز الهضمي، نقي العظم)، ولهذا تظهر آثار جانبية.",
      "Non ; elle agit surtout sur les cellules à division rapide, dont certaines cellules saines (cheveux, tube digestif, moelle), d’où les effets secondaires.",
    ),
  },
  {
    q: L(
      "ما الفرق بين العلاج الكيميائي والإشعاعي؟",
      "Chimiothérapie vs radiothérapie ?",
    ),
    a: L(
      "الكيميائي دواء يصل عبر الدم إلى الجسم كله، أما الإشعاعي فيستهدف منطقة محددة بأشعة.",
      "La chimiothérapie est un médicament à action générale ; la radiothérapie cible une zone précise par rayonnements.",
    ),
  },
  {
    q: L(
      "كيف أساعد أحد أفراد عائلتي المصاب بالسرطان؟",
      "Comment aider un proche malade ?",
    ),
    a: L(
      "استمع دون إصدار أحكام، ساعده في المواعيد والتنقل، شجّعه على طرح أسئلته على الفريق، واهتم بنفسك أيضاً.",
      "Écoutez sans juger, aidez pour les rendez-vous et les trajets, encouragez-le à poser ses questions à l’équipe, et prenez soin de vous.",
    ),
  },
];
// v:true = page found and opened during the 2026-11-11 audit. Add exact publication dates only after reading the page.
export const refs = {
  general: [
    {
      o: "WHO",
      t: "Cancer — fact sheet",
      u: "https://www.who.int/news-room/fact-sheets/detail/cancer",
      v: true,
    },
    { o: "NCI", t: "About Cancer", u: "https://www.cancer.gov/about-cancer" },
    { o: "INCa", t: "cancer.fr", u: "https://www.cancer.fr" },
  ],
  breast: [
    {
      o: "WHO",
      t: "Breast cancer — fact sheet",
      u: "https://www.who.int/news-room/fact-sheets/detail/breast-cancer",
      v: true,
    },
  ],
  colorectal: [
    {
      o: "WHO",
      t: "Colorectal cancer — fact sheet",
      u: "https://www.who.int/news-room/fact-sheets/detail/colorectal-cancer",
      v: true,
    },
  ],
  lung: [
    {
      o: "WHO",
      t: "Lung cancer — fact sheet",
      u: "https://www.who.int/news-room/fact-sheets/detail/lung-cancer",
      v: true,
    },
  ],
  cervix: [
    {
      o: "WHO",
      t: "Human papillomavirus (HPV) and cervical cancer — fact sheet",
      u: "https://www.who.int/news-room/fact-sheets/detail/human-papillomavirus-(hpv)-and-cervical-cancer",
      v: true,
    },
  ],
  prevention: [
    {
      o: "WHO",
      t: "Human papillomavirus (HPV) and cervical cancer — fact sheet",
      u: "https://www.who.int/news-room/fact-sheets/detail/human-papillomavirus-(hpv)-and-cervical-cancer",
      v: true,
    },
    { o: "IARC", t: "iarc.who.int", u: "https://www.iarc.who.int" },
    {
      o: "Radio Algérie",
      t: "Ministère de la Santé — Journée mondiale contre le cancer (09/02/2026)",
      u: "https://news.radioalgerie.dz/fr/node/79407",
      v: true,
      d: "presse",
    },
    {
      o: "APS / AllAfrica",
      t: "Semaine nationale de la prévention (cliniques mobiles)",
      u: "https://fr.allafrica.com/stories/202502170387.html",
      v: true,
      d: "presse",
    },
  ],
  "side-effects": [
    {
      o: "CDC",
      t: "Information for Patients Who Are Getting Chemotherapy",
      u: "https://www.cdc.gov/cancer-preventing-infections/patients/",
      v: true,
    },
    {
      o: "American Cancer Society",
      t: "Fever (side effects)",
      u: "https://www.cancer.org/fever.html",
      v: true,
    },
  ],
};
export const sources = [
  { org: "WHO / OMS", url: "https://www.who.int" },
  { org: "IARC / CIRC", url: "https://www.iarc.who.int" },
  { org: "National Cancer Institute (NCI)", url: "https://www.cancer.gov" },
  { org: "Institut National du Cancer (INCa)", url: "https://www.cancer.fr" },
];
