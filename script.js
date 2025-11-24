const body = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const yearEl = document.getElementById("year");

const setTheme = (theme) => {
  body.setAttribute("data-theme", theme);
  localStorage.setItem("dion-theme", theme);
  toggle.setAttribute("aria-pressed", theme === "light");
};

const storedTheme = localStorage.getItem("dion-theme");
if (storedTheme) {
  setTheme(storedTheme);
}

toggle.addEventListener("click", () => {
  const nextTheme = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

