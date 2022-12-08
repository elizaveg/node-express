const express = require('express');
const app = express();

//var cors = require('cors')

//app.use(cors());

//app.use(cors(corsOptions));

app.get('/', function(req, res){
    res.sendFile(__dirname+'/server.js'); // change the path to your index.html
});

//ROUTES
 /*app.get('/products', async (req, res, next)  => {
    const products = 'https://fakestoreapi.com/products';
    const fetch_response = await fetch(products);
    const json = await fetch_response.json();
     res.json(json);
});


app.get('/user', async (req, res, next)  => {
    const user = 'https://fakestoreapi.com/users/1';
    const fetch_response = await fetch(user);
    const json = await fetch_response.json();
    res.json(json);
});
*/

app.get('/pageConfig', async (req, res) => {
    const [userResponse, productsResponse] = await Promise.all([
        fetch('https://fakestoreapi.com/users/1'),
        fetch('https://fakestoreapi.com/products')
    ]);
    const user = await userResponse.json();
    const products = await productsResponse.json();
    const final = {
        productZones: products,
        userContext: user,
    }
    res.json(final);
});


//app.listen(3000);
app.listen(3100, function () {
    console.log("Server is running on localhost 3100");
});

