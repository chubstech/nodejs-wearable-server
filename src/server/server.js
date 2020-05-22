const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'build')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require(path.join(__dirname, "./routes"));
app.use(routes);

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
