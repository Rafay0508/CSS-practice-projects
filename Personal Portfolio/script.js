var burgerMenu = document.getElementById("burger-menu");
var menu = document.getElementById("menu");
var menuContent = document.getElementById("menu-content");

burgerMenu.addEventListener("click", function () {
  menu.checked = !menu.checked; // Toggle the checkbox
  if (menu.checked) {
    menuContent.style.display = "flex";
  } else {
    menuContent.style.display = "none";
  }
});
