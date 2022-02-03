var names = [];
var nombre = [...names];
var blocked = false;
window.onload = divClick;

var cornerArr = {"North": [], 
		"South": [],
		"East": [],
		"West": []};

function fourCorners() {
	var numberOfPlayers = nombre.length;
		
	$(".corner-back").html("");
	
	for(let i in cornerArr) {
		cornerArr[i] = [];
	}
	
	$(".botonEsquina").prop("disabled", false);
    $(".container").css("color", "black");
	$(".corner-back").css("visibility", "hidden"); 
	$(".container").css("transform", "rotateY(0deg)");
	blocked = false;
	
	for (i = 0; i < numberOfPlayers; i++) {
		
	var room = Math.floor(Math.random()*4);
		switch(room) {
			case 0:
				let eastText = $("#EastB").html();
				eastText +=  nombre[i] + "<br/>";
				$("#EastB").html(eastText);
				cornerArr["East"].push(nombre[i]);
				break;
			case 1:
				let northText = $("#NorthB").html();
				northText +=  nombre[i] + "<br/>";
				$("#NorthB").html(northText);
				cornerArr["North"].push(nombre[i]);
				break;
			case 2:
				let southText = $("#SouthB").html();
				southText +=  nombre[i] + "<br/>";
				$("#SouthB").html(southText);
				cornerArr["South"].push(nombre[i]);
				break;
			case 3:
				$("#WestB").html($("#WestB").html() + nombre[i] + "<br/>");
				cornerArr["West"].push(nombre[i]);
				break;
		}
	}
}

function resetGame() {
	
	if(names=='') {
		console.log("entro");
		names = ["Kacy", "Lucas", "Ali", "Cheung", "Leila", "Jeff", "Fran", "Noah", "Eldece", "Marwan", "Laura", "Harry", "Tim", "Jess", "Keziah", "Sivanujan", "Millie", "Tasmiya", "Reuben", "Ruby", "Finley", "Oliver"];
	}
	nombre = [...names];
	fourCorners();
}

function divClick() {
	$(".container").click(function() {
		if(!blocked) {
			clickCorner(this.id);
			$(".container").css("transform", "rotateY(0.5turn)");
			setTimeout(function(){$(".corner-back").css("visibility", "visible"); }, 400);
		}
	})
	
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
	blocked = true;
}

function showCorners(corner) {
	var choice = document.getElementById(corner);
	choice.style.color = "brown";
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