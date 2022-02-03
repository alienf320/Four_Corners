var names = [];
var nombre = [...names];

var cornerArr = {"North": [], 
		"South": [],
		"East": [],
		"West": []};

//A function to move all remaining participants to the four corners (randomly)
function fourCorners() {
	var numberOfPlayers = nombre.length;
	
	$(".corner").html("");
	
	for(let i in cornerArr) {
		cornerArr[i] = [];
	}
	
	$(".botonEsquina").prop("disabled", false);
    $(".corner").css("color", "black");
    $(".corner").css("opacity", 0);	
	
    setTimeout(function(){ 	
		for (i = 0; i < numberOfPlayers; i++) {
			console.log(nombre);
		var room = Math.floor(Math.random()*4);
			switch(room) {
				case 0:
					let eastText = $("#East").html();
					eastText +=  nombre[i] + "<br/>";
					$("#East").html(eastText);
					cornerArr["East"].push(nombre[i]);
					break;
				case 1:
					let northText = $("#North").html();
					northText +=  nombre[i] + "<br/>";
					$("#North").html(northText);
					cornerArr["North"].push(nombre[i]);
					break;
				case 2:
					let southText = $("#South").html();
					southText +=  nombre[i] + "<br/>";
					$("#South").html(southText);
					cornerArr["South"].push(nombre[i]);
					break;
				case 3:
					$("#West").html($("#West").html() + nombre[i] + "<br/>");
					cornerArr["West"].push(nombre[i]);
					break;
			}
		}
	}, 500);
}

function resetGame() {
	nombre = [...names];
	if(names==[]) {
		console.log("entro");
		names = ["Kacy", "Lucas", "Ali", "Cheung", "Leila", "Jeff", "Fran", "Noah", "Eldece", "Marwan", "Laura", "Harry", "Tim", "Jess", "Keziah", "Sivanujan", "Millie", "Tasmiya", "Reuben", "Ruby", "Finley", "Oliver"];
	}
	
  fourCorners();
}

function clickCorner(corner) {

	showCorners(corner);
	disableButtons();
	nombre = [];
	for(let i in cornerArr) {
		if(cornerArr[i] != cornerArr[corner]) {
			nombre = nombre.concat(cornerArr[i]);
		}
	}
	checkWinner(nombre);
}

function showCorners(corner) {

	var choice = document.getElementById(corner);
	choice.style.color = "brown";
	
	$(".corner").css("opacity", 1);
}

function disableButtons() {
	$(document).ready(function(){
           $(".botonEsquina").prop("disabled", true);
        });
}

function checkWinner(arr) {
	if(arr.length == 1) {
		swal("Congrats!", arr[0] + " is the winner", "success");
	}
}

function agregarJugador() {
	let player = $(".form-popup input").val();
	console.log(player);
	$("#jugadoresCargados").html($("#jugadoresCargados").html() + player + "<br/>");
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("blackScreen").style.visibility = "visible";
  document.getElementById("blackScreen").style.opacity = 1;
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("blackScreen").style.visibility = "hidden";
  document.getElementById("blackScreen").style.opacity = 0;
  cargarJugadores();
} 

function cargarJugadores() {
	let jCargados = $("#jugadoresCargados").html();
	names = jCargados.split('<br>');
	names.pop();
	nombre = [...names];
}

function quitarJugador() {
	let jCargados = $("#jugadoresCargados").html();
	let regex = /\w*?<br>$/
	$("#jugadoresCargados").html(jCargados.replace(regex, ''));
}