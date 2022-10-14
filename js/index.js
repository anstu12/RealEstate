//counter
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
	counter.innerText = "0";
	const updateCounter = () => {
		const target = +counter.getAttribute("data-target");
		const c = +counter.innerText;

		const increment = target / 250;
		if (c < target) {
			counter.innerText = Math.ceil(c + increment);
			setTimeout(updateCounter, 1);
		} else {
			counter.innerText = target + "+";
		}
	};
	updateCounter();
});

//Fade and scroll into view
const fader = document.querySelectorAll(".fade-in");

const appearOptions = {
	threshold: 0,
	rootMargin: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
	entries,
	appearOnScroll
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add("appear");
			appearOnScroll.unobserve(entry.target);
		}
	});
},
appearOptions);

fader.forEach((fader) => {
	appearOnScroll.observe(fader);
});

const sliders = document.querySelectorAll(".slide-in");

sliders.forEach((sliders) => {
	appearOnScroll.observe(sliders);
});

//carousel

const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel_btn--right");
const prevButton = document.querySelector(".carousel_btn--left");

const slideWidth = slides[0].getBoundingClientRect().width;

// arrange slides next to one another

const setSlidePosition = (slide, index) => {
	slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

//move slide to left
//move slide to right

nextButton.addEventListener("click", (e) => {
	const currentSlide = track.document.querySelector(".current_slide");
	const nextSlide = currentSlide.nextElementSibling;
	const amountToMove = nextSlide.style.left;
	//move to next slide
	track.style.transform = "translateX(-'+ amountToMove +')";
	currentSlide.classList.remove("current_slide");
	nextSlide.classList.add("current_slide");
});
