const express = require('express');
const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.use(cors());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//ROUTES
app.get('/products', async (req, res, next)  => {
    const products = 'https://fakestoreapi.com/products';
   /* var obj = {
        productZones: []
    };
    */
    const fetch_response = await fetch(products);
    const json = await fetch_response.json();
     res.json(json);
});

app.get('/users', async (req, res, next)  => {
    const users = 'https://fakestoreapi.com/users/1';
    /* var obj = {
         productZones: []
     };
     */
    const fetch_response = await fetch(users);
    const json = await fetch_response.json();
    res.json(json);
});

//app.listen(3000);
app.listen(3000, function () {
    console.log("Server is running on localhost 3000");
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))