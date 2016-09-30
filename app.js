var arreglo = [100, 70, 2, 250, 8, 33, 500, 1,100];
var arregloOrdenado = [];

// encontrar el menor elemento
var arregloLongitud = arreglo.length;
var menorNumero = null;
var indiceMenorNumero = 0;

for (var j = 1; j <= arregloLongitud; j++) {

	menorNumero = null;
	indiceMenorNumero = 0;

	for (var i = 0; i < arreglo.length; i++) {
		
		if (menorNumero != null) {
			if (arreglo[i] < menorNumero) {
				menorNumero = arreglo[i];
				indiceMenorNumero = i;
			}
		}
		else{
			menorNumero = arreglo[i];
			indiceMenorNumero = i;
		}
	}

	console.log(menorNumero);

	arregloOrdenado.push(menorNumero);

	console.log(arregloOrdenado);

	arreglo.splice(indiceMenorNumero, 1);

	console.log(arreglo);
	console.log("-------------------");

	
}


function listarArreglo (a){
		for(var i = 0; i < a.length; i++){
			console.log( "los elementos del arreglo : " + a[i]);
		}
};