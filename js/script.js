const generateButton = document.getElementById('generate-ticket');
generateButton.addEventListener('click',
	function() {
		const userName = document.getElementById('user-name').ariaValueMax;
	
		console.log(userName);
	}
);