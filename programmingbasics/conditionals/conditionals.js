// Opdracht 1: Maak een if-else statement die de beoordeling van een student checkt.


var cijfer = 9;
// vul hierboven het cijfer in

if(cijfer < 6) {
	console.log("onvoldoende");
}

else if(cijfer >= 6 && cijfer < 7) {
	console.log("voldoende");
}

else if(cijfer >= 7 && cijfer < 9) {
	console.log("goed");
}

else {
	console.log("uitmuntend");
}



// Opdracht 2: Maak opdracht 1 nu met behulp van het switch statement.

var cijfer = 1;

switch (true){

    case (cijfer < 6):

        console.log("onvoldoende");

        break;

    case (cijfer >= 6 && cijfer < 7):

        console.log("voldoende");

        break;

    case (cijfer >= 7 && cijfer < 9):

        console.log("goed");

        break;

    case (cijfer >= 9):

        console.log("uitmuntend");

        break;

}



// Opdracht 3: Maak een if-else statement die de waarden van de variabelen checkt. 


purchasedBook = true;
job = 'teacher';
inTrain = false;

// pas de variabelen hierboven aan

if (purchasedBook == true && job == 'teacher' && inTrain == true) {
	console.log('finally i can enjoy my book!');
}
else {
	console.log('i wish i could read my book :(');
}
