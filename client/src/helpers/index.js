function getUNIXInfo(_timestamp) {
	const getDate = new Date(_timestamp);

	const day = '0' + getDate.getDay();
	const month = '0' + getDate.getMonth();
	const year = getDate.getFullYear();
	const hours = getDate.getHours();
	const minutes = '0' + getDate.getMinutes();
	const seconds = '0' + getDate.getSeconds();

	return {
		date: `${day}/${month}/${year}`,
		time: `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`
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

export const OrderBy = (arr, propName) => {
	if(arr.length) {
		arr.sort((a, b) => b[propName] - a[propName]);
		return arr;
	}
};
