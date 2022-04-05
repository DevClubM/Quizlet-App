import React, { useState, useEffect } from 'react'
import Client from './Client'
import CreateClientform from './CreateClientform';

export default function Project(props) {

    const [clients, setClientList] = useState(
        [
            {name: "First Client", gender: "Male", id: '2'},
            {name: "Second Client", gender: "Female", id: '1'},
            {name: "Third Client", gender: "Male", id: '3'},
        ]    
    );

    function returnedClient(clint) {
        setClientList((prevList) => [...prevList, clint]);
        console.log(clint);
    }

    return (
        <>
            <CreateClientform getClient={returnedClient}></CreateClientform>
            {clients.map((client) => {
              return <Client key={client.id} client={client}/>
            })}
        </>
    ) 
}
