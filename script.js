const imageContainer = document.getElementById('image-container');

const count = 3;
const apiKey = 'tcCJC8Q_ZAbZxu6R98dZDirzEsD3HZc1GSqa2H6Q4vg';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`

const images = [0]

async function getApi() {
	const response = await fetch(apiUrl);
	const data = await response.json();

	console.log(data);
}



getApi();

