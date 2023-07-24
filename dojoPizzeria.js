console.log ('Running main.js');

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "tradicional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("thin", "red", ["mozzarella", "feta"], ["pepperoni", "onions", "green pepper"]);
console.log(pizza3);

var pizza4 = pizzaOven("cracker", "pesto", ["parmesan", "feta"], ["capricciosa"]);
console.log(pizza4);

/* Random Pizza NOT FINISHED!!!!

var crustType = ["deep dish", "hand tossed", "thin", "cracker", "thick"];
var sauceType = ["tradicional", "marinara", "red", "pesto", "Alfredo", "Buffalo"];
var cheeses = ["mozzarella", "feta", "parmesan", "provolone", "cheddar", "gouda"];
var toppings = ["pepperoni", "onions", "mushrooms", "sausage", "black olives", "green peppers", "bacon"];

*/