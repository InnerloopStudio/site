const translations = {
  en: {
    tagline: "Something is coming.",
    subcopy: "Built for the people who matter most.",
    notify: "Notify me",
    hint: "No spam. Ever.",
    success: "You're on the list.",
    error: "Try again.",
    emailAria: "Email address",
    emailPlaceholder: "your@email.com",
  },
  "pt-BR": {
    tagline: "Algo está chegando.",
    subcopy: "Feito para as pessoas que mais importam.",
    notify: "Avise-me",
    hint: "Sem spam. Nunca.",
    success: "Você está na lista.",
    error: "Tente novamente.",
    emailAria: "Endereço de e-mail",
    emailPlaceholder: "seu@email.com",
  },
  es: {
    tagline: "Algo se acerca.",
    subcopy: "Hecho para las personas que más importan.",
    notify: "Notifícame",
    hint: "Sin spam. Jamás.",
    success: "Estás en la lista.",
    error: "Inténtalo de nuevo.",
    emailAria: "Correo electrónico",
    emailPlaceholder: "tu@email.com",
  },
  de: {
    tagline: "Etwas kommt.",
    subcopy: "Für die Menschen, die am meisten zählen.",
    notify: "Benachrichtige mich",
    hint: "Kein Spam. Niemals.",
    success: "Du bist auf der Liste.",
    error: "Erneut versuchen.",
    emailAria: "E-Mail-Adresse",
    emailPlaceholder: "deine@email.com",
  },
};

const supported = Object.keys(translations);

function detectLanguage() {
  const langs = navigator.languages || [navigator.language];
  for (const lang of langs) {
    // Exact match (e.g. "pt-BR")
    if (supported.includes(lang)) return lang;
    // Base match (e.g. "pt" → "pt-BR", "es-MX" → "es", "de-AT" → "de")
    const base = lang.split("-")[0];
    if (base === "pt") return "pt-BR";
    const match = supported.find((s) => s === base);
    if (match) return match;
  }
  return "en";
}

const locale = detectLanguage();
const strings = translations[locale];

export function t(key) {
  return strings[key] ?? translations.en[key] ?? key;
}

function applyTranslations() {
  document.documentElement.lang = locale;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });
}

applyTranslations();
