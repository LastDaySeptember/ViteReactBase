import { createElement } from 'react';

//imperative function
const getCurrentYear = () => {
	const dateNow = new Date();
	console.log(dateNow);
	const currentYear = dateNow.getFullYear();
	return currentYear;
};

//declarative component
export const CurrentYear = () => {
	const currentYear = getCurrentYear();
	return <p className="currentYear">Current year is {currentYear}</p>;
};

export const CurrentYearJS = () => {
	const currentYear = getCurrentYear();
	const pYear = createElement(
		'p',
		{ className: 'currentYear' },
		'Current Year is ',
		currentYear,
	);

	return pYear;
};
