function suma(a, b){
 	return a + b;
}

function resta(a, b){
	return a - b;
}

function dividir(a, b){
	if (b !== 0) {
		return a / b;
	} else {
		return "error"
	}
}

function multiplicar(a, b){
	return a * b;
}


/*var divDisplay = document.getElementById('display');
divDisplay.parentNode.removeChild(divDisplay); //Elimina el nodo actual
*/

var accionar = function() {
	var miParrafo = document.createElement('p'); 
	var miTexto = document.createTextNode('pirulo'); 
	miParrafo.appendChild(miTexto); 
	var divDisplay = document.getElementById('display'); //Obtenemos el div display 
	divDisplay.appendChild(miParrafo); //Agregamos el párrafo al display
} 
window.onload = function() { 
	document.getElementById('button').onclick = accionar;
}
