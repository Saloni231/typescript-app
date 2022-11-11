/*"use strict";*/
import React from 'react'

function Parameters() {
    
    function optionalParameter(name, id) {
        console.log(`Name: ${name}`);
        console.log(`ID: ${id}`);
    }
    
    function defaultParameter(name, id = 1) {
        console.log(`Name: ${name}`);
        console.log(`ID: ${id}`);
    }
    
    function restParameter(name, id = 1, ...address) {
        console.log(`Name: ${name}`);
        console.log(`ID: ${id}`);
        console.log(`Address: ${address.join(' ')}`);
    }
    
    return (
    <React.Fragment>
        <>{optionalParameter('Saloni',10)}</>
        <>{optionalParameter('Saloni')}</>
        <>{defaultParameter('Saloni',10)}</>
        <>{defaultParameter('Saloni')}</>
        <>{restParameter('saloni',10,'Mumbai','Maharashtra')}</>
        <>{restParameter('saloni')}</>
    </React.Fragment>
    )
}

export default Parameters
//# sourceMappingURL=Parameters.js.map