import carros from './carros'

// filtrar por modelo:

const filteredCarros=carros.filter(carro=>carro.modelo ==='palio');
console.log(filteredCarros)

const mainElement = document.getElementById('main');
if (mainElement){
    mainElement.innerHTML=JSON.stringify(filteredCarros, null,2);
} else{
    console.error('Elemento com id "main" não encontrado')
}