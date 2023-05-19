function makeFriendsList(friends) {

	let arrNames = friends.map(item => `${item.firstName} ${item.lastName}`)
	let elemUl = document.createElement('ul');

	for (let name of arrNames) {

		let elemLi = document.createElement('li');
		elemLi.innerHTML = name;
		elemUl.appendChild(elemLi);
	};

	return elemUl;
}
