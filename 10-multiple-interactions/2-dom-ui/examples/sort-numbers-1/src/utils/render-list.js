/**
 *
 */
export const renderList = (things = [], bullet = '-') => {
	let list = '';
	for (const thing of things) {
		list += `${bullet} ${thing}\n`;
	}
	return list;
};
