// Підключення функціоналу "Чортоги Фрілансера"
import { addTouchAttr, addLoadedAttr, isMobile, FLS } from "@js/common/functions.js"
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
window.addEventListener("scroll", function () {
	const header = document.querySelector(".header");
	if (window.scrollY > 0) {
		header.classList.add("header--active");
	} else {
		header.classList.remove("header--active");
	}
});
