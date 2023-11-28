document
	.getElementById('suggestions')
	.addEventListener('input', () =>
		document.getElementById('noun').value !== '' &&
		document.getElementById('verb').value !== '' &&
		document.getElementById('adjective').value !== ''
			? (document.getElementById(
					'display-expected',
			  ).innerText = `When the sunset is ${
					document.getElementById('adjective').value
			  }, ${document.getElementById('noun').value}s always ${
					document.getElementById('verb').value
			  }.`)
			: (document.getElementById('display-expected').innerText = ''),
	);
