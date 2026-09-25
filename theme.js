(() => {
  const storageKey = "borgyogyasz-theme-choice";
  const root = document.documentElement;
  const systemTheme = window.matchMedia?.("(prefers-color-scheme: dark)");
  const labels = {
    hu: { dark: "Éjszakai mód bekapcsolása", light: "Világos mód bekapcsolása", darkIcon: "☾", lightIcon: "☀" },
    en: { dark: "Turn on dark mode", light: "Turn on light mode", darkIcon: "☾", lightIcon: "☀" },
    "sr-Latn": { dark: "Uključite tamni režim", light: "Uključite svetli režim", darkIcon: "☾", lightIcon: "☀" },
    ro: { dark: "Activați modul întunecat", light: "Activați modul luminos", darkIcon: "☾", lightIcon: "☀" }
  };

  const getSavedTheme = () => {
    try {
      return localStorage.getItem(storageKey);
    } catch {
      return null;
    }
  };

  const saveTheme = (theme) => {
    try {
      localStorage.setItem(storageKey, theme);
    } catch {
      // Private browsing can block localStorage; the current page still works.
    }
  };

  const setTheme = (theme, persist = false) => {
    root.dataset.theme = theme;
    if (persist) saveTheme(theme);
    const language = document.documentElement.lang || "hu";
    const copy = labels[language] || labels.hu;
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      const isDark = theme === "dark";
      button.textContent = isDark ? copy.lightIcon : copy.darkIcon;
      button.setAttribute("aria-label", isDark ? copy.light : copy.dark);
      button.setAttribute("aria-pressed", String(isDark));
      button.title = isDark ? copy.light : copy.dark;
    });
  };

  const savedTheme = getSavedTheme();
  setTheme(savedTheme || (systemTheme?.matches ? "dark" : "light"));

  const followSystemTheme = (event) => {
    if (!getSavedTheme()) setTheme(event.matches ? "dark" : "light");
  };
  if (systemTheme?.addEventListener) {
    systemTheme.addEventListener("change", followSystemTheme);
  } else {
    systemTheme?.addListener?.(followSystemTheme);
  }

  const languageLinks = document.querySelector(".language-links");
  if (languageLinks?.parentElement) {
    const languageCopy = {
      hu: { button: "Nyelvválasztás", names: { hu: "Magyar", en: "English", "sr-Latn": "Szerb", ro: "Română" } },
      en: { button: "Language selection", names: { hu: "Magyar", en: "English", "sr-Latn": "Serbian", ro: "Romanian" } },
      "sr-Latn": { button: "Izbor jezika", names: { hu: "Mađarski", en: "Engleski", "sr-Latn": "Srpski", ro: "Rumunski" } },
      ro: { button: "Selectarea limbii", names: { hu: "Maghiară", en: "Engleză", "sr-Latn": "Sârbă", ro: "Română" } },
    };
    const languageOptions = {
      hu: { code: "HU", flag: "🇭🇺" },
      en: { code: "EN", flag: "🇬🇧" },
      "sr-Latn": { code: "SR", flag: "🇷🇸" },
      ro: { code: "RO", flag: "🇷🇴" },
    };
    const language = document.documentElement.lang || "hu";
    const languageLabels = languageCopy[language] || languageCopy.hu;
    const languageToggle = document.createElement("button");
    const languageMenu = document.createElement("div");
    languageLinks.classList.add("language-picker");
    languageToggle.className = "language-toggle";
    languageToggle.type = "button";
    languageToggle.setAttribute("aria-haspopup", "true");
    languageToggle.setAttribute("aria-expanded", "false");
    languageToggle.setAttribute("aria-label", languageLabels.button);
    languageToggle.title = languageLabels.button;
    languageToggle.innerHTML = `<svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z"></path></svg>`;
    languageMenu.className = "language-menu";
    languageMenu.hidden = true;
    languageLinks.querySelectorAll("a").forEach((link) => {
      const linkLanguage = link.lang === "sr" || link.lang === "sr-Latn" ? "sr-Latn" : link.lang;
      const option = languageOptions[linkLanguage];
      link.textContent = option ? `${option.code} ${option.flag}` : link.textContent;
      link.setAttribute("aria-label", languageLabels.names[linkLanguage] || link.textContent);
      link.dataset.language = linkLanguage;
      languageMenu.append(link);
    });
    languageLinks.append(languageToggle, languageMenu);

    const setLanguageMenu = (isOpen) => {
      languageMenu.hidden = !isOpen;
      languageToggle.setAttribute("aria-expanded", String(isOpen));
    };
    languageToggle.addEventListener("click", () => {
      setLanguageMenu(languageMenu.hidden);
    });
    document.addEventListener("click", (event) => {
      if (!languageLinks.contains(event.target)) setLanguageMenu(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !languageMenu.hidden) {
        setLanguageMenu(false);
        languageToggle.focus();
      }
    });

    const themeItem = document.createElement("li");
    themeItem.className = "theme-item";
    const button = document.createElement("button");
    button.className = "theme-toggle";
    button.type = "button";
    button.dataset.themeToggle = "";
    themeItem.append(button);
    setTheme(root.dataset.theme);
    button.addEventListener("click", () => {
      setTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
    });

    const navLinks = languageLinks.parentElement;
    const primaryItems = [...navLinks.children].filter(
      (item) => item !== languageLinks,
    );
    const primaryItem = document.createElement("li");
    primaryItem.className = "nav-primary-item";
    const primaryLinks = document.createElement("ul");
    primaryLinks.className = "nav-primary-links";
    primaryItems.forEach((item) => primaryLinks.append(item));
    primaryItem.append(primaryLinks);

    const controlsItem = document.createElement("li");
    controlsItem.className = "nav-controls";
    controlsItem.append(languageLinks, themeItem);
    navLinks.replaceChildren(primaryItem, controlsItem);
    navLinks.classList.add("nav-ready");
    navLinks.closest("nav")?.classList.add("nav-ready");
    setTheme(root.dataset.theme);
  }

  const footer = document.querySelector("footer");
  if (footer && !footer.querySelector(".footer-languages")) {
    const currentFile = window.location.pathname.split("/").pop() || "index.html";
    const page = ["idopont.html", "GDPR.html"].includes(currentFile)
      ? currentFile
      : "index.html";
    const folder = window.location.pathname.split("/").slice(-2, -1)[0];
    const prefix = ["en", "sr", "ro"].includes(folder) ? "../" : "";
    const languagePaths = { hu: "", en: "en/", sr: "sr/", ro: "ro/" };
    const footerLabels = {
      hu: "Nyelvválasztó",
      en: "Language selection",
      "sr-Latn": "Izbor jezika",
      ro: "Selectarea limbii"
    };
    const languageNav = document.createElement("nav");
    languageNav.className = "footer-languages";
    languageNav.setAttribute("aria-label", footerLabels[document.documentElement.lang] || footerLabels.hu);
    Object.entries(languagePaths).forEach(([language, path]) => {
      const link = document.createElement("a");
      link.href = `${prefix}${path}${page}`;
      link.lang = language === "sr" ? "sr-Latn" : language;
      link.textContent = language.toUpperCase();
      if (link.lang === document.documentElement.lang) link.setAttribute("aria-current", "page");
      languageNav.append(link);
    });
    footer.append(languageNav);
  }
})();
