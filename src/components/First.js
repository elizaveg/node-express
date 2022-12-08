import axios from "axios";
import React, { useEffect, useState } from "react";
import './grid.css';
import './content.css';

export default function First() {
    //get data from API
    const url = 'http://localhost:3100/';

    const [info, setInfo] = useState('');

    useEffect(() => {
        getAllInfo();
    }, []);

    const getAllInfo = () => {
        axios.get(`${url}pageConfig`)
            .then((response) => {
                const allInfo = response.data;
                setInfo (allInfo);
                console.log(response.data);
            })
            .catch(error => console.log(`Error: ${error}`));
    }
    console.log("userContext", info.userContext);
    console.log("productZones", info.productZones);

    return (
        <div className="Content">
            <div className="User">
                {info.userContext && (
                    <div key={info.userContext}>
                        <div>Name: {info.userContext.name.firstname}</div>
                        <div>Lastname: {info.userContext.name.lastname}</div>
                        <div>Phone: {info.userContext.phone}</div>
                    </div>
                )}
            </div>
            {info.productZones && (<div className="Products">
                {info.productZones.map(product => (
                    <div className="items" key={product.id}>
                        <div className="box col-xs-10 col-sm-8 col-md-5 col-lg-12 col-xl-12">
                            <h2>{product.title}</h2>
                            <div>{product.description}</div>
                            <div> Price: {product.price} $</div>
                        </div>
                    </div>
                ))}
            </div>)}
        </div>
    )
}

