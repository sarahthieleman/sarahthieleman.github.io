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
Schrijf een functie expressie en declaratie waarmee je aantoont dat een expressie en een declaratie op een andere
manier met hoisting omgaan.
*/
