// Consegna
// La pagina espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
// tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri,
//  il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// genero 5 numeri random da 1 a 100 e li mostro all'utente
// array vuoto per i numeri generati
var randomNumbers = [];
randomNumberPc(1, 100);
numberRange(randomNumbers, 100);
// e stampo il risultato
console.log("I numeri generati sono: " + randomNumbers);




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
