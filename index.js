const express = require ('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefcards = require('./Data/chefcards.json');
const chefrecipies = require('./Data/chefrecipies.json');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('chef krunch is running')
});

app.get('/chefcards', (req,res) => {
    res.send(chefcards);
})


app.get('/chefrecipies', (req,res)=> {
    res.send(chefrecipies)
})

app.get('/chefcards/:id', (req, res) => {
    const id = req.params.id;
    const selectedCard = chefrecipies.find(chefrecipies => chefrecipies.id === id);
    console.log(selectedCard);
    res.send(selectedCard);
})

app.get('/chefrecipies/:RecipeId', (req,res)=> {
    const RecipeId = req.params.RecipeId;
    const selectedRecipe = chefrecipies.filter(chefrecipie => chefrecipie.RecipeId === RecipeId);
    console.log(selectedRecipe)
    res.send(selectedRecipe);
})

app.listen(port, ()=> {
    console.log(`chef krunch is running on port: ${port}`)
})