const form = document.getElementById('form');

form.addEventListener('submit', e => {
	e.preventDefault();

	const email = form['email'];
    const emailValue = email.value;
	const small = form.querySelector('small');

	if (!emailValue) {
        email.classList.add('input-error');
		small.classList.add('error');
		small.innerText = 'It looks like you forgot to add your email';
		small.style.display = 'block';
	} 
    
    else if (!EmailValidation(emailValue)) {
        email.classList.add('input-error');
		small.classList.add('error');
		small.innerText = 'Please provide a valid email address';
		small.style.display = 'block';
	} 
    
    else {
		email.classList.remove('error');
		small.innerText = '';
		small.style.display = 'none';
	}
});

function EmailValidation(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
