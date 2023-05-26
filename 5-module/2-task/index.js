function toggleText() {

	let btn = document.querySelector('.toggle-text-button');
	let text = document.querySelector('[id="text"]');

	btn.addEventListener('click', () => !text.hidden ? text.hidden = true : text.hidden = false);
}
