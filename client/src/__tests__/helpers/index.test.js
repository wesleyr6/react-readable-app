import * as Helpers from '../../helpers/';

describe('Helpers', () => {
	const getTimestamp = 1532633738316;

	it('ConvertToDateAndTime: Should return a string', () => {
		expect(Helpers.ConvertToDateAndTime(getTimestamp)).toBeString();
	});

	it('ConvertToDateAndTime: Should return 26/07/2018 at 16:35', () => {
		expect(Helpers.ConvertToDateAndTime(getTimestamp)).toEqual('26/07/2018 at 16:35');
	});

	it('ConvertToDate: Should return a string', () => {
		expect(Helpers.ConvertToDate(getTimestamp)).toBeString();
	});

	it('ConvertToDate: Should return 26/07/2018', () => {
		expect(Helpers.ConvertToDate(getTimestamp)).toEqual('26/07/2018');
	});

	it('OrderBy: Should return an array', () => {
		expect(Helpers.OrderBy()).toBeArray();
	});

	it('OrderBy: Should order a simple array', () => {
		expect(Helpers.OrderBy([2,1])).toEqual([1,2]);
	});

	it('OrderBy: Should order an object array', () => {
		const arr = [{ number: 1 }, { number: 2}];
		const arrOrdered = [{ number: 2 }, { number: 1 }];

		expect(Helpers.OrderBy(arr, 'number')).toEqual(arrOrdered);
	});
});
