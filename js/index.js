import { toggleSomething, checkShowMenu, hideNavbar } from "./utils/utils.js";

const navbarBtn = document.querySelector(".btn-navbar");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarLinks = document.querySelectorAll(".navbar-link");
const btnTabs = document.querySelectorAll(".btn-tab");
const dynamicLine = document.querySelector(".dynamic-line");
const descTabs = document.querySelectorAll(".tab-desc");
toggleSomething({
  toggles: [navbarBtn],
  targetsChange: navbarMenu,
  classChanges: ["show-menu"],
});

navbarBtn.addEventListener("click", checkShowMenu);

btnTabs.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let item = e.target;
    let left = item.offsetLeft;
    let width = item.offsetWidth;
    let dataIndex = item.dataset.index;
    let descTab = document.querySelector(
      `.tab-desc[data-index="${dataIndex}"]`
    );

    resetActive(btnTabs);
    resetActive(descTabs);
    item.classList.add("active");
    descTab.classList.add("active");
    dynamicLine.style = `left: ${left}px; width:${width}px`;
  });
});

navbarLinks.forEach((navbarLink) => {
  navbarLink.addEventListener("click", hideNavbar);
});

function resetActive(listElm) {
  listElm.forEach((elm) => {
    elm.classList.remove("active");
  });
}
