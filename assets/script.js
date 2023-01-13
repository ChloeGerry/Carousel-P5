const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const leftArrow = document.querySelector(".js-arrowLeft");
const rightArrow = document.querySelector(".js-arrowRight");
const bannerImage = document.querySelector(".js-bannerImage");
const bannerText = document.querySelector(".js-bannerText");
const pathToImages = "./assets/images/slideshow/";
let selectedDot = document.querySelector(".dot_selected");
const dots = document.querySelectorAll(".dot");

let slideIndex = 0;

const bannerFill = () => {
	bannerImage.src = pathToImages + slides[slideIndex].image;
	bannerText.innerHTML = slides[slideIndex].tagLine;
	dots[slideIndex].classList.add("dot_selected");
}

leftArrow.addEventListener("click", () => {
	if (slideIndex === 0) {
		dots[slideIndex].classList.remove("dot_selected");
		slideIndex = slides.length;
	}

	slideIndex--;

	if (slideIndex === slides.length - 1) {
		dots[slideIndex].classList.remove("dot_selected");
	} else {
		dots[slideIndex + 1].classList.remove("dot_selected");
	}
	
	bannerFill();
})

rightArrow.addEventListener("click", () => {
	slideIndex++;
	dots[slideIndex - 1].classList.remove("dot_selected");

	if (slideIndex === slides.length) {
		slideIndex = 0;
	}

	bannerFill();
})