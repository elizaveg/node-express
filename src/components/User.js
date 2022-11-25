//import React from 'react';

import axios from "axios";
import React, { useEffect, useState } from "react";

function User(){
    const [users, setUsers] = useState([])

//    const userContext = data.map(u =>u.id)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const {data} = await axios.get("https://fakestoreapi.com/users/1") //return obj
        //const {dataProducts} = await axios.get("https://fakestoreapi.com/products") return array
        // const response = {
        //    productZones: dataProducts,
        //    userContext: data
        // }


        //final
        //const {data} = await axios.get("http://localhost:3000/pageConfig") //return obj

            setUsers(data)
    }
    console.log(users)
 console.log("users", users);

    const names = users.name;

    return (
        <div className="Users">
                <div key={users.id}>
                    <div>Firstname: {names.firstname}</div>
                    <h2>Lastname: {users.lastname}</h2>
                    <div>Phone: {users.phone}</div>
                    <div>Address: {users.address}</div>
                </div>

        </div>
    )
}


export default User;