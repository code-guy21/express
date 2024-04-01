const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/', function (req, res) {
	const absolutePath = path.join(__dirname, './public/index.html');
	res.sendFile(absolutePath);
});

app.post('/api/signup', function (req, res) {
	const users = JSON.parse(
		fs.readFileSync(path.join(__dirname, './users.json'), 'utf-8')
	);

	users.push(req.body);

	fs.writeFileSync(path.join(__dirname, './users.json'), JSON.stringify(users));

	res.send(users);
});

app.listen(PORT, function () {
	console.log('server running on port 3001');
});
