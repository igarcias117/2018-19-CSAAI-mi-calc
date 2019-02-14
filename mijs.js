function main() {
  console.log("Que comiencen los juegos de JavaScript");

  boton = document.getElementById('boton')
  boton.onclick = () => {
    console.log("clickk")

    display = document.getElementById('display')
    display.innerHTML = "Texto Nuevo"
  }

}
