import loadPage from "./load";
import loadMenu from "./menu";

loadPage();

const loadTab = (function () {
  const home = document.querySelector(".tab-1");
  const menu = document.querySelector(".tab-2");
  const contact = document.querySelector(".tab-3");

  home.addEventListener("click", loadPage);
  menu.addEventListener("click", loadMenu);

  // TODO: Fix behaviour of menu tab.
})();
