          let pesoEnOtroPlaneta = (planeta, peso) => {
          //accepts planet and weight arguments
          switch (planeta.toLowerCase()) {
          //if argument is marte / mars
          case ("mars"):
          case ("marte"):        
          //divide weight by earth gravitity * mar's gravity
          let weightOnMars = (peso / 9.81) * 3.711;
          document.getElementById("respuesta").innerHTML = weightOnMars;
          break;
          //if argument is jupiter
          case ("jupiter"):
          //divide weight by earth gravity * jupiter's gravity
          let weightOnJupiter = (peso / 9.81) * 24.79;
          document.getElementById("respuesta").innerHTML = weightOnJupiter;
          break;
          case ("saturno"):
          case ("saturn"):
       
          let weightOnSaturn = (peso / 9.81) * 10.44;
          document.getElementById("respuesta").innerHTML = weightOnSaturn;
          break;
      
          case ("urano"):
          case ("uranus"): 

          let weightOnUranus = (peso / 9.81) * 8.87;
          document.getElementById("respuesta").innerHTML = weightOnUranus;
          break;
          case ("neptuno"):
          case ("neptune"): 

          let weightOnNeptune = (peso / 9.81) * 11.15;
          document.getElementById("respuesta").innerHTML = weightOnNeptune;
          break;
          case ("mercurio"):
          case ("mercury"): 

          let weightOnMercury = (peso / 9.81) * 3.7;
          document.getElementById("respuesta").innerHTML = weightOnMercury;
          break;

          case "venus" : 

          let weightOnVenus = (peso / 9.81) * 8.87;
          document.getElementById("respuesta").innerHTML = weightOnVenus ;
          break;
            }
          };

          //create a function to reset inputs value
          let resetter = () => {
            document.getElementById('planet').value = null;
            document.getElementById('weight').value = null;
            document.getElementById('respuesta').innerHTML = 0;
           }
