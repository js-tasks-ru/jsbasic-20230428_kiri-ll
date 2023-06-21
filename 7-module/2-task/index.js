import createElement from '../../assets/lib/create-element.js';

export default class Modal {

	#elem = '';

	constructor() {
		this.#elem = this.#render();

	}

	#render() {
		let elem = createElement(this.#template());

		elem.querySelector('.modal__close').addEventListener('click', this.close);

		return elem;
	}

	#template() {
		return `
		<div class="modal">
    		<div class="modal__overlay"></div>
			<div class="modal__inner">
				<div class="modal__header">
				<button type="button" class="modal__close">
					<img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
				</button>
				</div>
			</div>
		</div>
		`
	}

	setTitle(value) {
		let elem = createElement(`
			<h3 class="modal__title">
         	${value}
        </h3>
		`);

		this.#elem.querySelector('.modal__header').append(elem);

	}

	setBody(value) {
		let modalBodyElem = this.#elem.querySelector('.modal__body');

		if (modalBodyElem) {
			modalBodyElem.innerHTML = ''
		} else {

			let modalBody = createElement(`
			<div class="modal__body"></div>
		`);
			this.#elem.querySelector('.modal__header').append(modalBody);
		};


		this.#elem.querySelector('.modal__body').append(value);
	}

	open() {
		let bodyDoc = document.querySelector('body');
		bodyDoc.append(this.#elem);
		bodyDoc.classList.add('is-modal-open');

		bodyDoc.addEventListener('keydown', this.#onRemoveEsc, { once: true });
	}

	close = () => {
		let bodyDoc = document.querySelector('body');
		let modalElem = document.querySelector('.modal');

		if (!modalElem) return;

		bodyDoc.classList.remove('is-modal-open');
		modalElem.remove();
		bodyDoc.removeEventListener('keydown', this.#onRemoveEsc);

	}

	#onRemoveEsc = (event) => {
		if (event.code !== 'Escape') return;
		this.close();
	}
}
