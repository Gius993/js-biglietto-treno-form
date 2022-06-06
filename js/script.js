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
		//stampa
		document.getElementById('ticket-name').innerHTML = userName
		document.getElementById('ticket-price').innerHTML = finalPrice.toFixed(2)
		document.getElementById('ticket').classList.add('active')
		

	}
);
//annulla
const cancelTicket = document.getElementById('cancel-ticket');
cancelTicket.addEventListener('click',
	
	function() {
		
		    document.getElementById('user-name').value ='';
			document.getElementById('user-km').value ='';
			document.getElementById('user-age').value ='maggiorenne';	
			//stamapa annulla				
			document.getElementById('ticket-name').innerHTML = '';
		    document.getElementById('ticket-price').innerHTML = '';
		    document.getElementById('ticket').classList.remove('active');
	}

)
