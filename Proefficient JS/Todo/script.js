const form = document.querySelector(".miau")
const car = document.querySelector(".car")
const apv = document.querySelector(".tasks")
const but = document.querySelector(".but")




const trim = (lis)=>{
    let tag = document.createElement("div")
    tag.classList.add('task');

    let text = document.createElement("p")
    text.classList.add('scris')

    let but = document.createElement("button")
    but.classList.add('but', 'bi', 'bi-trash');
    


    tag.appendChild(text)
    text.innerHTML = lis
    tag.appendChild(text)
    tag.appendChild(but)


    console.log(tag)
    apv.appendChild(tag)
}


const start = ()=>{
    let getLocalStorage = localStorage.getItem("New Item")
    if(getLocalStorage == null)
      list = []
    else
    {
    list = JSON.parse(getLocalStorage)
     
    }
    

    list.forEach((lis)=>{
        trim(lis)
    })
}


    
form.addEventListener('click',(event)=>{
    
    const details = car.value
    list.push(details)
    
    localStorage.setItem("New Item", JSON.stringify(list))
    apv.innerHTML=""
    start()


})





start()