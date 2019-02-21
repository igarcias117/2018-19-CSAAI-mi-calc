function main() {
  console.log("main();");

  var calc = {
    gui: {
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
      igual: document.getElementById('igual'),
      display: document.getElementById('display')
    }
  }
  contador = 0;
  calc.gui.botons.onclick = () => {
    contador += 1
    calc.gui.display.innerHTML = contador
  }
}
