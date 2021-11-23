/** @format */

const cioc = document.querySelector("#c");

// cioc.addEventListener("click",(event)=>{
//     event.preventDefault()
//     console.log(454)

// })
const nm = [
  {
    q: "Ce faci?",
    a: "Caut comori",
    b: "Beau",
    c: "Mananc",
    d: "Dorm",
  },
  {
    q: "Ce fffaci?",
    a: "Caut fdcomori",
    b: "Beadddfu",
    c: "Mananc",
    d: "Dorfm",
  },
  {
    q: "Ce fafsdfci?",
    a: "Caut fsdfcomori",
    b: "Beafdsfu",
    c: "Manadffsdnc",
    d: "Dorm",
  },
  {
    q: "Ce fdsfsfaci?",
    a: "Cautsdfs comori",
    b: "Beafdsfu",
    c: "Mandsfsdanc",
    d: "Dorfdsfm",
  },
  {
    q: "Ce fdaci?",
    a: "Caut comori",
    b: "Beafdu",
    c: "Mananc",
    d: "Dordm",
  },
];

const corect = [
  {
    c1: true,
    c2: false,
    c3: false,
    c4: false,
  },
  {
    c1: true,
    c2: false,
    c3: false,
    c4: false,
  },
  {
    c1: true,
    c2: false,
    c3: false,
    c4: false,
  },
  {
    c1: true,
    c2: false,
    c3: false,
    c4: false,
  },
  {
    c1: true,
    c2: false,
    c3: false,
    c4: false,
  },
  
];

let gus = 0;
let i = 0;
const change = () => {
    
  
    const a1 = document.getElementById("a1");
    const a2 = document.getElementById("a2");
    const a3 = document.getElementById("a3");
    const a4 = document.getElementById("a4");
    console.log(a1.checked)
    console.log(corect[i].c1);
    if (
      a1.checked == corect[i].c1 &&
      a2.checked == corect[i].c2 &&
      a3.checked == corect[i].c3 &&
      a4.checked == corect[i].c4
    )
      gus++;


      
    const mang = document.getElementById("mang");
    const p = document.querySelector(".q");

    i++;
    console.log(i)
    if (i < nm.length) {
    mang.innerHTML = `<div class="a">
<input type="checkbox" name="" id="a1" />
<p>${nm[i].a} </p>
</div>
<div class="a">
<input type="checkbox" name="" id="a2" />
<p>${nm[i].b} </p>
</div>

<div class="a">
<input type="checkbox" name="" id="a3" />
<p>${nm[i].c} </p>
</div>

<div class="a">
<input type="checkbox" name="" id="a4" />
<p>${nm[i].d} </p>
</div>
<div class="b">
          <button type="submit" onclick="change()" id="c">Trimite</button>
        </div>`;
    p.innerHTML = `<div class="q">
<p>${nm[i].q}</p>
</div>`;

    

    console.log("ce faci");
  } else {
    const big = document.querySelector(".big");
    big.innerHTML = `<p>Ai ghicit ${gus} intrebari</p>`;
  }
};






const mang = document.getElementById("mang");
const p = document.querySelector(".q");

mang.innerHTML = `<div class="a">
<input type="checkbox" name="" id="a1" />
<p>${nm[i].a} </p>
</div>
<div class="a">
<input type="checkbox" name="" id="a2" />
<p>${nm[i].b} </p>
</div>

<div class="a">
<input type="checkbox" name="" id="a3" />
<p>${nm[i].c} </p>
</div>

<div class="a">
<input type="checkbox" name="" id="a4" />
<p>${nm[i].d} </p>
</div>
<div class="b">
          <button type="submit" onclick="change()" id="c">Trimite</button>
        </div>`;
p.innerHTML = `<div class="q">
<p>${nm[i].q}</p>
</div>`;
