const express = require('express');
const axios = require("axios");
//const cors = require('cors');
const app = express();
const router = require('express').Router();
const bodyParser = require('body-parser');

//import fetch from "node-fetch";
//import axios from "axios";

//app.use(cors());

// Configuring body parser middleware
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.js'); // change the path to your index.html
});

//ROUTES
 app.get('/products', async (req, res, next)  => {
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


const fetchData = async () => {
    const {data} = await axios.get("https://fakestoreapi.com/users/1") //return obj
    //const {dataProducts} = await axios.get("https://fakestoreapi.com/products") return array
    // const response = {
    //    userContext: data
    //    productZones: dataProducts,
    // }


    //final
    //const {data} = await axios.get("http://localhost:3000/pageConfig") //return obj

    console.log("data", data);
};


app.get('/pageConfig', async (req, res) => {
    const {data} = await axios.get("https://fakestoreapi.com/users/1") //return obj
    // let respone = {};
    // axios.get('https://fakestoreapi.com/users/1')
    //     .then((response) => {
    //         respone = response;
    //     });
    // return respone;
    axios
        .get("https://fakestoreapi.com/users/1")
        .then((response) => {
            console.log("response", response.data);
        })
        .catch((err) => console.log(err));
});

// let data;
// axios.get('https://fakestoreapi.com/users/1').then(res => {
//     data = res.data;
// });
// router.get('/pageConfig', (req, res) => {
//     res.send(data);
// });
//
// app.use('/pageConfig', router);
// app.use(bodyParser.json());


//app.listen(3000);
app.listen(3100, function () {
    console.log("Server is running on localhost 3100");
});

/*
//app.listen(3100, () => console.log(`App listening on port 3100!`))
*/
