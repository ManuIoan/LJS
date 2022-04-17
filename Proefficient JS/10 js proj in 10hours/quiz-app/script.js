/** @format */

const cioc = document.querySelector("#c");

// cioc.addEventListener("click",(event)=>{
//     event.preventDefault()
//     console.log(454)

// })
const nm = [
  {
    q: "Which one has been developed by Facebook?",
    a: "React",
    b: "Laravel",
    c: "Vue",
    d: "Angular",
  },
  {
    q: "How can you NOT get a job?",
    a: "Getting a CS diploma",
    b: "Bootcamp",
    c: "Doing nothing",
    d: "Self learning",
  },
  {
    q: "Which one is not a variable declaration used in JS?",
    a: "const",
    b: "var",
    c: "let",
    d: "int",
  },
  {
    q: "Which programming language is most used?",
    a: "Javascript",
    b: "C/C++",
    c: "Python",
    d: "Java",
  },
  {
    q: "What does DSA stand for in CS?",
    a: "Decimal Shift & Add",
    b: "Decision Support Access",
    c: "Data structures and algothms",
    d: "Development Studies Association",
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
    c1: false,
    c2: false,
    c3: true,
    c4: false,
  },
  {
    c1: false,
    c2: false,
    c3: false,
    c4: true,
  },
  {
    c1: true,
    c2: false,
    c3: false,
    c4: false,
  },
  {
    c1: false,
    c2: false,
    c3: true,
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
    p.innerHTML = `<div class="qsq">
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
p.innerHTML = `<div class="qsq">
<p>${nm[i].q}</p>
</div>`;
