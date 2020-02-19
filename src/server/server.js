const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require(path.join(__dirname, "./routes"));
app.use(routes);

app.get('/', function (req, res, next) {
  res.send('<div>Shhhh</div>');
})

app.get("*", function(req, res) {
  res.redirect(302, '/');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
