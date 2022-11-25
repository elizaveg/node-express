//import React from 'react';
//const express = require('express');
//const app = express();
import axios from "axios";
import React, { useEffect, useState } from "react";
import './grid.css';

function Product(){
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const {data} = await axios.get("https://fakestoreapi.com/products")

            setProducts(data)
    }
    console.log(products)

    return (
        <div className="Products">
            {products.map(product => (
                <div key={product.id}>
                    <div className="box col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <h2>{product.title}</h2>
                        <div>{product.description}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product;