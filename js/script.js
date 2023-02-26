import initFuncioanmento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initAnimaScroll from "./modules/anima-scroll.js";
import initMenuMobile from "./modules/menu-mobile.js";
import SmoothScroll from "./modules/smooth-scroll.js";
import initTooltip from "./modules/tooltip.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";

const smoothScroll = new SmoothScroll("[data-menu='suave'] a[href^='#']");
smoothScroll.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section",
);
tabNav.init();

initFuncioanmento();
initFetchAnimais();
initDropdownMenu();
initFetchBitcoin();
initAnimaScroll();
initMenuMobile();
initTooltip();
initModal();
