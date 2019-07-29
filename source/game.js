var memory_array_colors = ["Red","Rojo","Blue","Azul","Green","Verde", "Black","Negro","White","Blanco","Yellow","Amarillo","Orange", "Naranja", "Pink", "Rosada","Purple","Morado","Brown","Marrón","Grey","Gris","Turquoise","Turquesa"];
var memory_array_transportation = ["Car", "Coche", "Train", "Tren", "Airplane","Avión", "Bus", "Autobús", "Boat", "Bote", "Motorcycle", "Motocicleta", "Walk (verb)", "Caminar", "Run (verb)", "Correr", "Bicycle", "Bicicleta", "Helicopter", "Helicóptero", "Airport", "Aeropuerto", "Drive (verb)", "Conducir"];
var memory_array_sports = ["Basketball", "Basquetbol", "Baseball", "Béisbol", "Golf", "Golf", "Football", "Fútbol Americano", "Soccer", "Fútbol", "Karate", "Kárate", "Tennis", "Tenis", "Volleyball", "Voleibol", "Boxing", "Boxeo", "Hunting", "Caza", "Rowing", "Remo", "Swimming", "Natación"];
var memory_array_numbers = ["One", "Uno", "Two", "Dos", "Three", "Tres", "Four","Cuatro", "Five", "Cinco", "Six","Seis", "Seven","Siete", "Eight","Ocho", "Nine","Nueve", "Ten","Diez", "Eleven","Once", "Twelve", "Doce"];
var memory_array_phrases = ["Good morning","Buenos días","Good evening","Buenas noches","Goodbye","Adiós","Please","Por favor","Thank you","Gracías","Who?","¿Quièn?","Why?","¿Por què?","Sorry","Lo siento","Excuse me","Perdóname","How are you?","¿Cómo está?","What’s your name?","¿Cómo te llamas?","Hello!","¡Hola!"];
var memory_cards = [];
var card_values = [];
var cards_flipped = 0;
var moves = 0;
Array.prototype.memory_card_shuffle = function(){
    var x = this.length, y, temp;
    while(--x > 0){
        y = Math.floor(Math.random() * (x+1));
        temp = this[y];
        this[y] = this[x];
        this[x] = temp;
    }
}
function Colors(){
	cards_flipped = 0;
	var output = '';
        memory_array_colors.memory_card_shuffle();
	for(var i = 0; i < memory_array_colors.length; i++){
		output += '<div id="card_'+i+'" onclick="memoryColors(this,\''+memory_array_colors[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}
function memoryColors(card,val){
	if(card.innerHTML == "" && memory_cards.length < 2){
		card.style.background = '#FFF';
		card.innerHTML = val;
		if(memory_cards.length == 0){
			memory_cards.push(val);
			card_values.push(card.id);
		} else if(memory_cards.length == 1){
			memory_cards.push(val);
			card_values.push(card.id);
			if((memory_cards[0] == "Red" && memory_cards[1] == "Rojo") || (memory_cards[0] == "Rojo" && memory_cards[1] == "Red")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Blue" && memory_cards[1] == "Azul") || (memory_cards[0] == "Azul" && memory_cards[1] == "Blue")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Green" && memory_cards[1] == "Verde") || (memory_cards[0] == "Verde" && memory_cards[1] == "Green")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Black" && memory_cards[1] == "Negro") || (memory_cards[0] == "Negro" && memory_cards[1] == "Black")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_cards[0] == "White" && memory_cards[1] == "Blanco") || (memory_cards[0] == "Blanco" && memory_cards[1] == "White")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Yellow" && memory_cards[1] == "Amarillo") || (memory_cards[0] == "Amarillo" && memory_cards[1] == "Yellow")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_cards[0] == "Orange" && memory_cards[1] == "Naranja") || (memory_cards[0] == "Naranja" && memory_cards[1] == "Orange")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Pink" && memory_cards[1] == "Rosada") || (memory_cards[0] == "Rosada" && memory_cards[1] == "Pink")){
				cards_flipped +=2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Purple" && memory_cards[1] == "Morado") || (memory_cards[0] == "Morado" && memory_cards[1] == "Purple")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Brown" && memory_cards[1] == "Marrón") || (memory_cards[0] == "Marrón" && memory_cards[1] == "Brown")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Grey" && memory_cards[1] == "Gris") || (memory_cards[0] == "Gris" && memory_cards[1] == "Grey")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_cards[0] == "Turquoise" && memory_cards[1] == "Turquesa") || (memory_cards[0] == "Turquesa" && memory_cards[1] == "Turquoise")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_colors.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else {
				function filpCard(){
				    var card_a = document.getElementById(card_values[0]);
				    var card_b = document.getElementById(card_values[1]);
				    card_a.style.background = '#990000';
            	    		    card_a.innerHTML = "";
				    card_b.style.background = '#990000';
            	    		    card_b.innerHTML = "";
				    memory_cards = [];
            	   		    card_values = [];
				}
				setTimeout(filpCard, 500);
			}
		}
	}
}
function Transport(){
	cards_flipped = 0;
	var output = '';
        memory_array_transportation.memory_card_shuffle();
	for(var i = 0; i < memory_array_transportation.length; i++){
		output += '<div id="card_'+i+'" onclick="memoryTransport(this,\''+memory_array_transportation[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}
function memoryTransport(card,val){
	if(card.innerHTML == "" && memory_cards.length < 2){
		card.style.background = '#FFF';
		card.innerHTML = val;
		if(memory_cards.length == 0){
			memory_cards.push(val);
			card_values.push(card.id);
		} else if(memory_cards.length == 1){
			memory_cards.push(val);
			card_values.push(card.id);
			if((memory_cards[0] == "Car" && memory_cards[1] == "Coche") || (memory_cards[0] == "Coche" && memory_cards[1] == "Car")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_transportation.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Train" && memory_cards[1] == "Tren") || (memory_cards[0] == "Tren" && memory_cards[1] == "Train")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_transportation.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Airplane" && memory_cards[1] == "Avión") || (memory_cards[0] == "Avión" && memory_cards[1] == "Airplane")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_transportation.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Bus" && memory_cards[1] == "Autobús") || (memory_cards[0] == "Autobús" && memory_cards[1] == "Bus")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_transportation.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_cards[0] == "Boat" && memory_cards[1] == "Bote") || (memory_cards[0] == "Bote" && memory_cards[1] == "Boat")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_transportation.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Motorcycle" && memory_cards[1] == "Motocicleta") || (memory_cards[0] == "Motocicleta" && memory_cards[1] == "Motorcycle")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_transportation.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_cards[0] == "Walk (verb)" && memory_cards[1] == "Caminar") || (memory_cards[0] == "Caminar" && memory_cards[1] == "Walk (verb)")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_transportation.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Run (verb)" && memory_cards[1] == "Correr") || (memory_cards[0] == "Correr" && memory_cards[1] == "Run (verb)")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_transportation.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Bicycle" && memory_cards[1] == "Bicicleta") || (memory_cards[0] == "Bicicleta" && memory_cards[1] == "Bicycle")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_transportation.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Helicopter" && memory_cards[1] == "Helicóptero") || (memory_cards[0] == "Helicóptero" && memory_cards[1] == "Helicopter")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_transportation.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Airport" && memory_cards[1] == "Aeropuerto") || (memory_cards[0] == "Aeropuerto" && memory_cards[1] == "Airport")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_transportation.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_cards[0] == "Drive (verb)" && memory_cards[1] == "Conducir") || (memory_cards[0] == "Conducir" && memory_cards[1] == "Drive (verb)")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = []; 
				if(cards_flipped == memory_array_transportation.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else {
				function filpCard(){
				    var card_a = document.getElementById(card_values[0]);
				    var card_b = document.getElementById(card_values[1]);
				    card_a.style.background = '#990000';
            	    		    card_a.innerHTML = "";
				    card_b.style.background = '#990000';
            	    		    card_b.innerHTML = "";
				    memory_cards = [];
            	   		    card_values = [];
				}
				setTimeout(filpCard, 500);
			}
		}
	}
}
function Numbers(){
	cards_flipped = 0;
	var output = '';
        memory_array_numbers.memory_card_shuffle();
	for(var i = 0; i < memory_array_numbers.length; i++){
		output += '<div id="card_'+i+'" onclick="memoryNumbers(this,\''+memory_array_numbers[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}
function memoryNumbers(card,val){
	if(card.innerHTML == "" && memory_cards.length < 2){
		card.style.background = '#FFF';
		card.innerHTML = val;
		if(memory_cards.length == 0){
			memory_cards.push(val);
			card_values.push(card.id);
		} else if(memory_cards.length == 1){
			memory_cards.push(val);
			card_values.push(card.id);
			if((memory_cards[0] == "One" && memory_cards[1] == "Uno") || (memory_cards[0] == "Uno" && memory_cards[1] == "One")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Two" && memory_cards[1] == "Dos") || (memory_cards[0] == "Dos" && memory_cards[1] == "Two")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = []; 
				if(cards_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Three" && memory_cards[1] == "Tres") || (memory_cards[0] == "Tres" && memory_cards[1] == "Three")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Four" && memory_cards[1] == "Cuatro") || (memory_cards[0] == "Cuatro" && memory_cards[1] == "Four")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_cards[0] == "Five" && memory_cards[1] == "Cinco") || (memory_cards[0] == "Cinco" && memory_cards[1] == "Five")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Six" && memory_cards[1] == "Seis") || (memory_cards[0] == "Seis" && memory_cards[1] == "Six")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_cards[0] == "Seven" && memory_cards[1] == "Siete") || (memory_cards[0] == "Siete" && memory_cards[1] == "Seven")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Eight" && memory_cards[1] == "Ocho") || (memory_cards[0] == "Ocho" && memory_cards[1] == "Eight")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Nine" && memory_cards[1] == "Nueve") || (memory_cards[0] == "Nueve" && memory_cards[1] == "Nine")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Ten" && memory_cards[1] == "Diez") || (memory_cards[0] == "Diez" && memory_cards[1] == "Ten")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Eleven" && memory_cards[1] == "Once") || (memory_cards[0] == "Once" && memory_cards[1] == "Eleven")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_cards[0] == "Twelve" && memory_cards[1] == "Doce") || (memory_cards[0] == "Doce" && memory_cards[1] == "Twelve")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_numbers.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else {
				function filpCard(){
				    var card_a = document.getElementById(card_values[0]);
				    var card_b = document.getElementById(card_values[1]);
				    card_a.style.background = '#990000';
            	    		    card_a.innerHTML = "";
				    card_b.style.background = '#990000';
            	    		    card_b.innerHTML = "";
				    memory_cards = [];
            	   		    card_values = [];
				}
				setTimeout(filpCard, 500);
			}
		}
	}
}
function Sports(){
	cards_flipped = 0;
	var output = '';
        memory_array_sports.memory_card_shuffle();
	for(var i = 0; i < memory_array_sports.length; i++){
		output += '<div id="card_'+i+'" onclick="memorySports(this,\''+memory_array_sports[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}
function memorySports(card,val){
	if(card.innerHTML == "" && memory_cards.length < 2){
		card.style.background = '#FFF';
		card.innerHTML = val;
		if(memory_cards.length == 0){
			memory_cards.push(val);
			card_values.push(card.id);
		} else if(memory_cards.length == 1){
			memory_cards.push(val);
			card_values.push(card.id);
			if((memory_cards[0] == "Basketball" && memory_cards[1] == "Basquetbol") || (memory_cards[0] == "Basquetbol" && memory_cards[1] == "Basketball")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Baseball" && memory_cards[1] == "Béisbol") || (memory_cards[0] == "Béisbol" && memory_cards[1] == "Baseball")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Golf" && memory_cards[1] == "Golf") || (memory_cards[0] == "Golf" && memory_cards[1] == "Golf")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Football" && memory_cards[1] == "Fútbol Americano") || (memory_cards[0] == "Fútbol Americano" && memory_cards[1] == "Football")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_cards[0] == "Soccer" && memory_cards[1] == "Fútbol") || (memory_cards[0] == "Fútbol" && memory_cards[1] == "Soccer")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Kárate" && memory_cards[1] == "Karate") || (memory_cards[0] == "Karate" && memory_cards[1] == "Kárate")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_cards[0] == "Tennis" && memory_cards[1] == "Tenis") || (memory_cards[0] == "Tenis" && memory_cards[1] == "Tennis")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Volleyball" && memory_cards[1] == "Voleibol") || (memory_cards[0] == "Voleibol" && memory_cards[1] == "Volleyball")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Boxing" && memory_cards[1] == "Boxeo") || (memory_cards[0] == "Boxeo" && memory_cards[1] == "Boxing")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Hunting" && memory_cards[1] == "Caza") || (memory_cards[0] == "Caza" && memory_cards[1] == "Hunting")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Rowing" && memory_cards[1] == "Remo") || (memory_cards[0] == "Remo" && memory_cards[1] == "Rowing")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_cards[0] == "Swimming" && memory_cards[1] == "Natación") || (memory_cards[0] == "Natación" && memory_cards[1] == "Swimming")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_sports.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else {
				function filpCard(){
				    var card_a = document.getElementById(card_values[0]);
				    var card_b = document.getElementById(card_values[1]);
				    card_a.style.background = '#990000';
            	    		    card_a.innerHTML = "";
				    card_b.style.background = '#990000';
            	    		    card_b.innerHTML = "";
				    memory_cards = [];
            	   		    card_values = [];
				}
				setTimeout(filpCard, 500);
			}
		}
	}
}
function Phrases(){
	cards_flipped = 0;
	var output = '';
        memory_array_phrases.memory_card_shuffle();
	for(var i = 0; i < memory_array_phrases.length; i++){
		output += '<div id="card_'+i+'" onclick="memoryPhrases(this,\''+memory_array_phrases[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}
function memoryPhrases(card,val){
	if(card.innerHTML == "" && memory_cards.length < 2){
		card.style.background = '#FFF';
		card.innerHTML = val;
		if(memory_cards.length == 0){
			memory_cards.push(val);
			card_values.push(card.id);
		} else if(memory_cards.length == 1){
			memory_cards.push(val);
			card_values.push(card.id);
			if((memory_cards[0] == "Good morning" && memory_cards[1] == "Buenos días") || (memory_cards[0] == "Buenos días" && memory_cards[1] == "Good morning")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_phrases.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Buenas noches" && memory_cards[1] == "Good evening") || (memory_cards[0] == "Good evening" && memory_cards[1] == "Buenas noches")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_phrases.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Goodbye" && memory_cards[1] == "Adiós") || (memory_cards[0] == "Adiós" && memory_cards[1] == "Goodbye")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_phrases.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Please" && memory_cards[1] == "Por favor") || (memory_cards[0] == "Por favor" && memory_cards[1] == "Please")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_phrases.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_cards[0] == "Thank you" && memory_cards[1] == "Gracías") || (memory_cards[0] == "Gracías" && memory_cards[1] == "Thank you")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_phrases.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Who?" && memory_cards[1] == "¿Quièn?") || (memory_cards[0] == "¿Quièn?" && memory_cards[1] == "Who?")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_phrases.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_cards[0] == "Why?" && memory_cards[1] == "¿Por què?") || (memory_cards[0] == "¿Por què?" && memory_cards[1] == "Why?")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_phrases.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Sorry" && memory_cards[1] == "Lo siento") || (memory_cards[0] == "Lo siento" && memory_cards[1] == "Sorry")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_phrases.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "Excuse me" && memory_cards[1] == "Perdóname") || (memory_cards[0] == "Perdóname" && memory_cards[1] == "Excuse me")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_phrases.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "How are you?" && memory_cards[1] == "¿Cómo está?") || (memory_cards[0] == "¿Cómo está?" && memory_cards[1] == "How are you?")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_phrases.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			}
			else if((memory_cards[0] == "What’s your name?" && memory_cards[1] == "¿Cómo te llamas?") || (memory_cards[0] == "¿Cómo te llamas?" && memory_cards[1] == "What’s your name?")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_phrases.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else if((memory_cards[0] == "Hello!" && memory_cards[1] == "¡Hola!") || (memory_cards[0] == "¡Hola!" && memory_cards[1] == "Hello!")){
				cards_flipped += 2;
				memory_cards = [];
            			card_values = [];
				if(cards_flipped == memory_array_phrases.length){
					alert("Congratulations! Choose a category to play again.");
					document.getElementById('memory_board').innerHTML = "";
				}
			} 
			else {
				function filpCard(){
				    var card_a = document.getElementById(card_values[0]);
				    var card_b = document.getElementById(card_values[1]);
				    card_a.style.background = '#990000';
            	    		    card_a.innerHTML = "";
				    card_b.style.background = '#990000';
            	    		    card_b.innerHTML = "";
				    memory_cards = [];
            	   		    card_values = [];
				}
				setTimeout(filpCard, 500);
			}
		}
	}
}
