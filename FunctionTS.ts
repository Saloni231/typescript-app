import { Product, User } from "./InterfaceType";

const prefix = '🐉 ';

console.log(`${prefix}`)

const sampleProducts: Product[] = [
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

function displayProducts(): Product[] | string[] | number[]{
    return sampleProducts.map((prod) => prod.id);
}

console.log(displayProducts());

function findProduct(id: number): void {
    const {name} = sampleProducts.find((prod) => (
        id === prod.id
    ))
    console.log(`${prefix} found result..`)
    console.log(`Name: ${name}`)
}

findProduct(10);

function getuser(user: User) {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  console.log(`Address: ${user.address}`);
}

const sam : User = {
  name: 'sam',
  age: 10,
  address: 'USA'
}

getuser(sam)

/*async function asyncFunction() {
    const response: Response = await fetch('http://puppygifs.tumblr.com/api/read/json');
    const users  = await response.json();
    return users;
}

console.log(asyncFunction());*/