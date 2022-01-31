var names = [];

var cornerArr = {"North": [], 
		"South": [],
		"East": [],
		"West": []};

//A function to move all remaining participants to the four corners (randomly)
function fourCorners() {
	var numberOfPlayers = names.length;
	
	$(".corner").html("");
	
	for(let i in cornerArr) {
		cornerArr[i] = [];
	}
	
	$(".botonEsquina").prop("disabled", false);
    $(".corner").css("color", "black");
    $(".corner").css("opacity", 0);	
	
    setTimeout(function(){ 	
		for (i = 0; i < numberOfPlayers; i++) {
			console.log(names);
		var room = Math.floor(Math.random()*4);
			switch(room) {
				case 0:
					let eastText = $("#East").html();
					eastText +=  names[i] + "<br/>";
					$("#East").html(eastText);
					cornerArr["East"].push(names[i]);
					break;
				case 1:
					let northText = $("#North").html();
					northText +=  names[i] + "<br/>";
					$("#North").html(northText);
					cornerArr["North"].push(names[i]);
					break;
				case 2:
					let southText = $("#South").html();
					southText +=  names[i] + "<br/>";
					$("#South").html(southText);
					cornerArr["South"].push(names[i]);
					break;
				case 3:
					$("#West").html($("#West").html() + names[i] + "<br/>");
					cornerArr["West"].push(names[i]);
					break;
			}
		}
	}, 500);
}

function resetGame() {
  names = ["Kacy", "Lucas", "Ali", "Cheung", "Leila", "Jeff", "Fran", "Noah", "Eldece", "Marwan", "Laura", "Harry", "Tim", "Jess", "Keziah", "Sivanujan", "Millie", "Tasmiya", "Reuben", "Ruby", "Finley", "Oliver"];
  fourCorners();
}

function clickCorner(corner) {

	showCorners(corner);
	disableButtons();
	names = [];
	for(let i in cornerArr) {
		if(cornerArr[i] != cornerArr[corner]) {
			names = names.concat(cornerArr[i]);
		}
	}
	checkWinner(names);
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