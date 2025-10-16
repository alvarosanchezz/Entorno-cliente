//Ejercicio 1
function factorial_tradicional() {
   let numero = parseInt(prompt("Introduce un numero para calcular su factorial:"));
   if (isNaN(numero) || numero < 0) {
      alert("Por favor, introduce un numero valido");
      
   } else {
      let factorial = 1;
      for(let i = 1; i <= numero; i++) {
         factorial *= i;
      }
      alert("El factorial de " + numero + " es: " + factorial);
   }
}

//Ejercicio 2
function transformar_dias_horas() {
   let dias = Number(prompt("Introduce el numero de dias:"));
   if (isNaN(dias) || dias < 0) {
      console.log("Por favor, introduce un numero valido de dias");
      return;
   }
    let horas = dias * 24;
    let minutos = horas * 60;
    let segundos = minutos * 60;
   alert(dias + " dias son " + horas + " horas, " + minutos + " minutos y " + segundos + " segundos");
   
}

//Ejercicio 3
function resolver_ecuacion_segundo_grado() {
   let a = parseFloat(prompt("Introduce el numero a (no puede ser 0):"));
   let b = parseFloat(prompt("Introduce el numero b:"));
   let c = parseFloat(prompt("Introduce el numero c:"));

   if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
      alert("Por favor, introduce valores validos. 'a' no puede ser 0.");
      return;
   }

   let ecuacion = b * b - 4 * a * c;
   if (ecuacion  < 0) {
      alert("La ecuacion no tiene solucion");
   } else {
      let raiz1 = (-b + Math.sqrt(ecuacion)) / (2 * a);
      let raiz2 = (-b - Math.sqrt(ecuacion)) / (2 * a);
      alert("Las soluciones son: " + raiz1 + " y " + raiz2);
   }
}

//Ejercicio 4


//Ejercicio 5


//PRUEBA PRACTICA
function mostrar_menu() {
   let nombre = prompt("Introduce tu nombre:");
   let edad = parseInt(prompt("Introduce tu edad:"));
   let mostrarMenu = true;
   while(mostrarMenu) {
      let opcion = prompt("1. Iniciar juego\n2. Lanzar dados\n3. Mostrar estadisticas de juego\n4. Salir\nElige una opcion:");
      switch(opcion) {
         case "1":
            iniciar_juego();
            break;
         case "2":
            lanzar_dados();
            break;
         case "3":
            mostrar_estadisticas();
            break;
         case "4":
            mostrarMenu = false;
            break;
         default:
            alert("Opcion no valida");
      }
   }
}

function iniciar_juego() {
   
}

function lanzar_dados() {
   const max_tiros = 3;
   let tiradasExtra = 0;
   do {
   let dado1 = Math.floor(Math.random() * 6) + 1;
   let dado2 = Math.floor(Math.random() * 6) + 1;
      let resultado = dado1 + dado2;
      alert("Has sacado un " + dado1 + " y un " + dado2 + ". El resultado es " + resultado);
      resultado += resultado;
      tiradasExtra++;
      if (dado1 === dado2 && tiradasExtra < max_tiros) {
         continue;
      }
      break;
   } while (dado1 === dado2 && tiradasExtra < max_tiros);
}

function mostrar_estadisticas() {
  
}


function salir() {

}
