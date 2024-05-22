const user01 = {
    id: 1,
    nome: "João",
    idade: 25
};

const user02 = {
    id: 2,
    nome: "Pedro",
    idade: 30
};

const user03 = {
    id: 3,
    nome: "Maria",
    idade: 28
};

const car01 = {
    marca: "fiat"
};

const car02 = {
    marca: "ford"
};

console.log(Object.keys(user01));
console.log(Object.keys(user02));
console.log(Object.keys(user03));
console.log(Object.keys(car01));
console.log(Object.keys(car02));

// console.log(Object.values(user01))
// console.log(Object.values(user02))
// console.log(Object.values(user03))

console.log(Object.entries(user01));
// console.log(Object.entries(user02))
// console.log(Object.entries(user03))

user01.idade += 1;

console.log(Object.entries(user01));

Object.defineProperty(user01, 'cpf', {
    enumerable: true,
    writable: false,
    value: '000.000.000-00'
});

user01.cpf = '111.111.111-11';

console.log(Object.entries(user01));

console.log(user01);

const empresa = "EBAC";

user01.empresa = empresa;
user02.empresa = empresa;
user03.empresa = "Google";

console.log(user01);
console.log(user02);
console.log(user03);

user01.filhos = { 
    filho01: "Matheus",
    filho02: "Carol" 
};

console.log(user01);

console.log(Object.entries(user01.filhos));

// Example of an arrow function to print user info
const printUserInfo = (user) => {
    console.log(`ID: ${user.id}, Nome: ${user.nome}, Idade: ${user.idade}, Empresa: ${user.empresa}`);
};

printUserInfo(user01);
printUserInfo(user02);
printUserInfo(user03);

//Neste código, foi usado objetos literais para definir os usuários e carros, foi adicionada uma função arrow printUserInfo 
//para demonstrar o uso de funções arrow. 
//Os métodos Object.keys, Object.entries, e Object.defineProperty são usados como antes, 
//uma vez que eles são métodos do objeto global Object e não funções definidas pelo usuário.