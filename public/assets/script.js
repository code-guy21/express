const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const userForm = document.querySelector('#userForm');

userForm.addEventListener('submit', function (e) {
	e.preventDefault();

	const username = usernameInput.value;
	const email = emailInput.value;
	const password = passwordInput.value;

	fetch('/api/signup', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify({
			username,
			email,
			password,
		}),
	}).then(function (response) {
		console.log(response);
	});
});
