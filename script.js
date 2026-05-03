const menuItems = document.querySelectorAll(".sidebar a");
const totalUsers = document.getElementById("total-users");

function normalizePath(path) {
  const trimmed = path.replace(/\/$/, "");
  return trimmed === "" ? "/" : trimmed;
}

function syncActiveNav() {
  const current = normalizePath(window.location.pathname);
  menuItems.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#")) {
      link.classList.remove("active");
      return;
    }
    const linkPath = normalizePath(
      new URL(href, window.location.origin).pathname
    );
    link.classList.toggle("active", linkPath === current);
  });
}

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((link) => link.classList.remove("active"));
    item.classList.add("active");
  });
});

syncActiveNav();

if (totalUsers) {
  totalUsers.textContent = "1,204";
}
