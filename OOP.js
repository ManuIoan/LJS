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

// const circle = {
//     radius: 1,
//     location:{
//         x: 1,
//         y: 1
//     },
//     //properties
//     draw: function()
//     {
//         console.log('draw');
//     }
//     //a method


// };

// //Factory Function

// function createCircle(radius)
// {
// return {
//     radius,
//     draw: function(){
//         console.log('draw');
//     }

// }
// }



// const circle = createCircle(1);


// // Constructor Function
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('Draw');
//     }

// }

// const another = new Circle(1);



// Primitive are copied by their value 
// Objects are copied by their reference







//adding/removing properties


// Constructor Function
// function Circle(radius){
//     this.radius = radius;

//     this.defaultLocation = {x:0, y:0};
    
//     this.computeOptimumLocation  = function(){
//         //....
//     }

//     this.draw = function(){
//         console.log('Draw');
//     }

// }

// const circle = new Circle(1);

// circle.




let x = [12342, 32223, 6555, 555, 4554];
let i =0;
while(i<=x.length)
{
   let c=x[i]
   let y=0;
   while(c)
   {
       y=y*10+c%10;
       c= Math.floor(c/10);
       

       

   }
    if(x[i]===y)
    console.log(x[i]);
    i++;
}
