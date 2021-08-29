import "./styles/global.css";
import "./styles/menu.css";
import "./styles/contact.css"
import { load_HeaderFooter } from "./modules/header_footer"
import { loadHome } from "./modules/home";
import { loadMenu } from "./modules/menu";
import { loadContactPage } from "./modules/contact";

initialPageLoad();

function initialPageLoad() {
  load_HeaderFooter();
  loadHome();
  navLinksListener();
}

function navLinksListener() {
  const homeBtn = document.getElementById("homePage");
  const menuBtn = document.getElementById("menuPage");
  const contactBtn = document.getElementById("contactPage");
  homeBtn.addEventListener("click", loadHome);
  menuBtn.addEventListener("click", loadMenu);
  contactBtn.addEventListener("click",loadContactPage);
}

export { navLinksListener };