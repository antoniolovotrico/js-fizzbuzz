//Scrivi un programma che stampi i numeri da 1 a 100

// for (i = 0; i < 100; i++) {
//     //console.log(i + 1);
//     document.getElementById("num").innerHTML = i + 1;
//     //multipli di 3 stampi “Fizz” al posto del numero
//     // if (i % 3 == 0) {
//     //     document.getElementById("num").innerHTML = "Fizz";
//     // }

// }
var multi3 = false;
var multi5 = false;
var multi3e5 = false;

var points = new Array(100);
for (var i = 0; i < 100; i++) {
    points[i] = i + 1;
    console.log(i);
    if (points[i] % 3 == 0) {
        multi3 = true;
     } else if (points[i] % 5 == 0) {
        multi5 = true;
     }
    
}
if (multi3) {
    console.log("Fizz");
} else if (multi5) {
    console.log("Buzz");
}

//document.getElementById("num").innerHTML = "Fizz";

//else if (points[i] % 5 == 0) {
    //     document.getElementById("num").innerHTML = "Buzz";
    // } else {
    //     document.getElementById("num").innerHTML = points;
    // }