// Consegna
// La pagina espone 5 numeri generati casualmente.
// Da li parte un timer di 10 secondi.
// Dopo 10 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
// tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri,
//  il software dice quanti e quali dei numeri da indovinare sono stati individuati.

$(document).ready(function() {
// array vuoto per i numeri generati
var randomNumbers = [];
// genero 5 numeri random da 1 a 100 e li mostro all'utente
randomNumberPc(1, 100);
numberRange(randomNumbers, 100);
// e stampo il risultato anche su HTML
console.log("I numeri generati sono: " + randomNumbers);
$('#primo').text(randomNumbers[0]);
$('#secondo').text(randomNumbers[1]);
$('#terzo').text(randomNumbers[2]);
$('#quarto').text(randomNumbers[3]);
$('#quinto').text(randomNumbers[4]);
// parte timer di 10 secondi e nascondo i numeri allo scadere
countdown();
// array vuoto numeri utente
var userNumbers = [];
// chiedo all'utente di inserire i numeri che ha memorizzato (5 volte)
for (var i = 1; i <= 5; i++) {
var numeroUtente = parseInt(prompt("Inserisci i numeri memorizzati: "));
numeroUtente.push(userNumbers);
}
// controllo che i numeri inseriti dall'utente siano corretti
if (randomNumbers.includes(numeroUtente)) {
}
});





// FUNZIONI
// numeri random
function randomNumberPc(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// prendo 5 numeri dai 100 generati random
function numberRange(array, max) {
  while (array.length < 5) {
    var numero = randomNumberPc(1, max);
    if (!array.includes(numero)) {
      array.push(numero);
    }
  }
}

// creo countdown di 10 secondi
function countdown (){
  var count = 10;
  var timer = setInterval(function () {
  // se il count è maggiore di 0
  if (count > 0) {
    // stampa il numero nell'HTML
    $('#timer').text(count);
  // altrimenti
  } else {
  // blocco il timer e nascondo tutto
    clearInterval(timer);
    $("#random").hide("slow");
  }
  count--;
  }, 1000);
};
