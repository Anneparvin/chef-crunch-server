const express = require ('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefcards = require('./Data/chefcards.json');
const chefrecipies = require('./Data/chefrecipies.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('chef krunch is running')
});

app.get('/chefcards', (req,res) => {
    res.send(chefcards);
})

app.get('/chefrecipies', (req,res) => {
    res.send(chefrecipies);
})

app.get('/chefcards/:id', (req, res) => {
    const id = req.params.id;
    const selectedRecipe = chefcards.find(chefcards => chefcards.id === id);
    console.log(selectedRecipe);
})

app.get('/chefrecipies/:recipeId', (req,res)=> {
    const id = req.params.id;
    const categoryRecipe = chefcards.filter(chefcards => chefcards.recipeId === id);
    console.log(categoryRecipe);
})

app.listen(port, ()=> {
    console.log(`chef krunch is running on port: ${port}`)
})