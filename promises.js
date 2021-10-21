/*
ASYNC AND AWAIT 
*/ 
// setTimeout(()=>{

// console.log("Waited 1sec");

// }, 1000);
//so...setTimeout will do something after x/1000seconds



//nested Timeouts
// setTimeout(()=>{
//      console.log(3);
//      setTimeout(()=>{
//        console.log(2);
//        setTimeout(()=>{

//           console.log(1);

//        },1000);


//      },1000);




// },1000);

//addEventListener-will make a button to work
// const btn;
// btn.addEventListener('click', ()=>{

// })



// Create a promise

// const myPromise = new Promise((resolve, reject)=>{

//     const rand = 0;
//     if(rand === 0)
//     {
//     console.log("The code is renedering");
//     resolve();
    
//     }
//     else
//     reject();
  

// });
// myPromise
// .then(()=> {
//     console.log("We ve received the code");
// })
// .catch(()=>console.error("Something went wrong"));


// fetch with promises
// fetch(' https://pokeapi.co/api/v2/pokemon/ditto')
// .then((res)=> res.json())
// .then((data)=> console.log(data))
// .catch(()=>console.error("Something went wrong"));


function process(ex){
 



 return eu.then(()=>console.log(`Pierdut am fostc ${ex}`));
}









const eu = new Promise((res, rex)=>{

    console.log("Am inceput cautarea");
    const x= 2;
    if(x%10==2)
    res();
    else
    rex();
    



});



process(20);


/* ACTUALLY ASYNC/AWAIT*/



