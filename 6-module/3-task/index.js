import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
	elem = null;

	constructor(slides) {

		this.slides = slides;
		this.elem = this.#render();
	}

	#render() {
		let slider = createElement(this.#template());

		let btnArrowRight = slider.querySelector('.carousel__arrow_right');
		let btnArrowLeft = slider.querySelector('.carousel__arrow_left');
		let carousel = slider.querySelector('.carousel__inner');
		let btnAddProduct = slider.querySelectorAll('.carousel__button');
		let slideWidthCarousel = 0;
		let position = 0;

		function makeSlideRight() {
			let slide = document.querySelector('.carousel__slide');
			slideWidthCarousel = slide.offsetWidth;
			position += slideWidthCarousel;
			carousel.style.transform = `translateX(-${position}px)`;
			hideBtn();
		};

		function makeSlideLeft() {
			let slide = document.querySelector('.carousel__slide');
			slideWidthCarousel = slide.offsetWidth;
			position -= slideWidthCarousel;
			carousel.style.transform = `translateX(-${position}px)`;
			hideBtn();
		}

		function hideBtn() {

			let slideAll = slider.querySelectorAll('.carousel__slide');
			(position === slideWidthCarousel * (slideAll.length - 1)) ? btnArrowRight.style.display = 'none' : btnArrowRight.style.display = null;
			position === 0 ? btnArrowLeft.style.display = 'none' : btnArrowLeft.style.display = null;
		}

		btnArrowLeft.style.display = 'none';

		btnArrowRight.addEventListener('click', makeSlideRight);
		btnArrowLeft.addEventListener('click', makeSlideLeft);

		for (let i = 0; btnAddProduct.length > i; i++) {
			btnAddProduct[i].addEventListener('click', this.#onCustomEventAddProduct);
		};

		return slider;

	}

	#template() {
		return `
		<div class="carousel">
			<div class="carousel__arrow carousel__arrow_right">
			<img src="/assets/images/icons/angle-icon.svg" alt="icon">
			</div>
			<div class="carousel__arrow carousel__arrow_left">
			<img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
			</div>

		<div class="carousel__inner">
		
			${this.slides.map((elem) => {
			let string = `
				<div class="carousel__slide" data-id="${elem.id}">
					<img src="/assets/images/carousel/${elem.image}" class="carousel__img" alt="slide">
					<div class="carousel__caption">
						<span class="carousel__price">€${elem.price}</span>
						<div class="carousel__title">${elem.name}</div>
						<button type="button" class="carousel__button">
							<img src="/assets/images/icons/plus-icon.svg" alt="icon">
						</button>
					</div>
				</div>
				`
			return string;
		}).join(`<br>`)}
			

		</div>
	</div>
 </div>
		`
	}

	#onCustomEventAddProduct = (event) => {
		let eventProductAdd = new CustomEvent('product-add', {
			detail: event.target.closest('.carousel__slide').dataset.id,
			bubbles: true
		})

		this.elem.dispatchEvent(eventProductAdd);
	}
}
