//genrate ticket
const generateButton = document.getElementById('generate-ticket');
generateButton.addEventListener('click',
	function() {
		
		const userName = document.getElementById('user-name').value;
		const userKm = document.getElementById('user-km').value;
		const userAge = document.getElementById('user-age').value;	
		
		//prezzo
		const price= userKm * 0.21;
		let discount = 0;
		//if
		if(userAge==='minorenne') {
			discount = price * 20 / 100;
		} else if (userAge === 'over') {
			discount = price * 40 / 100;
		}
		const finalPrice = price - discount;

		//consolelog
		console.log(userName);
		console.log(userKm);
		console.log(userAge);
		console.log(finalPrice);

	}
);

