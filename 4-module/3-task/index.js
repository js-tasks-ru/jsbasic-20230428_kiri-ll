function highlight(table) {

	for (let i = 1; table.rows.length > i; i++) {

		let row = table.rows[i];

		!row.cells[3].dataset.available ? row.setAttribute('hidden', '') : undefined;

		row.cells[3].dataset.available == 'true' ? row.classList.add('available') : row.classList.add('unavailable');

		row.cells[2].innerHTML == 'm' ? row.classList.add('male') : row.classList.add('female');

		Number(row.cells[1].innerHTML) < 18 ? row.style.textDecoration = 'line-through' : undefined;
	};

}
