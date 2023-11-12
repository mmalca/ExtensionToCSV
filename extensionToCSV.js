

document.addEventListener('DOMContentLoaded', function () {
	const button = document.getElementById('actionButton');
	if (button) {
		button.addEventListener('click', function () {
			//alert('Button clicked!');


			const forms = document.forms;

			for (let i = 0; i < forms.length; i++) {
				const form = forms[i];
				//console.log(`Form ${i + 1} ID: ${form.id}`);
				const names = [];
				const values = [];

				//pushing all of the non-empty names and values into names and values arrays
				for (let j = 0; j < form.elements.length; j++) {
					const element = form.elements[j];
					if ((element.name) && (element.value !== "") && (element.value !== undefined)){
						//console.log(`Element ${j + 1}: Name - ${element.name}, Value - ${element.value}`);
						names.push(element.name);
						values.push(element.value);
					}
				}

				//generating a csv file
				let csv = 'data:text/csv;charset=utf-8,';
				const namesStr = names.join(',');
				csv+=namesStr;
				csv+='\n';

				const valuesSrt = values.join(',');
				csv+=valuesSrt;
				csv+='\n';

				console.log(csv)

				const encodedUri = encodeURI(csv);
				const link = document.createElement('a');
				link.setAttribute('href', encodedUri);
				link.setAttribute('download', 'data.csv');
				document.body.appendChild(link);
				link.click();

				}
			});

		}
		else{
			console.error('Button not found');
		}
	});

