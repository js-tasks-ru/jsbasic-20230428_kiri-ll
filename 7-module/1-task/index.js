import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
	elem = null;

	constructor(categories) {
		this.categories = categories;
		this.elem = this.#render();
	}

	#render() {
		let ribbon = createElement(this.#template());
		let ribbonArrowLeft = ribbon.querySelector('.ribbon__arrow_left');
		let ribbonArrowRight = ribbon.querySelector('.ribbon__arrow_right');
		let ribbonItems = ribbon.querySelectorAll('.ribbon__item');

		ribbonArrowLeft.addEventListener('click', this.#onMenuToTheLeft);
		ribbonArrowRight.addEventListener('click', this.#onMenuToTheRight);

		for (let i = 0; ribbonItems.length > i; i++) {
			ribbonItems[i].addEventListener('click', this.#onClickElementMenu);
		}

		return ribbon;
	}

	#onMenuToTheLeft = () => {
		let ribbonInner = document.querySelector('.ribbon__inner');
		ribbonInner.scrollBy(-350, 0);

		ribbonInner.addEventListener('scroll', () => {
			let ribbonArrow = document.querySelector('.ribbon__arrow');
			let ribbonArrowRight = document.querySelector('.ribbon__arrow_right');
			let scrollLeft = ribbonInner.scrollLeft;

			if (!ribbonArrowRight.offsetWidth) ribbonArrowRight.classList.add('ribbon__arrow_visible');

			if (scrollLeft) return;
			ribbonArrow.classList.remove('ribbon__arrow_visible');

		});
	}

	#onMenuToTheRight = () => {
		let ribbonInner = document.querySelector('.ribbon__inner');
		ribbonInner.scrollBy(350, 0);

		ribbonInner.addEventListener('scroll', () => {
			let ribbonArrowRight = document.querySelector('.ribbon__arrow_right');
			let ribbonArrowLeft = document.querySelector('.ribbon__arrow_left');
			let scrollRight = ribbonInner.scrollWidth - ribbonInner.scrollLeft - ribbonInner.clientWidth;

			if (!ribbonArrowLeft.offsetWidth) ribbonArrowLeft.classList.add('ribbon__arrow_visible');

			if (scrollRight < 1) ribbonArrowRight.classList.remove('ribbon__arrow_visible');
		});
	}

	#onClickElementMenu = (event) => {
		event.preventDefault();
		let ribbonItem = event.target;
		let ribbonItems = document.querySelectorAll('.ribbon__item');

		for (let i = 0; ribbonItems.length > i; i++) {
			ribbonItems[i].classList.remove('ribbon__item_active');
		}

		ribbonItem.classList.add('ribbon__item_active');

		let eventRibbonItemActive = new CustomEvent('ribbon-select', {
			detail: event.target.dataset.id,
			bubbles: true
		});

		this.elem.dispatchEvent(eventRibbonItemActive);
	}

	#template() {
		return `
		<div class="ribbon">

			<button class="ribbon__arrow ribbon__arrow_left">
				<img src="/assets/images/icons/angle-icon.svg" alt="icon">
			</button>
	
				<nav class="ribbon__inner">
				${this.categories.map((elem) => {
			return `<a href="#" class="ribbon__item" data-id="${elem.id}">${elem.name}</a>`
		}).join('')}

				</nav>
	
			<button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
				<img src="/assets/images/icons/angle-icon.svg" alt="icon">
			</button>
	 </div>
	`
	}


}
