const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Abrir menu" : "Fechar menu");
  mainNav.classList.toggle("is-open", !isExpanded);
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    mainNav.classList.remove("is-open");
  });
});

document.querySelectorAll(".fact-item").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      document.querySelectorAll(".fact-item").forEach((otherItem) => {
        if (otherItem !== item) otherItem.open = false;
      });
    }
  });
});
