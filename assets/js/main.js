//Scrivi un programma che stampi i numeri da 1 a 100

for (var i = 1; i <= 100; i++) {
 
    console.log(i);
    var elencoNumeri = document.getElementById("num").innerHTML;
     
    //multipli di 3 e 5 stampa “FizzBuzz” al posto del numero
    if (i % 15 == 0) {
        document.getElementById("num").innerHTML = elencoNumeri + "<li>fizzBuzz</li>";
    //multipli di 3 stampa “Fizz” al posto del numero
    }else if (i  % 3 == 0) {
        document.getElementById("num").innerHTML = elencoNumeri + "<li>Fizz</li>";
    //multipli di 5 stampa “Buzz” al posto del numero
    } else if (i % 5 == 0) {
        document.getElementById("num").innerHTML = elencoNumeri + "<li>Buzz</li>";
    //Stampa  numero  
    } else {
        document.getElementById("num").innerHTML = elencoNumeri + "<li>" + i  + "</li>";
    }
}
