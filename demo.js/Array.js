// var years =[1985, 1648, 1420];
// document.write('years: ', years); 
// document.write("<br>")

// var countries =["Canada", "France", "Nigeria", "Thailand"];
// var len = countries.length;
// console.log('country length: ',len);
// console.log('country is: ',countries[len-1]);
// document.write('countries: ',countries);
// document.write("<br>")

// var mess =[53, "Canada", true, 1420];
// document.write('mess: ',mess);

// console.log('years: ',years);
// console.log('countries: ',countries);
// console.log('mess: ',mess);

// countries.push('Namibia'); 
// console.log('updated list using push:',countries);
// countries.pop();
// countries.unshift('Angola');
// console.log('updated list using unshift:',countries);
// countries.shift();
// console.log('countries are: ', countries);

//copy an Array
// var countriesCopy = countries.slice();
// console.log(countriesCopy);

let array1 =["ade", "ball", "orange"];
let array2 =["2", "few","light"];
let array3 = array1.concat (array2);
console.log('concat method: ', array3.concat());

const element =['Fire', 'Air','Water'];
console.log('join method: ', element.join('+'));

const word =['sugar','mint','tea','coffee'];
console.log('original word: ',word);
const reversed = word.reverse();
console.log('reversed word: ', reversed);

let newElement = ['union','make','complete','first'];
newElement.sort();
console.log('sort method: ',newElement);

var product={
    name : 'Apple',
    category : 'Fruits',
    price : 1.99,
    nutrients:{
        carbs: 0.96,
        fats: 0.55,
        protein: 1.05
    }
}
console.log(product.name , product.nutrients.protein);

var food={
    name: 'Apple', 
    category: 'Fruits',
    price: 50.99,
    nutrients:{
        fat: 0.2,
        carb: 13.8,
        protein: 0.3,
        calories: 52.0,
        Sugar: 10.4 
    }
}
console.log(food.name ,food.price, food.nutrients.sugar);

var food2 ={
    name: 'Orange', 
    category: 'Fruits',
    price: 20.99,
    nutrients:{
        fibre: 3.0,
        vitaminC: 70.0,
        vitaminA: 14.0,
        protein: 1.0,
        calories: 60.0,
        Sugar: 12.0 
    }
}
console.log(food2.name ,food.category, food.nutrients.calories);

var food3 ={
    name: 'Burger', 
    category: 'Sandwich',
    price: 350.00,
    nutrients:{
        fat: '14grams',
        carb: '24.0grams',
        protein: '17.0grams',
        calories: 295.0,
        energy: '197.2kcal'
    }
}

var food4 ={
    name: 'Coffee', 
    category: 'Brewed drink',
    price: 70.99,
    nutrients:{
        fat: '0.05gram',
        carb: '4.7grams',
        protein: '0.04grams',
        caffeine: '40.0mg',
        Sugar: 10.4 
    }
}
console.log(food4.name ,food4.category, food4.nutrients.caffeine);


var sub = function subtotal(price, quantity){
    return price * quantity;
    
};
var result = sub(10,2);
console.log(result);

// function calculateTax(subtotal){
//     var taxRate = 0.05;
//     var tax = subtotal * taxRate;
//     return tax;
// }
// function calculateTotal(price,quantity){
//     var subtotal = price * quantity;
//     return subtotal + calculateTax(subtotal);
// }

function calculateTotal(price, quantity){
    var subtotal = price * quantity;
    return subtotal + calculateTax(subtotal);
    function calculateTax(subtotal){
        var taxRate = 0.05;
        var tax = subtotal * taxRate;
        return tax;
    }
}
console.log(calculateTotal(12,3));
