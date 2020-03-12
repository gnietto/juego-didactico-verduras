import React from 'react';
import revisaractivo from './botones/revisar_activo.svg';
import revisarinactivo from './botones/revisar_inactivo.svg';
import enviarrojo from './botones/enviar_rojo.svg';
import enviarverde from './botones/enviar_verde.svg';
import continuar from './botones/continuar_rojo.svg';

function TextoRevision() {
	let exito = '¡MUY BIEN!, así se hace.';
	let oops = '¡Oops! Algo anda mal';
	let correcta = '¡Pon atención! Ésta es la respuesta correcta.';
	return (
		<div className='w-4/6'>
			{'Juega!'}
		</div>
	);
};

function BotonesRevision() {
	return (
		<div className='w-1/6'>
			<img src={revisarinactivo} alt='bla' />
		</div>
	);
};

function Revision() {
	return (
		<div className='flex justify-around w-screen py-6'>
			<TextoRevision className='' />
			<BotonesRevision className='' />
		</div>
	);
};

export default Revision;