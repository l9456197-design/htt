const menuItems = document.querySelectorAll(".sidebar a");
const totalUsers = document.getElementById("total-users");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((link) => link.classList.remove("active"));
    item.classList.add("active");
  });
});

if (totalUsers) {
  totalUsers.textContent = "1,204";
}
