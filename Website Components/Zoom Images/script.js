const img = document.querySelector('img');

const zoomImg = e => {
	const x = e.clientX;
	const y = e.clientY;

	const newX = (img.offsetLeft - x) * (-1);
	const newY = (img.offsetTop - y) * (-1);

	img.style.transformOrigin = `${newX}px ${newY}px`;
	img.classList.add('zoom-img');
}

const resetImg = () => {
	img.classList.remove('zoom-img');
}

img.addEventListener('mousemove', zoomImg);
img.addEventListener('mouseout', resetImg);