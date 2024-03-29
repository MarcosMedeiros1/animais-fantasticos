import Funcioanmento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import SmoothScroll from "./modules/smooth-scroll.js";
import AnimaScroll from "./modules/anima-scroll.js";
import MenuMobile from "./modules/menu-mobile.js";
import Accordion from "./modules/accordion.js";
import Tooltip from "./modules/tooltip.js";
import SlideNav from "./modules/slide.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";

const smoothScroll = new SmoothScroll("[data-menu='suave'] a[href^='#']");
smoothScroll.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section",
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
modal.init();

const toolTip = new Tooltip("[data-tooltip]");
toolTip.init();

const animaScroll = new AnimaScroll("[data-anime='scroll']");
animaScroll.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile("[data-menu='button']", "[data-menu='list']");
menuMobile.init();

const funcionamento = new Funcioanmento("[data-semana]", "aberto");
funcionamento.init();

fetchAnimais("../animaisapi.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

const slide = new SlideNav(".slide-container", ".slide");
slide.init();
slide.addControl(".custom-control");
