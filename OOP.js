/*
OOP- is a programming PARADIGM centered around objects rather than functions
*/

/*
We have 4 pilars concepts in JS OOP:
1.Encapsulation(incapsulare)
2.Abstraction(abstractizare)
3.Inheritance(mostenire)
4.Polymorphism
*/

//ENCAPSULATION
// We group methods and atributes under a object


/*

//ENCAPSULATION
// We group methods and atributes under a object

let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate)
{
    return baseSalary + (overtime*rate);
}


//-->

let employee = {
baseSalary:30000,
overtime: 10,
rate:20,
getWage: function()
{
    return this.baseSalary + (this.overtime*this.rate);
}


};
 let x= employee.getWage();
 console.log(x);
 */




 // ABSTRACTION
 // We can hide some methods and properties making:-
 // 1.the UI simnpler,
 // 2. reduce the impacy of change





 //INHERITANCE
 // Helps us eliminate redundant(in plus) code.




 //Polymorphism
  //poly-many   morph-form ------> many forms
  // is a technic that



  
