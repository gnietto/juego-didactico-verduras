import React, {useState} from 'react';
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

const imgfrutas = [damasco, durazno, frambuesa, frutilla, manzana, naranja, pera, platano, sandia, uva];

function frutasrandom() {
	const aleatorio1 = Math.trunc(Math.random() * 9);
	const aleatorio2 = Math.trunc(Math.random() * 8);
	const aleatorio3 = Math.trunc(Math.random() * 10);
	return [aleatorio3, aleatorio2, aleatorio1];
};

const fruta2 = frutasrandom().map((index) => imgfrutas[index]);

function Frutas() {
	return (
		<div className='flex flex-col'>
			<div className='flex'>
				<div className='w-40'> <img src={fruta2[0]} alt='fruta mostrada aleatoriamente' className='cursor-pointer' /> </div>
				<div className='w-40'> <img src={fruta2[1]} alt='fruta mostrada aleatoriamente' className='cursor-pointer' /> </div>
			</div>		
			<div className='self-center w-40'> <img src={fruta2[2]} alt='fruta mostrada aleatoriamente' className='cursor-pointer' /> </div>
		</div>
	);
};

export default Frutas;
export {imgfrutas, frutasrandom, fruta2};