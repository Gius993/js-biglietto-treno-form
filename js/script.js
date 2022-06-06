//genrate ticket
const generateButton = document.getElementById('generate-ticket');
generateButton.addEventListener('click',
	function() {
		
		const userName = document.getElementById('user-name').value;
		const userKm = document.getElementById('user-km').value;
		const userAge = document.getElementById('user-age').value;	
		
		//prezzo
		const price= userKm * 0.21;
		
		
		console.log(userName);
		console.log(userKm);
		console.log(userAge)

	}
);

