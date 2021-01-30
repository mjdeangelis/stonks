elements = document.querySelectorAll('.random-price');

for (let i=0; i < elements.length; i++) {
	// elements[i].text = `$${Math.floor(Math.random() * (10 - 1 + 1)) + 1}`;
	elements[i].textContent = `$${Math.floor(Math.random() * 40 + 1)}.${Math.floor(Math.random() * 9 + 1)}${Math.floor(Math.random() * 9 + 1)}`;
};
