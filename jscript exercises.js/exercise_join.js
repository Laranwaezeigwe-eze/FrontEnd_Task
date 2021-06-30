//Number9:
let myColor =["Red", "Green", "White", "Black"];
console.log('join element: ',myColor.join());
console.log('join element: ',myColor.join('+'));

//Number1:
function checkNumber(number1, number2){
    if(number1==50 || number2 ==50 || number1 + number2 == 50){
        return true;
    }
    else return false;
}
console.log('check Number: ',checkNumber(25,50));

//Number2:
function checkStatus(number1, number2){
    if(number1 > 0 || number2 > 0){
        return 'positive';
    }
    else return 'negative';
}
console.log('check integer status: ', checkStatus(4,-2));

//Number3:
function calculateArea(a,b,c){
    var s =(a+b+c)/2;
    return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}
console.log('Area of scalene triangle: ',calculateArea(5,6,7));

//Number4:
function toArray(value1, value2, value3, value4, value5){
var content = [value1,value2,value3,value4,value5];
return content;
}
console.log('Value toArray: ',toArray(10, 20, 30, 40, 50));


//Number5:
function addWithSubcharge(amount1, amount2){
    if(amount1 <=10 && amount2 <=10){
        var subcharge = 1;
        var sum = amount1 + amount2 + subcharge;
    }
    else if(amount1 >10 && amount2 >10){
        var subcharge = 2;
        var sum = amount1 + amount2 + subcharge;
    }
    return sum;
}
console.log('Amount with subcharge: ', addWithSubcharge(4,9));


// Number6:
function rotate(array){
    var temp = array[0];
    

}
