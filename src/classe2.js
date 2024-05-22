
//As funções de classe tradicionais function foram substituídas por arrow functions.
//As arrow functions mantêm o contexto do this de onde são definidas, o que pode ser útil para evitar
//problemas de contexto em métodos de classe.

class Animal {
    constructor(especie) {
        this.especie = especie;
    }

    falar = () => {
        console.log(`${this.especie} fala`);
    }

    comer = () => {
        console.log(`${this.especie} come`);
    }

    dormir = () => {
        console.log(`${this.especie} dorme`);
    }
}

export default class Cachorro extends Animal {
    falar = () => {
        console.log(`${this.especie} fala au au au`);
    }

    comer = () => {
        console.log(`${this.especie} come ração`);
    }
}
