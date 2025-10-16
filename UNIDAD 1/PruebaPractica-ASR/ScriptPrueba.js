const max_tiradas_extra = 3
let jugador = null
let edad = null
let iniciado = false
let inicioJuego = null
let tiradas = 0
let sumaTotal = 0
let maxPuntos = null
let minPuntos = null

function iniciarJuego() {
  console.log("Iniciando juego")
  jugador = prompt("Introduce tu nombre:")
  edad = prompt("Introduce tu edad:")
  if (!jugador || !edad) {
    alert("Datos inválidos")
    return
  }
  iniciado = true
  inicioJuego = new Date()
  alert("Bienvenido " + jugador)
}

function lanzarDados() {
  console.log("Lanazando dados")
  if (!iniciado) {
    alert("Primero debes iniciar el juego")
    return
  }

  let total = 0
  let extra = 0
  let repetir = true

  while (repetir) {
    let dado1 = Math.floor(Math.random() * 6) + 1
    let dado2 = Math.floor(Math.random() * 6) + 1
    console.log('El jugador ' + jugador + ' ha obtenido ' + dado1 + ' y ' + dado2)
    tiradas += 2
    total += dado1 + dado2
    if (dado1 === dado2) {
      extra++
      if (extra > max_tiradas_extra) {
        total = 0
        alert("Has sacado dobles mas de 3 veces. Pierdes el turno.")
        break
      }
      alert("Has sacado dobles, tiras otra vez.")
    } else {
      repetir = false
    }
  }

  if (maxPuntos === null || total > maxPuntos) maxPuntos = total
  if (minPuntos === null || total < minPuntos) minPuntos = total
  sumaTotal += total

  alert('Resultado del turno: ' + total)
}

function mostrarEstadisticas() {
  console.log("Mostrando estadísticas")
  if (!iniciado) {
    alert("Primero debes iniciar juego")
    return
  }
  let media = tiradas > 0 ? (sumaTotal / (tiradas / 2)).toFixed(2) : 0
  alert(
    "Veces que se ha tirado un dado: " + tiradas +
    "\nMedia de puntos por tirada: " + media +
    "\nMáximo: " + (maxPuntos ?? 0) +
    "\nMínimo: " + (minPuntos ?? 0)
  )
}

function salir() {
  console.log("Finalizando juego")
  if (!inicioJuego) {
    alert("No has iniciado juego.")
    return
  }
  let fin = new Date()
  let minutos = Math.floor((fin - inicioJuego) / 60000)
  alert("Fin del juego. Has estado jugando " + minutos + " minutos.")
}
