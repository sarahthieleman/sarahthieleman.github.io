// Opdracht 1: Maak een while loop die kijkt of een in een reeks getallen deelbaar zijn door 4.

var x = 1;

while (x <= 30) {
    if (x % 4 == 0){
	console.log(x + " dit nummer is deelbaar door 4");
    }else {
	console.log(x + " dit nummer is niet deelbaar door 4");
    }
    x ++
}



// Opdracht 2: Schrijf een berekening van een Fibonacci reeks met while loop.


// variables
var a = 0;
var b = 1;

// while loop

while (a <= 60) 
{
    a = a + b
    b = a - b
    console.log (a)
    
}

// Opdracht 3 : Gegeven is een array[2, 4, 8, 9, 12, 13] gebruik een for-loop om al deze getallen bij elkaar op te tellen. (check info over array https://javascript.info/array). Volgende week gaan we nog uitgebreid in op array’s.
