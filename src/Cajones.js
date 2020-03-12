import React from 'react';
import cuadroinfo from './ppal/cuadro_info.svg';
import mayorque from './ppal/mayor_que.svg';
import cajon from './ppal/cajonfrutas.png';

function Cajones() {
	return (
		<div className='text-center' >
			<div className='inline-block w-3/12 p-2' > <img src={cajon} alt='cajon de frutas' /> </div>
			<div className='inline-block w-1/12 p-2' > <img src={mayorque} alt='mayorque' /> </div>
			<div className='inline-block w-3/12 p-2' > <img src={cajon} alt='cajon de frutas' /> </div>
			<div className='inline-block w-1/12 p-2' > <img src={mayorque} alt='mayorque' /> </div>
			<div className='inline-block w-3/12 p-2' > <img src={cajon} alt='cajon de frutas' /> </div>
		</div>
	);
};

export default Cajones;