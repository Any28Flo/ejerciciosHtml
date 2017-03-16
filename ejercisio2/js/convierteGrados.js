function convierteGrados(){

			var grados = document.getElementById("gradosCelcius").value;
			console.log('grados');
			console.log(grados);
			var resultado= grados * 9 /5;
			document.getElementById("resultado").value = resultado
			//return 
}
function convierteFraren(){

	var gradosFaren = document.getElementById("faren").value;
	var resultado = ((gradosFaren - 32)* 5) / 9;

	document.getElementById("resultado").value = resultado;
}