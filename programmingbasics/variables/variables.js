// Opdracht 1: Schrijf een simpel statement dat aangeeft of een getal even of oneven is.


a = 11 // dit getal kun je aanpassen

if (a % 2 == 0)
{console.log("even");
}
else
{console.log("odd");
}




//Opdracht 2: Schrijf een programma dat het woord 'not' verwijdert.


var proCool = "Programming is not so cool";
var removeNot = proCool.replace(" not","");

console.log(removeNot);







// Opdracht 3: Schrijf een programma dat "Ik woon in Naboo" met 1400 vergelijkt.


var Naboo = "Ik woon in Naboo";
1400 == Naboo;
(false)
// dit is niet logisch omdat woorden (strong) met cijfers vergelijken niet werkt





// Opdracht tijdens de les: Schrijf een programma dat het woord "Applied" door het woord "Mad" vervangt.


//deel 1: schrijf een string
var visitHz = "Please visit the HZ University of Applied Sciences.";
console.log(visitHz);

//deel 2: vervang het woord applied door mad
var adjective1 = "Mad";

var visitHz = "Please visit the HZ University of " + adjective1 + " Sciences.";
console.log(visitHz);
