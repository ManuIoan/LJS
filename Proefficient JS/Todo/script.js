const form = document.querySelector(".miau")
const car = document.querySelector(".car")
const apv = document.querySelector(".tasks")


let ok = []








// if(cer)
// cer.addEventListener('click',(event)=>{
//      console.log("ceaw")
    
// })



const start = ()=>{
    let getLocalStorage = localStorage.getItem("New Item")
    if(getLocalStorage == null)
      list = []
    else
    {
    list = JSON.parse(getLocalStorage)
     
    }
    
    p=0
    let but = "";
    list.forEach((lis)=>{

       

  
  
     if(lis['ok']==1)
     {
     but =but + `<div class="task">
    <p class="scris">${lis['details']}</p>
    <button class="but bi bi-trash" onClick="delete2(${p})" type="button"></button>
    </div>`
     }
        p++
   
    })
    apv.innerHTML = but
  
}
    

const delete2 = (p)=>{
    console.log(p)
  
    list[p].ok=0
    localStorage.setItem("New Item", JSON.stringify(list))
    apv.innerHTML=""
        start()
}


    
form.addEventListener('click',(event)=>{
    
    const details = car.value
    list.push({details, ok:1})
    
    
    localStorage.setItem("New Item", JSON.stringify(list))
    apv.innerHTML=""
        start()
    


})





start()








