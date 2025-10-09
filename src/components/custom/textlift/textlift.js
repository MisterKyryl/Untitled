import "./textlift.scss";

document.querySelectorAll('[data-fls-textlift]').forEach(dataTextElement => {
	const textContent = dataTextElement.textContent.trim();
	const splitByLetter = dataTextElement.hasAttribute('data-fls-text-every'); // по буквам, если есть
	const initialDelay = parseFloat(dataTextElement.getAttribute('data-fls-text-delay')) || 0;

	dataTextElement.innerHTML = '';
	const parts = splitByLetter ? textContent.split('') : textContent.split(' ');

	parts.forEach(part => {
		const textBody = document.createElement('span');
		textBody.classList.add('textlift');

		const textAnimation = document.createElement('span');
		textAnimation.classList.add('textlift__animation');

		// если это пробел — вставляем неразрывный пробел
		textAnimation.innerHTML = part === ' ' ? '&nbsp;' : part;

		textBody.appendChild(textAnimation);
		dataTextElement.appendChild(textBody);

		if (!splitByLetter) dataTextElement.appendChild(document.createTextNode(' '));
	});

	// Задержка анимации для последовательного подъёма
	const animatedSpans = dataTextElement.querySelectorAll('.textlift .textlift__animation');
	animatedSpans.forEach((span, index) => {
		const delay = initialDelay + 0.02 * index;
		span.style.transitionDelay = `${delay}s`;
	});
});
