/*
Opdracht 1: Zet de uitwerking van de Fibonacci getallenreeks uit de vorige les om in een functie.
*/

//function name is fibonacci
function fibonacci(){

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
    }
    
    // print function named fibonacci
    fibonacci()



/*
Opdracht 2: Schrijf een functie countdown die van 10 - 1 aftelt. 
Geef aan de functie een jaartal parameter mee die als hij bij ‘0’ is zegt ‘Happy {jaartal}’.
*/

//function name is countDown
function countDown()
{

    // variables
    var a = 10;
    var b = 1;

    //while loop
    while (a <= 10 && a > 0)
    {  
    a = a - b

    //print outcome of a
    console.log (a)
    }

}

// print function named countDown
countDown()


// hij telt wel af maar Happy {jaartal} lukte niet.


/*
Opdracht 3:
Schrijf een functie expressie en declaratie waarmee je aantoont dat een expressie en een declaratie op een andere manier met hoisting omgaan.
*/

//ik zet hier de expressie (= "Dit is een tekst!" onder de console.log)

function ditIsEenFunctie()
{
var ditIsEenVar
console.log(ditIsEenVar)
ditIsEenVar = "Dit is een tekst!"
}

ditIsEenFunctie()

// outcome is undefined, maar als ik de expression boven console.log zet moet hij het wel doen!

function ditIsEenFunctie()
{
var ditIsEenVar
ditIsEenVar = "Dit is een tekst!"
console.log(ditIsEenVar)
}

ditIsEenFunctie()

// jaaaa nu doet hij het wel :)

