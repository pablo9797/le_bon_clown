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

app.use(cors());

app.get('/posts', (req, res) => {
	// const userId = req.authData.sub
	const sqlQuery = 'SELECT post.*, user.profile_pic from post left join user on user.id = post.user_id'
	connection.query(sqlQuery, (err, results) => {
    if (err) {
		console.log(err)
      	res.status(500).send('Erreur lors de la récupération des posts');
    } 	else {
      	res.json(results);
    }
  });
});

app.post('/posts', (req, res) => {
    const formData = {
      user_id: req.sub,
      title: req.body.title,
      category: req.body.category,
      content: req.body.content,
      price: req.body.price,
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