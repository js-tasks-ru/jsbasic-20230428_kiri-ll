/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
	elem = null;
	#items = '';

	constructor(rows) {

		this.#items = rows;
		this.elem = this.#render();
	}

	#render() {
		let wrapTable = document.createElement('div');
		wrapTable.classList.add('wrapTable');
		wrapTable.innerHTML = this.#template();

		wrapTable.addEventListener('click', this.#onRemoveRow);

		return wrapTable;
	}

	#template() {
		return `
		<table>
			<thead>
			<tr>
				<th>Имя</th>
				<th>Возраст</th>
				<th>Зарплата</th>
				<th>Город</th>
				<th></th>
			</tr>
			</thead>
			<tbody>
				${this.#items.map((elem) => {
			let row = '';
			for (let key in elem) {
				row += `<td>${elem[key]}</td>`;
			}
			return row;
		}).map((elem) => {
			let row = elem + `<td><button>X</button></td>`;
			return `<tr class="rowRemove">${row}</tr>`;
		}).join('')}
			</tbody>
		</table>
		`
	}

	#onRemoveRow = (event) => {
		if (event.target.tagName !== 'BUTTON') return;
		event.target.closest('.rowRemove').remove();
	}

}