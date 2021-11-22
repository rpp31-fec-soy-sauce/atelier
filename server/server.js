const express = require('express');
const makeApiRequests = require('./api');

const app = express();
const port = 3000;

require('dotenv').config('../.env');

const apiMiddleware = require('./apiMiddleware');

/* Register middleware */
app.use(express.urlencoded());
app.use(express.json());

app.get('/api/qa/questions', (req, res) => {

  let allQuestions = [];
  let page = 1;

  const getNextQuestions = () => {
    makeApiRequests('GET', `qa/questions/?product_id=${req.query.product_id}&page=${page}&count=${1000}`)
      .then(({ data }) => {
        const questions = data.results;
        allQuestions = allQuestions.concat(questions);
        if (questions.length < 1) return res.send(allQuestions);
        page += 1;
        getNextQuestions();
      })
      .catch(err => res.status(500).send(err.response.data));
  };

  getNextQuestions();
});

app.use(apiMiddleware);
app.use(express.static('client/dist/'));
app.use('*', express.static('client/dist/index.html'));
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));