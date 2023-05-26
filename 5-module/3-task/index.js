function initCarousel() {

	let btnArrowRight = document.querySelector('.carousel__arrow_right');
	let btnArrowLeft = document.querySelector('.carousel__arrow_left');
	let carousel = document.querySelector('.carousel__inner');
	let slide = document.querySelector('.carousel__slide');
	let slideWidth = slide.offsetWidth;
	let position = 0;

	function makeSlideRight() {

		position += slideWidth;
		carousel.style.transform = `translateX(-${position}px)`;
		hideBtn();
	};

	function makeSlideLeft() {
		position -= slideWidth;
		carousel.style.transform = `translateX(-${position}px)`;
		hideBtn();
	}

	function hideBtn() {

		let slideAll = document.querySelectorAll('.carousel__slide');
		(position === slideWidth * (slideAll.length - 1)) ? btnArrowRight.style.display = 'none' : btnArrowRight.style.display = null;
		position === 0 ? btnArrowLeft.style.display = 'none' : btnArrowLeft.style.display = null;
	}

	btnArrowLeft.style.display = 'none';

	btnArrowRight.addEventListener('click', makeSlideRight);
	btnArrowLeft.addEventListener('click', makeSlideLeft);
}