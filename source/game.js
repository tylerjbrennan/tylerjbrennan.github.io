var memory_array_colors = ["Red","Rojo","Blue","Azul","Green","Verde", "Black","Negro","White","Blanco","Yellow","Amarillo","Orange", "Naranja", "Pink", "Rosada","Purple","Morado","Brown","Marron","Grey","Gris","Indigo","Indigo"];
var memory_array_transportation = ["Car", "Train", "Airplane", "Bus", "Walk", "Run", "Bicycle"];
var memory_array_sports = ["Basketball", "Baseball", "Golf", "Football", "Soccer", "Hockey"];
var memory_array_numbers = ["One", "Uno", "Two", "Dos", "Three", "Tres", "Four","Cuatro", "Five", "Cinco", "Six","Seis", "Seven","Siete", "Eight","Ocho", "Nine","Nueve", "Ten","Diez", "Eleven","Once", "Twelve", "Doce"];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
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
					alert("Congratulations!");
					document.getElementById('memory_board').innerHTML = "";
					Colors();
				}
			}
			else if((memory_values[0] == "Blue" && memory_values[1] == "Azul") || (memory_values[0] == "Azul" && memory_values[1] == "Blue")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations!");
					document.getElementById('memory_board').innerHTML = "";
					Colors();
				}
			}
			else if((memory_values[0] == "Green" && memory_values[1] == "Verde") || (memory_values[0] == "Verde" && memory_values[1] == "Green")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations!");
					document.getElementById('memory_board').innerHTML = "";
					Colors();
				}
			}
			else if((memory_values[0] == "Black" && memory_values[1] == "Negro") || (memory_values[0] == "Negro" && memory_values[1] == "Black")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations!");
					document.getElementById('memory_board').innerHTML = "";
					Colors();
				}
			} 
			else if((memory_values[0] == "White" && memory_values[1] == "Blanco") || (memory_values[0] == "Blanco" && memory_values[1] == "White")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations!");
					document.getElementById('memory_board').innerHTML = "";
					Colors();
				}
			}
			else if((memory_values[0] == "Yellow" && memory_values[1] == "Amarillo") || (memory_values[0] == "Amarillo" && memory_values[1] == "Yellow")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations!");
					document.getElementById('memory_board').innerHTML = "";
					Colors();
				}
			} 
			else if((memory_values[0] == "Orange" && memory_values[1] == "Naranja") || (memory_values[0] == "Naranja" && memory_values[1] == "Orange")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations!");
					document.getElementById('memory_board').innerHTML = "";
					Colors();
				}
			}
			else if((memory_values[0] == "Pink" && memory_values[1] == "Rosada") || (memory_values[0] == "Rosada" && memory_values[1] == "Pink")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations!");
					document.getElementById('memory_board').innerHTML = "";
					Colors();
				}
			}
			else if((memory_values[0] == "Purple" && memory_values[1] == "Morado") || (memory_values[0] == "Morado" && memory_values[1] == "Purple")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations!");
					document.getElementById('memory_board').innerHTML = "";
					Colors();
				}
			}
			else if((memory_values[0] == "Brown" && memory_values[1] == "Marron") || (memory_values[0] == "Marron" && memory_values[1] == "Brown")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations!");
					document.getElementById('memory_board').innerHTML = "";
					Colors();
				}
			}
			else if((memory_values[0] == "Grey" && memory_values[1] == "Gris") || (memory_values[0] == "Gris" && memory_values[1] == "Grey")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations!");
					document.getElementById('memory_board').innerHTML = "";
					Colors();
				}
			} 
			else if((memory_values[0] == "Indigo" && memory_values[1] == "Indigo") || (memory_values[0] == "Indigo" && memory_values[1] == "Indigo")){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            			memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array_colors.length){
					alert("Congratulations!");
					document.getElementById('memory_board').innerHTML = "";
					Colors();
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
					alert("Congratulations!");
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
					alert("Congratulations!");
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
					alert("Congratulations!");
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
					alert("Congratulations!");
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
					alert("Congratulations!");
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
					alert("Congratulations!");
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
					alert("Congratulations!");
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
					alert("Congratulations!");
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
					alert("Congratulations!");
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
					alert("Congratulations!");
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
					alert("Congratulations!");
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
					alert("Congratulations!");
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
