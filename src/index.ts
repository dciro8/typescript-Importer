    
const sumar=(a: number, b:number) : Number =>  a + b;


const nombre= ():string => `Hola David`;

const obtenerSalario= ():Promise<string> =>{
    return new Promise((resolve, reject)=>{
        resolve(`David`);
    });
}

obtenerSalario().then(a => console.log(a.toUpperCase()));

console.log(sumar(2,4));

    