export const getInitialValuesByName = (paymentsArr, name) => {
	let rightArr = paymentsArr.find(item => {
		return item.name === name;
	});

	return rightArr;
};
