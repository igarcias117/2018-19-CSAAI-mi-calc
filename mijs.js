function main() {
  console.log("main();");

  var calc = {
    gui: {
      boton0 : document.getElementById('boton0'),
      boton1 : document.getElementById('boton1'),
      boton2 : document.getElementById('boton2'),
      boton3 : document.getElementById('boton3'),
      boton4 : document.getElementById('boton4'),
      boton5 : document.getElementById('boton5'),
      boton6 : document.getElementById('boton6'),
      boton7 : document.getElementById('boton7'),
      boton8 : document.getElementById('boton8'),
      boton9 : document.getElementById('boton9'),
      botons : document.getElementById('botons'),
      botonm :  document.getElementById('botonm'),
      botonx : document.getElementById('botonx'),
      botond : document.getElementById('botond'),
      igual : document.getElementById('igual'),
      display : document.getElementById('display')
    }
  }

  calc.gui.boton1.onclick = () => {
    calc.gui.display.innerHTML += "1";
  }

  calc.gui.boton2.onclick = () => {
    calc.gui.display.innerHTML += "2";
  }

  calc.gui.boton3.onclick = () => {
    calc.gui.display.innerHTML += "3";
  }

  calc.gui.boton4.onclick = () => {
    calc.gui.display.innerHTML += "4";
  }

  calc.gui.boton5.onclick = () => {
    calc.gui.display.innerHTML += "5";
  }

  calc.gui.boton6.onclick = () => {
    calc.gui.display.innerHTML += "6";
  }

  calc.gui.boton7.onclick = () => {
    calc.gui.display.innerHTML += "7";
  }

  calc.gui.boton8.onclick = () => {
    calc.gui.display.innerHTML += "8";
  }

  calc.gui.boton9.onclick = () => {
    calc.gui.display.innerHTML += "9";
  }

  calc.gui.boton0.onclick = () => {
    calc.gui.display.innerHTML += "0";
  }

}
