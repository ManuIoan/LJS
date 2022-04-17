let then = new Date(2022, 7, 19, 0, 0)
an = document.querySelector(".an")
luna = document.querySelector(".luna")
zile = document.querySelector(".zile")
ore = document.querySelector(".ore")
min = document.querySelector(".min")
sec = document.querySelector(".sec")



const day_m =()=>{
     // instantiate a date object
 var dt = new Date();

 // dt.getMonth() will return a month between 0 - 11
 // we add one to get to the last day of the month 
 // so that when getDate() is called it will return the last day of the month
  var month = dt.getMonth() + 1;
  var year = dt.getFullYear();
 
 // this line does the magic (in collab with the lines above)
  var daysInMonth = new Date(year, month, 0).getDate();
  return daysInMonth
}

const getTime= ()=>{
let now = new Date()

let y = then.getFullYear() - now.getFullYear()-1

let mon_now =now.getMonth()
let mon_then =then.getMonth()
let m

if(mon_now>mon_then)
{
    m= 12-mon_now+mon_then
}
else
   m= mon_then- mon_now 

let z = day_m()- now.getDate()
 
let h = 23-now.getHours()
let min2 = 59-now.getMinutes()
let sec2 = 59-now.getSeconds()



console.log(h)
if(y<0)
an.innerHTML="0";
else
an.innerHTML= y
luna.innerHTML= m
zile.innerHTML= z
ore.innerHTML= h
min.innerHTML= min2
sec.innerHTML= sec2


}
 setInterval(getTime, 1000)