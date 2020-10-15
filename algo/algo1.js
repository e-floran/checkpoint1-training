/*
 Tu dois écrire une fonction qui calcule
 et renvoie le périmètre d'un rectangle.

 Les deux côtés du rectangle sont la largeur (witdh)
 et la hauteur (height).

 La formule de calcul est :
  2 * largeur + 2 * hauteur

*/

function rectPerimeter(width, height) {
  return 2*(width+height);
}


// Exemples d'appel pour vérifier
// le bon fonctionnement de ton code
// Ne pas modifier
console.log(rectPerimeter(3, 4)); // doit afficher 14
console.log(rectPerimeter(5, 10)); // doit afficher 30
