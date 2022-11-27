const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

// Unsplash API
let count = 5;
const apiKey = 'tcCJC8Q_ZAbZxu6R98dZDirzEsD3HZc1GSqa2H6Q4vg';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`
const loadingImage = true;

let ready = false;
let totalImages = 0;
let imagesLoaded = 0;

let photoArrays = [];

// Check if all images were loaded
function imageLoaded() {
	imagesLoaded++;
	if (imagesLoaded === totalImages) {
		ready = true;
		loader.hidden = true;
		loadingImage = false;
		count = 30
	}
}


// Helper function to set attributes

function setAttributes(element, attributes) {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key])
	}
}


function displayPhotos() {
	imagesLoaded = 0;
	totalImages = photoArrays.length;
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

// Event Listener, check when each is finished loading
	thePhotos.addEventListener('load', imageLoaded());

	// imageLoaded();    <= *Somehow this is working too instead of using the listener*

	item.appendChild(thePhotos);
	imageContainer.appendChild(item);
})
} 

async function getApi() {
	try {
		const response = await fetch(apiUrl);
		photoArrays = await response.json();
		displayPhotos();
	} catch (error) {

	}
}

window.addEventListener('scroll', () => {
	if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
		ready = false;
		getApi();
	}
})

getApi();




