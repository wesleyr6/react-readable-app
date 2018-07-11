export const ConvertUNIX = (_timestamp) => {
	const getDate = new Date(_timestamp);

	const day = '0' + getDate.getDay();
	const month = '0' + getDate.getMonth();
	const year = getDate.getFullYear();
	const hours = getDate.getHours();
	const minutes = '0' + getDate.getMinutes();
	const seconds = '0' + getDate.getSeconds();

	const formattedTime = `${day}/${month}/${year} at ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;

	return formattedTime;
};
