function main() {
  console.log("Que comiencen los juegos de JavaScript");

  var boton = document.getElementById('boton')

  boton.onclick = () => {
    console.log("Click")

    var display = document.getElementById('display')
    display.innerHTML = "NUEVO TEXTO"
  }
}
