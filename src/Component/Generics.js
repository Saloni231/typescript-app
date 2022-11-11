/*"use strict";
Object.defineProperty(exports, "__esModule", { value: true });*/

import React, { Component } from 'react'

export class Generics extends Component {

    call(){
        let obj1 = new genericClass('1', 'saloni', ['phone', 'laptop']);
        console.log(`ID: ${obj1.id}`)
        console.log(`Name: ${obj1.name}`)
        console.log(`Items: ${obj1.items}`)
        console.log(obj1.genericFunction('hi'))
        let obj2 = new genericClass(1, 'john', ['laptop']);
        console.log(`ID: ${obj2.id}`)
        console.log(`Name: ${obj2.name}`)
        console.log(`Items: ${obj2.items}`)
        console.log(obj2.genericFunction('hi'))
    }
  render() {
    return (
      <div>{this.call()}</div>
    )
  }
}

export default Generics
class genericClass {
    constructor(id, name, items) {
        this.id = id;
        this.name = name;
        this.items = items;
    }
    genericFunction(num) {
        return num;
    }
}

/*
exports.default = new genericClass('1', 'saloni', ['phone', 'laptop']);
//# sourceMappingURL=Generics.js.map*/