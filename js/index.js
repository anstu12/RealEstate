// scroll to top button

const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");
const totop = document.createElement("div");
const scrollTop = () => {
	heroSection.scrollIntoView({ behavior: "smooth" });
};

totop.classList.add("scrollTop-style");
totop.innerHTML =
	'<button class="scroll-btn"><i class="fa-solid fa-angles-up scroll-top" id="backToTop"></i><buttton>';
totop.addEventListener("click", scrollTop);

footerElem.after(totop);

window.onscroll = function () {
	var pageOffset =
		document.documentElement.scrollTop || document.body.scrollTop;
	if (pageOffset >= 1000) {
		document.getElementById("backToTop").style.visibility = "visible";
	} else {
		document.getElementById("backToTop").style.visibility = "hidden";
	}
};

// responsive navbar component

const mobile_nav = document.querySelector(".mobile-nav-icon");
const headerElem = document.querySelector(".navbar");

mobile_nav.addEventListener("click", () => {
	headerElem.classList.toggle("active");
});

// sticky navbar
// ?bug: not working on mobile version / observer gets herosection very late
const observer = new IntersectionObserver(
	(entries) => {
		const ent = entries[0];
		!ent.isIntersecting
			? document.body.classList.add("sticky")
			: document.body.classList.remove("sticky");
	},
	{ root: null, threshold: 0 }
);

observer.observe(heroSection);
