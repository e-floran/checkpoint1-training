/*
 Ecris une fonction isEven qui prend un nombre en paramètre, et renvoie true si celui-ci est pair, false sinon.
*/

function isEven(num) {
  return num%2===0 ? true : false;
}


// Exemples d'appel pour vérifier
// le bon fonctionnement de ton code
// Ne pas modifier
console.log(isEven(3)); // doit afficher false
console.log(isEven(7)); // doit afficher false
console.log(isEven(10)); // doit afficher true
console.log(isEven(42)); // doit afficher true
