const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
const count = 5;
const apiKey = 'tcCJC8Q_ZAbZxu6R98dZDirzEsD3HZc1GSqa2H6Q4vg';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

let photoArrays = [];

// Helper function to set attributes

function setAttributes(element, attributes) {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key])
	}
}


function displayPhotos() {
photoArrays.forEach((photo) => {

	const item = document.createElement('a');
	setAttributes(item, {
		href: photo.links.html,
		target: '_blank'
	})
	const thePhotos = document.createElement('img');
	setAttributes(thePhotos, {
		src: photo.urls.regular,
		title: 'Click For More',
		alt: 'Click For More'
	})

	item.appendChild(thePhotos);
	imageContainer.appendChild(item);
})
} 

async function getApi() {
	try {
		const response = await fetch(apiUrl);
		photoArrays = await response.json();
		console.log(photoArrays);
		displayPhotos();
	} catch (error) {

	}
}

getApi();




