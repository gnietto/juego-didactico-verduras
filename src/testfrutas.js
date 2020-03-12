'use strict'

function frutasrandom() {
	let listafrutas = ['damasco', 'durazno', 'frambuesa', 'frutilla', 'manzana', 'naranja', 'pera', 'platano', 'sandia', 'uva'];
	let listaNums = listafrutas.map(([fruta]) => Math.ceil(Math.random([fruta.length]) * 10));
	let triplete = undefined;
	return triplete;
};

function randomfrutas() {
	let aleatorio1 = Math.ceil(Math.random() * 9);
	let aleatorio2 = Math.ceil(Math.random() * 8);
	let aleatorio3 = Math.ceil(Math.random() * 10);
	return [aleatorio3, aleatorio2, aleatorio1];
};

//componer array con 3 numeros aleatorios del 0 al 9
//asignar cada número aleatorio con el nombre/imagen del array listafrutas


function str() {
let num = ['abra', 'ca', 'dabra'];
return num.toString();
}

console.log(frutasrandom());
console.log(frutasrandom());
console.log(frutasrandom());
console.log(randomfrutas());
console.log(randomfrutas());
console.log(randomfrutas());
console.log(str());