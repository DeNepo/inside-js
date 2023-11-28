document
	.getElementById('add')
	.addEventListener(
		'click',
		() =>
			(document.getElementById('display-expected').innerText = `${Number(
				document.getElementById('left').value,
			)} + ${Number(document.getElementById('right').value)} = ${
				Number(document.getElementById('left').value) +
				Number(document.getElementById('right').value)
			}`),
	),
	document
		.getElementById('subtract')
		.addEventListener(
			'click',
			() =>
				(document.getElementById('display-expected').innerText = `${Number(
					document.getElementById('left').value,
				)} - ${Number(document.getElementById('right').value)} = ${
					Number(document.getElementById('left').value) -
					Number(document.getElementById('right').value)
				}`),
		),
	document
		.getElementById('multiply')
		.addEventListener(
			'click',
			() =>
				(document.getElementById('display-expected').innerText = `${Number(
					document.getElementById('left').value,
				)} * ${Number(document.getElementById('right').value)} = ${
					Number(document.getElementById('left').value) *
					Number(document.getElementById('right').value)
				}`),
		),
	document
		.getElementById('divide')
		.addEventListener(
			'click',
			() =>
				(document.getElementById('display-expected').innerText = `${Number(
					document.getElementById('left').value,
				)} / ${Number(document.getElementById('right').value)} = ${
					Number(document.getElementById('left').value) /
					Number(document.getElementById('right').value)
				}`),
		);
