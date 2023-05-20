function makeDiagonalRed(table) {

	for (let i = 0; table.rows.length > i; i++) {

		let row = table.rows[i];
		row.cells[i].style.backgroundColor = 'red';
	};
}
