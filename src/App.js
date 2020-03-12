import React from 'react';
import Frutas from './Frutas';
import Cuadro from './Cuadro';
import Cajones from './Cajones';
import Revision from './Revision';
import './verduralia.css';

//flujograma:
//1.+ el estado inicial es: (a)3 frutas visibles iniciadas en forma aleatoria en <Frutas /> (b)<Cuadro /> muestra signo ? (c)botón visible 'revisar_inactivo'
//2. cuando se hace click o tap sobre alguna fruta, se muestran los datos de la fruta en <Cuadro />: 'nombrefruta', '$ el kilo' (incluir punto separador de centenas), img de fruta
//3. las frutas deben arrastrarse hacia los cajones. Debe ir sólo 1 fruta en cada cajón; si hay más, se reemplaza por la última colocada y la primera colocada se devuelve al ppio
//4. el botón 'revisar' se activa sólo cuando hay 3 frutas colocadas en su cajón
//5. cuando el usuario hace click en el botón 'revisar', sucede:
//_ (a) si es correcto, se muestra feedback positivo
//_ (b) si está equivocado, se muestra feedback negativo con botón 'continuar' por defecto. Al hacer click en 'continuar', se muestra la respuesta correcta con botón 'enviar'.
//6. Al presionar el botón 'enviar', el programa vuelve al estado inicial del punto 1
//7.+ Al realizar :hover sobre frutas activas, se muestra el cursor 'pointer'
//8.+ incluir funcionalidad responsive a los elementos que se pueda
//9. redactar README.md con instrucciones de uso del juego.

function App(){
  return (
    <div className=''>    	
		<h1 className='text-3xl italic text-center p-4'> Bienvenidos a Verduralia! </h1>

		<div className='flex justify-around items-center w-screen' >
			<div className='' >
				<Frutas />
			</div>			
			<Cuadro />
		</div>

		<Cajones />
		<Revision />
    </div>
  );
};

export default App;

