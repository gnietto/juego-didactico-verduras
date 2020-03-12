import React from 'react';
import Frutas, {imgfrutas, frutasrandom, fruta2} from './Frutas';
import incognita from './ppal/incognita.svg';
import damasco from './frutas/Damasco.svg';
import durazno from './frutas/Durazno.svg';
import frambuesa from './frutas/Frambuesa.svg';
import frutilla from './frutas/Frutilla.svg';
import manzana from './frutas/Manzana.svg';
import naranja from './frutas/Naranja.svg';
import pera from './frutas/Pera.svg';
import platano from './frutas/Platano.svg';
import sandia from './frutas/Sandia.svg';
import uva from './frutas/Uva.svg';

const datosFrutas = [	['Damasco', 800, 'el kilo'], 
						['Durazno', 650, 'el kilo'],
						['Frambuesa', 2500, 'el kilo'],
						['Frutilla', 1500, 'el kilo'],
						['Manzana', 450, 'el kilo'],
						['Naranja', 530, 'el kilo'],
						['Pera', 430, 'el kilo'],
						['Plátano', 650, 'el kilo'],
						['Sandía', 1000, 'la unidad'],
						['Uva', 1800, 'el kilo']
					];

function Interrogación() {
	return (
		<img src={incognita} alt='icono de interrogación' className='w-64 p-6' />
	)
};

function InfoFrutas() {
	return (
		<div>
			<p>{datosFrutas[0]}</p>
			<p>{datosFrutas[1]} {datosFrutas[2]}</p>
			<div> {fruta2[0] || fruta2[1] || fruta2[2]} </div>
		</div>
	)
};

function Descripcion() {
	return (
		 (1) ? <InfoFrutas /> : <Interrogación />
	) 
};

function Cuadro() {
	return (
		<div className='border-teal-600 border-solid border-4 rounded-lg w-64 h-64' >
			<Descripcion  />
		</div>		
	);
};

export default Cuadro;