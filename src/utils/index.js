const newLocal = '/notImage.png';

export const loadPlaceholderImage = (e) => {
	e.onerror = null;
	e.target.src = newLocal;
	e.target.style.opacity = '0.4';
};
