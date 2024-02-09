const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.mainMenu');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	console.log("This button works")
});