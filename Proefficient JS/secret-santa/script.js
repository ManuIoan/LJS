const x= "La mult8ij  ani"
console.log(x)
const nume = [
    "Manu C",
    "Manu A",
    "Manu J",
    "Manu T"
]
//copiem numele
const aux = [...nume]
let num = []

let n=nume.length

for(let i=0;i<nume.length;i++)
{
    let x = Math.floor(Math.random() * n);
    while(nume[i]===aux[x])
    x = Math.floor(Math.random() * n);

    num.push(aux[x])

    for(let j=x;j<n-1;j++)
    aux[j]=aux[j+1]


    console.log(num)
    n--

}

for(let i=0;i<nume.length;i++)
{
console.log(nume[i]+" ii ia lui "+ num[i]+".")

}


