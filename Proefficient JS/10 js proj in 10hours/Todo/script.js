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
     but =but + `<div class="task" >
    <p class="scris" id="cul${p}" value="0">${lis['details']}</p>
    <button class="but bi bi-trash" onClick="delete2(${p})" type="button"></button>
    <button class="but2 bi bi-bookmark-check " onClick="change(${p})" type="button"></button>
    
    </div>`
     }
       
        

        
     
     p++
    })
    apv.innerHTML = but
for(let i =0;i<list.length;i++) 
{   

    let jrt= `cul${i}`
    jrt = String(jrt)
    
    let cul = document.getElementById(jrt)
    if(cul)
    {
    if(list[i].cul==0)
    cul.style.backgroundColor="rgb(248, 244, 244)"
    else
    cul.style.backgroundColor="rgb(127, 180, 129)"
    }
    
}

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
    list.push({details, ok:1, cul:0})
    
    
    localStorage.setItem("New Item", JSON.stringify(list))
    apv.innerHTML=""
        start()
    


})


const change = (i)=>{
    list[i].cul=1
    localStorage.setItem("New Item", JSON.stringify(list))
    apv.innerHTML=""
        start()
    
}


start()








