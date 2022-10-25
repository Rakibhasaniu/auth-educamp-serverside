const express = require('express')
const app = express();
const port = process.env.port || 5000;


app.get('/', (req, res) => {
    res.send('Courses Api Runnibg');
});

app.listen(port, () => {
    console.log('Education Server ', port);
})