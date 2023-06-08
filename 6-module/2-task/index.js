import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
	elem = null;
	#item = {};

	constructor(product) {
		this.#item = product;
		this.elem = this.#render();
	}

	#render() {
		let elemProductCard = createElement(this.#template());
		let btn = elemProductCard.querySelector('.card__button');
		btn.addEventListener('click', this.#onCustomEventAddProduct);

		return elemProductCard;

	}

	#template() {
		return `
		<div class="card">
			<div class="card__top">
				<img src="/assets/images/products/${this.#item.image}" class="card__image" alt="product">
				<span class="card__price">€${this.#item.price.toFixed(2)}</span>
			</div>
			<div class="card__body">
				<div class="card__title">${this.#item.name}</div>
				<button type="button" class="card__button">
						<img src="/assets/images/icons/plus-icon.svg" alt="icon">
				</button>
			</div>
		</div>
		`
	}

	#onCustomEventAddProduct = () => {
		let eventProductAdd = new CustomEvent('product-add', {
			detail: this.#item.id,
			bubbles: true
		});

		this.elem.dispatchEvent(eventProductAdd);
	}
}