const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
	const menuIsOpen = navLinks.classList.toggle("show");
	menuButton.setAttribute("aria-expanded", menuIsOpen);
});
