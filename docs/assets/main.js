(() => {
  const menuButton = document.getElementById("menuButton");
  const siteNav = document.getElementById("siteNav");

  if (menuButton && siteNav) {
    menuButton.addEventListener("click", () => {
      const open = siteNav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("isVisible");
          activeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach((item) => observer.observe(item));
  } else {
    items.forEach((item) => item.classList.add("isVisible"));
  }
})();
