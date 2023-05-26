const express = require ('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefrecipies = require('./Data/chefrecipies.json');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('chef krunch is running')
});

app.get('/chefrecipies', (req,res) => {
    res.send(chefrecipies);
})

app.listen(port, ()=> {
    console.log(`chef krunch is running on port: ${port}`)
})