interface Carro {
    id: number;
    marca: string;
    modelo:string;
    ano:number;
    combustivel:string[];
    portas:number;
    cambio:string;

}
let carros: Carro[] = [
    {
        id: 1, 
        marca: 'audi',
        modelo:'A5',
        ano: 2020,
        combustivel: ['gasolina', 'etanol'],
        portas: 4 ,
        cambio: 'automatico'
    },
    {
        id: 2, 
        marca: 'chevrolet',
        modelo:'palio',
        ano: 2012,
        combustivel: ['gasolina', 'etanol'],
        portas: 2,
        cambio: 'manual'
    }
]
function getCarros():Carro[]{
    return carros;
}

export default getCarros();