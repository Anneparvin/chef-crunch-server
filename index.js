const express = require ('express');
const app = express();
const port = process.env.PORT || 5000;

const chefcards = require('./Data/chefcards.json');

app.get('/', (req, res) => {
    res.send('chef krunch is running')
});

app.get('/chefcards', (req,res) => {
    res.send(chefcards);
})

app.listen(port, ()=> {
    console.log(`chef krunch is running on port: ${port}`)
})