/*"use strict";
Object.defineProperty(exports, "__esModule", { value: true });*/
import React from 'react'

function FunctionTS() {
    
    const prefix = '🐉 ';
    /*console.log(`${prefix}`);*/
    const sampleProducts = [
        {
            id: 10,
            name: 'Pizza slice',
            description: 'fas fa-pizza-slice',
        },
        {
            id: 20,
            name: 'Ice cream',
            description: 'fas fa-ice-cream',
        },
        {
            id: 30,
            name: 'Cheese',
            description: 'fas fa-cheese',
        },
    ];
    
    function displayProducts() {
        console.log(sampleProducts.map((prod) => prod.name));
    }
    
    function findProduct(id) {
        const { name } = sampleProducts.find((prod) => (id === prod.id));
        console.log(`${prefix} found result..`);
        console.log(`Name: ${name}`);
    }
    
    function getuser(user) {
        console.log(`Name: ${user.name}`);
        console.log(`Age: ${user.age}`);
        console.log(`Address: ${user.address}`);
    }
    
    const sam = {
        name: 'sam',
        age: 10,
        address: 'USA'
    };

return (
    <React.Fragment>
        <>{displayProducts()}</>
        <>{findProduct(10)}</>
        <>{getuser(sam)}</>
    </React.Fragment>
  )
}

export default FunctionTS

/*async function asyncFunction() {
    const response: Response = await fetch('http://puppygifs.tumblr.com/api/read/json');
    const users  = await response.json();
    return users;
}

console.log(asyncFunction());*/ 
//# sourceMappingURL=FunctionTS.js.map