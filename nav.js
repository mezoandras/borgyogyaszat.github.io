(() => {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (toggle && links) {
    const setMenuState = (isOpen) => {
      links.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    };
    toggle.addEventListener("click", () =>
      setMenuState(!links.classList.contains("open")),
    );
    document
      .querySelectorAll(".nav-links a")
      .forEach((link) =>
        link.addEventListener("click", () => setMenuState(false)),
      );
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && links.classList.contains("open")) {
        setMenuState(false);
        toggle.focus();
      }
    });
  }

  const topbar = document.getElementById("topbar");
  const hero = document.getElementById("hero");
  if (topbar && hero) {
    const fixHeroPadding = () => {
      hero.style.paddingTop = `${topbar.offsetHeight}px`;
    };
    fixHeroPadding();
    window.addEventListener("resize", fixHeroPadding);
    window.addEventListener("load", fixHeroPadding);
  }

  const copyrightYear = document.getElementById("copyright-year");
  if (copyrightYear) copyrightYear.textContent = String(new Date().getFullYear());

  const timeZone = "Europe/Budapest";
  const weekdayFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "long",
  });
  const updateCurrentDay = (now) => {
    const currentWeekday = weekdayFormatter.format(now).toLowerCase();
    document.querySelectorAll(".hours-table tr[data-weekday]").forEach((row) => {
      const isCurrentDay = row.dataset.weekday === currentWeekday;
      row.classList.toggle("current-day", isCurrentDay);
      if (isCurrentDay) row.setAttribute("aria-current", "date");
      else row.removeAttribute("aria-current");
    });
  };
  updateCurrentDay(new Date());

  const budapestTime = document.getElementById("budapest-time");
  if (budapestTime) {
    const formatter = new Intl.DateTimeFormat("en-CA", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    });
    const updateBudapestTime = () => {
      const now = new Date();
      const parts = Object.fromEntries(
        formatter.formatToParts(now).map(({ type, value }) => [type, value]),
      );
      budapestTime.textContent = `Szegedi idő: ${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}`;
      budapestTime.dateTime = now.toISOString();
      updateCurrentDay(now);
    };

    updateBudapestTime();
    window.setInterval(updateBudapestTime, 60_000);
  }
})();
