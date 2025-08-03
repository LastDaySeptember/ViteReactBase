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
