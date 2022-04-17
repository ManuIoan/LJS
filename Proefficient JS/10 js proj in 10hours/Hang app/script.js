/** @format */

const keys = ["informatica", "web", "react", "javascript", "sql"];
one = document.querySelector(".one");
two = document.querySelector(".two");
three = document.querySelector(".three");
caps = document.querySelector(".caps");
tric = document.querySelector(".try");

    let sic = 0;
    let i = 0;
    let nume


const show = (x) => {
    let j = 0;
    let numc = "";
  
    while (j < x.length) {
      if (x[j] == "_") numc += "_ ";
      else numc += x[j];
      j += 1;
    }
    tric.innerHTML = numc;
  };




const start = ()=>{
    
     nume = "";
    


     console.log(i)
    nume += keys[i][0]
    let j = 1;
    
    
    
    while (j < keys[i].length) {
      if (keys[i][j] == keys[i][0]) nume += keys[i][j];
      else nume += "_";
      j++;
    }
    show(nume);
}











const inc = () => {
    
  let yc = document.querySelector(".mcc");
  let x = yc.value;

  let j = 1;
  let ok = 0;

  while (j < keys[i].length) {
    if ((nume[j] = "_" && keys[i][j] == x)) {
      nume = nume.substring(0, j) + x + nume.substring(j + 1);
      console.log(nume);
      ok = 1;
    }

    j++;
  }

  if (ok === 1) {
    show(nume);
    alert.innerHTML = "";
  } else {
    alert = document.querySelector(".alert");
    alert.innerHTML = "Not good";
    sic++;
    switch (sic) {
      case 1:
        one.innerHTML = "|&nbsp&nbspO";
        break;
      case 2:
        two.innerHTML = "|&nbsp&nbsp)";
        break;
      case 3:
        two.innerHTML = "|&nbsp&nbsp)|";
        break;
      case 4:
        two.innerHTML = `|&nbsp&nbsp)|(  `;
        break;
      case 5:
        three.innerHTML = "|&nbsp&nbsp)";
        break;
      case 6: {
        three.innerHTML = "|&nbsp&nbsp) ( ";
        caps.innerHTML = `<p>AI PIERDUT</p>
        <a href="index.html">Restart</a>
        `;
        break;
      }
    }
  }
};




const next = () => {
    i++
    start()
};

const chng = ()=>{
    alert = document.querySelector(".alert");
    alert.innerHTML = "";
}


start()