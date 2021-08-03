const express = require("express");
const path = require('path');
const app = express();
const port = 8000;
//console.log(__dirname);
const staticPath = (path.join(__dirname, "/public"))
app.use(express.static(staticPath));
//console.log(staticPath);app.get('/', (req, res) => {
app.get('/', (req, res) => {
    res.send("welcome to my home page");
});
app.get('/about', (req, res) => {
    res.status(200).send("welcome to my about page");
});
app.listen(port, () => {
    console.log(`listening to the port number ${port}`);
});