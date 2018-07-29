function getUNIXInfo(_timestamp) {
	const getDate = new Date(_timestamp);

	const day = '0' + getDate.getDate();
	const month = '0' + (getDate.getMonth() + 1);
	const year = getDate.getFullYear();
	const hours = '0' + getDate.getHours();
	const minutes = '0' + getDate.getMinutes();

	return {
		date: `${day.substr(-2)}/${month.substr(-2)}/${year}`,
		time: `${hours.substr(-2)}:${minutes.substr(-2)}`
	};
}

/* EXPORTS */
export const ConvertToDateAndTime = (_timestamp) => {
	const myData = getUNIXInfo(_timestamp);
	return `${myData.date} at ${myData.time}`;
};

export const ConvertToDate = (_timestamp) => {
	const myData = getUNIXInfo(_timestamp);
	return myData.date;
};

export const OrderBy = (arr = [], propName) => {
	if(arr.length && propName) {
		return arr.sort((a, b) => b[propName] - a[propName]);
	}

	return arr.sort();
};
