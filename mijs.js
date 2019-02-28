function main() {
  console.log("main();");

  var calc = {
    operacion : "null",
    numero1 : 0,
    numero2 : 0,
    resultado : 0,
    gui : {
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
      botonr :  document.getElementById('botonr'),
      botonx : document.getElementById('botonx'),
      botond : document.getElementById('botond'),
      igual : document.getElementById('igual'),
      display : document.getElementById('display'),
      reset : document.getElementById('reset'),
      decimal : document.getElementById('decimal')
    }
  }

  function numero (numero) {
    var pos = calc.gui.display.innerHTML.indexOf("0");
    if (pos == 0 && calc.gui.display.innerHTML != "0."){
        calc.gui.display.innerHTML = calc.gui.display.innerHTML.replace("0",numero);
    }else{
        calc.gui.display.innerHTML += numero;
    }
  }

  function operaciones(){
    calc.numero1 = calc.gui.display.innerHTML;
    calc.gui.display.innerHTML = 0;
  }


  calc.gui.botons.onclick = () => {
    calc.operacion = "suma";
    operaciones();
  }

  calc.gui.botonr.onclick = () => {
    calc.operacion = "resta";
    operaciones();
  }

  calc.gui.botonx.onclick = () => {
    calc.operacion = "multiplicar";
    operaciones();
  }

  calc.gui.botond.onclick = () => {
    calc.operacion = "dividir";
    operaciones();
  }

  calc.gui.boton1.onclick = () => {
    display = numero(1);
  }

  calc.gui.boton2.onclick = () => {
    display = numero(2);
  }

  calc.gui.boton3.onclick = () => {
    display = numero(3);
  }

  calc.gui.boton4.onclick = () => {
    display = numero(4);
  }

  calc.gui.boton5.onclick = () => {
    display = numero(5);
  }

  calc.gui.boton6.onclick = () => {
    display = numero(6);
  }

  calc.gui.boton7.onclick = () => {
    display = numero(7);
  }

  calc.gui.boton8.onclick = () => {
    display = numero(8);
  }

  calc.gui.boton9.onclick = () => {
    display = numero(9);
  }

  calc.gui.boton0.onclick = () => {
    display = numero(0);
  }

  calc.gui.igual.onclick = () => {
    calc.numero2 = calc.gui.display.innerHTML;
    if(calc.operacion == "suma"){
      calc.resultado = Number(calc.numero1) + Number(calc.numero2);
    }else if(calc.operacion == "resta"){
      calc.resultado = Number(calc.numero1) - Number(calc.numero2);
    }else if(calc.operacion == "dividir"){
      calc.resultado = Number(calc.numero1) / Number(calc.numero2);
    }else if(calc.operacion == "multiplicar"){
      calc.resultado = Number(calc.numero1) * Number(calc.numero2);
    }
    calc.gui.display.innerHTML = calc.resultado;
    calc.numero1 = 0;
    calc.numero2 = 0;
    calc.resultado = 0;
    calc.operacion = "null";
  }

  calc.gui.reset.onclick = () => {
    calc.numero1 = 0;
    calc.numero2 = 0;
    calc.resultado = 0;
    calc.operacion = "null";
    calc.gui.display.innerHTML = 0;
  }

  calc.gui.decimal.onclick = () => {
    if(calc.gui.display.innerHTML == 0) {
        calc.gui.display.innerHTML = '0.';
    }else if(calc.gui.display.innerHTML.indexOf('.') == -1){
        calc.gui.display.innerHTML += '.';
    }
  }

}
