var resultado = " "
var memory = 0

	window.onload = function () {

	document.getElementById("1").onclick = function () {
		resultado += "1";
		document.getElementById("display").innerHTML = resultado;
	}

	document.getElementById("2").onclick = function () {
		resultado += "2";
		document.getElementById("display").innerHTML = resultado;
	}

	document.getElementById("3").onclick = function () {
		resultado += "3";
		document.getElementById("display").innerHTML = resultado;
	}

	document.getElementById("4").onclick = function () {
		resultado += "4";
		document.getElementById("display").innerHTML = resultado;
	}

	document.getElementById("5").onclick = function () {
		resultado += "5";
		document.getElementById("display").innerHTML = resultado;
	}

	document.getElementById("6").onclick = function () {
		resultado += "6";
		document.getElementById("display").innerHTML = resultado;
	}

	document.getElementById("7").onclick = function () {
		resultado += "7";
		document.getElementById("display").innerHTML = resultado;
	}

	document.getElementById("8").onclick = function () {
		resultado += "8";
		document.getElementById("display").innerHTML = resultado;
	}

	document.getElementById("9").onclick = function () {
		resultado += "9";
		document.getElementById("display").innerHTML = resultado;
	}

	document.getElementById("0").onclick = function () {
		resultado += "0";
		document.getElementById("display").innerHTML = resultado;
	}

	document.getElementById(".").onclick = function () {
		resultado += ".";
		document.getElementById("display").innerHTML = resultado;
	}

	document.getElementById("/").onclick = function () {
		resultado += "/";
		document.getElementById("display").innerHTML = resultado;
	}

	document.getElementById("+").onclick = function () {
		resultado += "+";
		document.getElementById("display").innerHTML = resultado;
	}

	document.getElementById("-").onclick = function () {
		resultado += "-";
		document.getElementById("display").innerHTML = resultado;
	}

	document.getElementById("*").onclick = function () {
		resultado += "*";
		document.getElementById("display").innerHTML = resultado;
	}
	
	}
