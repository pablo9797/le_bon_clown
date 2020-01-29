const express = require('express');
const cors = require('cors');
const app = express();
const port = 8001;
const connection = require('./conf.js');
const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
// const signature = require('./signature.js');

app.use(bodyParser.json());

app.use(
	bodyParser.urlencoded({
		extended: true,
	}),
);

app.get('/posts', (req, res) => {
	// const userId = req.authData.sub
	const sqlQuery = 'SELECT * FROM post'
	connection.query(sqlQuery, (err, results) => {
    if (err) {
		console.log(err)
      	res.status(500).send('Erreur lors de la récupération des posts');
    } 	else {
      	res.json(results);
    }
  });
});

app.post('/posts',  (req, res) => {
    const formData = {
      user_id: req.body.user_id,
      title: req.body.title,
      category: req.body.category,
      content: req.body.content
  }
  const sqlQuery = 'INSERT INTO post SET ?';
    connection.query(sqlQuery, formData, (err, results) => {
      if (err) {
      console.log(err);
      res.status(500).send("Error sending a new post");
      } else {
      res.sendStatus(200);
      }
    });
});

app.listen(port, err => {
	if (err) {
		throw new Error('Something bad happened...');
	}
	console.log(`Server is listening on ${port}`);
});