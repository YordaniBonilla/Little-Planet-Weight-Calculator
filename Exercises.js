/*es par o impar*/
//input: string
//output: string
//constraints: 0
//edgeCases: 0

let parOImpar = num => {
  //check if num is greater than 0 and has no remainder with modulo
  //if true log "par" else log "impar"
  return num > 0 && num % 2 === 0 ? "par" : "impar";
};

let pesoEnOtroPlaneta = (planeta, peso) => {
  //accepts planet and weight arguments
  switch (planeta.toLowerCase()) {
    //if argument is marte
    case ("mars"):
    case ("marte"):        
      //divide weight by earth gravitity * mar's gravity
      let weightOnMars = (peso / 9.81) * 3.711;
      document.getElementById("respuesta").innerHTML = weightOnMars;
      break;
    //if argument is jupiter
    case "jupiter":
      //divide weight by earth gravity * jupiter's gravity
      let weightOnJupiter = (peso / 9.81) * 24.79;
      document.getElementById("respuesta").innerHTML = weightOnJupiter;
      break;

    case "saturn":
      //divide weight by earth gravity * jupiter's gravity
      let weightOnSaturn = (peso / 9.81) * 10.44;
      document.getElementById("respuesta").innerHTML = weightOnJupiter;
      break;

      case "uranus" : 
          //divide weight by earth gravity * jupiter's gravity
          let weightOnUranus = (peso / 9.81) * 8.87;
          document.getElementById("respuesta").innerHTML = weightOnJupiter;
          break;

          case "neptune" : 
          //divide weight by earth gravity * jupiter's gravity
          let weightOnNeptuen = (peso / 9.81) * 11.15;
          document.getElementById("respuesta").innerHTML = weightOnJupiter;
          break;

          case "mercury" : 
          //divide weight by earth gravity * jupiter's gravity
          let weightOnMercury = (peso / 9.81) * 3.7;
          document.getElementById("respuesta").innerHTML = weightOnJupiter;
          break;

          case "venus" : 
          //divide weight by earth gravity * jupiter's gravity
          let weightOnVenus = (peso / 9.81) * 8.87;
          document.getElementById("respuesta").innerHTML = weightOnJupiter;
          break;
  }
};

//create a function to reset inputs value
let resetter = () => {
  document.getElementById('planet').value = null;
  document.getElementById('weight').value = null;
  document.getElementById('respuesta').innerHTML = 0;
}