const character = String.fromCharCode(67)
const num = document.getElementById("num")
const err = document.getElementById("err")
const ura = document.querySelector(".all")
let pass=""
//33->125
console.log(character)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const doIT = ()=>{
  if(num.value<0 || num.value>20)
  err.innerHTML="INTRE 0 si 20 PLOEASERER"
  else{
      for(i=0;i<num.value;i++)
    pass += String.fromCharCode(getRandomInt(33, 125))
    ura.innerHTML= pass
  }

}



console.log(getRandomInt(33,125))