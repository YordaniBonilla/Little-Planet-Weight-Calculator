/*es par o impar*/
//input: string
//output: string
//constraints: 0
//edgeCases: 0


let parOImpar = num => {
  //check if num is greater than 0 and has no remainder with modulo
  //if true log "par" else log "impar"
  return num > 0 && num % 2 === 0 ? "par" : "impar"
  
}

let pesoEnOtroPlaneta = (planeta , peso) => {
    //accepts planet and weight arguments
    switch(planeta.toLowerCase()) {
      //if argument is marte
      case "marte" :
          //divide weight by earth gravitity * mar's gravity
          let weightOnMars = (peso / 9.81) * 3.711;
          document.getElementById("respuesta").innerHTML = weightOnMars;
          break;
      //if argument is jupiter    
      case "jupiter" : 
          //divide weight by earth gravity * jupiter's gravity
          let weightOnJupiter = (peso / 9.81) * 24.79;
          document.getElementById("respuesta").innerHTML = weightOnJupiter;
    }
}

