function optionalParameter(name: string, id?: number) {
    console.log(`Name: ${name}`);
    console.log(`ID: ${id}`);
}

function defaultParameter(name: string, id: number = 1){
    console.log(`Name: ${name}`);
    console.log(`ID: ${id}`);
}

function restParameter(name: string, id: number = 1, ...address: string[]){
    console.log(`Name: ${name}`);
    console.log(`ID: ${id}`);
    console.log(address.join(' '));
}