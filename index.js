const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.port || 5000;

const Allcategories = require('./data/category.json');
// const course = require('./data/courses.json');


app.use(cors());

app.get('/categories', (req, res) => {
    res.send(Allcategories);
});

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    const details = Allcategories.find(detail => detail.id == id);
    res.send(details);
});



app.listen(port, () => {
    console.log('Education Server ', port);
})

