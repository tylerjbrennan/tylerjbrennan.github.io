var memory_array_colors = ["Red","Rojo","Blue","Azul","Green","Verde", "Black","Negro","White","Blanco","Yellow","Amarillo","Orange", "Naranja", "Pink", "Rosada","Purple","Morado","Brown","Marrón","Grey","Gris","Turquoise","Indigo"];
var memory_array_transportation = ["Car", "Train", "Airplane", "Bus", "Boat", "Motorcycle", "Walk", "Run", "Bicycle"];
var memory_array_sports = ["Basketball", "Basquetbol", "Baseball", "Béisbol", "Golf", "Golf", "Football", "Fútbol Americano", "Soccer", "Fútbol", "Karate", "Kárate", "Tennis", "Tenis", "Volleyball", "Voleibol", "Boxing", "Boxeo", "Hunting", "Caza", "Rowing", "Remo", "Swimming", "Natación"];
var memory_array_numbers = ["One", "Uno", "Two", "Dos", "Three", "Tres", "Four","Cuatro", "Five", "Cinco", "Six","Seis", "Seven","Siete", "Eight","Ocho", "Nine","Nueve", "Ten","Diez", "Eleven","Once", "Twelve", "Doce"];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;

var h1 = document.getElementsByTagName('h3')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;
function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();
function stop() {
    clearTimeout(t);
}
function clear() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function Colors(){
	tiles_flipped = 0;
	var output = '';
        memory_array_colors.memory_tile_shuffle();
	for(var i = 0; i < memory_array_colors.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryColors(this,\''+memory_array_colors[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}
function memoryColors(tile,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if((memory_values[0] == "Red" && memory_values[1] == "Rojo") || (memory_values[0] == "Rojo" && memory_values[1] == "Red")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Blue" && memory_values[1] == "Azul") || (memory_values[0] == "Azul" && memory_values[1] == "Blue")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Green" && memory_values[1] == "Verde") || (memory_values[0] == "Verde" && memory_values[1] == "Green")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Black" && memory_values[1] == "Negro") || (memory_values[0] == "Negro" && memory_values[1] == "Black")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_values[0] == "White" && memory_values[1] == "Blanco") || (memory_values[0] == "Blanco" && memory_values[1] == "White")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Yellow" && memory_values[1] == "Amarillo") || (memory_values[0] == "Amarillo" && memory_values[1] == "Yellow")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_values[0] == "Orange" && memory_values[1] == "Naranja") || (memory_values[0] == "Naranja" && memory_values[1] == "Orange")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Pink" && memory_values[1] == "Rosada") || (memory_values[0] == "Rosada" && memory_values[1] == "Pink")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Purple" && memory_values[1] == "Morado") || (memory_values[0] == "Morado" && memory_values[1] == "Purple")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Brown" && memory_values[1] == "Marrón") || (memory_values[0] == "Marrón" && memory_values[1] == "Brown")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Grey" && memory_values[1] == "Gris") || (memory_values[0] == "Gris" && memory_values[1] == "Grey")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_values[0] == "Turquoise" && memory_values[1] == "Turquesa") || (memory_values[0] == "Turquesa" && memory_values[1] == "Turquoise")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = '#990000';
            	    		    tile_1.innerHTML = "";
				    tile_2.style.background = '#990000';
            	    		    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	   		    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}
function Numbers(){
	tiles_flipped = 0;
	var output = '';
        memory_array_numbers.memory_tile_shuffle();
	for(var i = 0; i < memory_array_numbers.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryNumbers(this,\''+memory_array_numbers[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}
function memoryNumbers(tile,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if((memory_values[0] == "One" && memory_values[1] == "Uno") || (memory_values[0] == "Uno" && memory_values[1] == "One")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Two" && memory_values[1] == "Dos") || (memory_values[0] == "Dos" && memory_values[1] == "Two")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Three" && memory_values[1] == "Tres") || (memory_values[0] == "Tres" && memory_values[1] == "Three")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Four" && memory_values[1] == "Cuatro") || (memory_values[0] == "Cuatro" && memory_values[1] == "Four")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_values[0] == "Five" && memory_values[1] == "Cinco") || (memory_values[0] == "Cinco" && memory_values[1] == "Five")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Six" && memory_values[1] == "Seis") || (memory_values[0] == "Seis" && memory_values[1] == "Six")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_values[0] == "Seven" && memory_values[1] == "Siete") || (memory_values[0] == "Siete" && memory_values[1] == "Seven")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Eight" && memory_values[1] == "Ocho") || (memory_values[0] == "Ocho" && memory_values[1] == "Eight")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Nine" && memory_values[1] == "Nueve") || (memory_values[0] == "Nueve" && memory_values[1] == "Nine")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Ten" && memory_values[1] == "Diez") || (memory_values[0] == "Diez" && memory_values[1] == "Ten")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Eleven" && memory_values[1] == "Once") || (memory_values[0] == "Once" && memory_values[1] == "Eleven")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_values[0] == "Twelve" && memory_values[1] == "Doce") || (memory_values[0] == "Doce" && memory_values[1] == "Twelve")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = '#990000';
            	    		    tile_1.innerHTML = "";
				    tile_2.style.background = '#990000';
            	    		    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	   		    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}
function Sports(){
	tiles_flipped = 0;
	var output = '';
        memory_array_sports.memory_tile_shuffle();
	for(var i = 0; i < memory_array_sports.length; i++){
		output += '<div id="tile_'+i+'" onclick="memorySports(this,\''+memory_array_sports[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}
function memorySports(tile,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if((memory_values[0] == "Basketball" && memory_values[1] == "Basquetbol") || (memory_values[0] == "Basquetbol" && memory_values[1] == "Basketball")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Baseball" && memory_values[1] == "Béisbol") || (memory_values[0] == "Béisbol" && memory_values[1] == "Baseball")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Golf" && memory_values[1] == "Golf") || (memory_values[0] == "Golf" && memory_values[1] == "Golf")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Football" && memory_values[1] == "Fútbol Americano") || (memory_values[0] == "Fútbol Americano" && memory_values[1] == "Football")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_values[0] == "Soccer" && memory_values[1] == "Fútbol") || (memory_values[0] == "Fútbol" && memory_values[1] == "Soccer")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Kárate" && memory_values[1] == "Karate") || (memory_values[0] == "Karate" && memory_values[1] == "Kárate")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_values[0] == "Tennis" && memory_values[1] == "Tenis") || (memory_values[0] == "Tenis" && memory_values[1] == "Tennis")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Volleyball" && memory_values[1] == "Voleibol") || (memory_values[0] == "Voleibol" && memory_values[1] == "Volleyball")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Boxing" && memory_values[1] == "Boxeo") || (memory_values[0] == "Boxeo" && memory_values[1] == "Boxing")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Hunting" && memory_values[1] == "Caza") || (memory_values[0] == "Caza" && memory_values[1] == "Hunting")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_values[0] == "Rowing" && memory_values[1] == "Remo") || (memory_values[0] == "Remo" && memory_values[1] == "Rowing")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_values[0] == "Swimming" && memory_values[1] == "Natación") || (memory_values[0] == "Natación" && memory_values[1] == "Swimming")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = '#990000';
            	    		    tile_1.innerHTML = "";
				    tile_2.style.background = '#990000';
            	    		    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	   		    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}
