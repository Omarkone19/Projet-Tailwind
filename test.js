//Commentaire sur une ligne
/*
Commentaire sur une ligne
*/
console.log("Info dans la console");

//Partie 1 : Les variables et types

// 1- Number
let age = 25; //Entier
let temperature = 36.6; //Flottant
console.log(typeof age);
console.log(typeof temperature);

//2- String : chaine de caractère (texte)
let name = "Saman";
console.log(typeof name);

// 3- Bollean : pour les valeurs vrai ou faux
let isOnline = true;
let isCompleted = false;
console.log(typeof isOnline);

// 4- Undefined : variable déclarée sans valeur
let notAssigned;
console.log(typeof notAssigned);

// 5- Null : pour une valeur inexistante ou vide
let emptyValue = null;
console.log(typeof emptyValue);

// 6- Object
let person = { firstname: "Alice", lastname: "Dupond" };
let numbers = [1, 2, 3, 4, 5]; //Tableau
console.log(typeof person);
console.log(typeof numbers);

// 7 - Function : variables pour les fonctions
let sayHello = function () {
  console.log("Hello !!");
};
