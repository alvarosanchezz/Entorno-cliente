// Ejercicio 1: Contar cifras de un numero
function contar_cifras() {
    let numero = prompt("Introduce un numero:");
    let cifras = 0;
    if (isNaN(numero) || numero.trim() === "") {
        alert("Por favor, introduce un numero valido");
        return;
    }
    while (numero != 0) {
        numero = Math.floor(numero / 10);
        cifras++;
    }
     alert("El numero tiene " + cifras + " cifras");
}

// Ejercicio 2: Realiza un ejercicio en JavaScript que pinte por pantalla un triángulo equilátero con
// n puntos de cada lado. Estos N puntos será el tamaño del triángulo y debe ser un
// elemento indicado por el usuario. 
function pintar_triangulo() {
    let n = parseInt(prompt("Dime el tamaño del triangulo (n):"));
    for (let i = 1; i <= n; i++) {
        let espacios = ' '.repeat(n - i);
        let puntos = 'A '.repeat(i);
        console.log(espacios + puntos); 
    }
}
  
// Ejercicio 3: Realiza un programa que muestre un menú con cuatro opciones. El menú debe
// mostrarse hasta que se seleccione salir. Se irán almacenando valores y cuando
// indiquemos el tipo de operación a realizar el programa en ese momento debe
// mostrarnos el resultados y seguir funcionando.
// a. Introducir nuevo número
// b. Calcular máximo
// c. Calcular mínimo
// d. Calcular media
// e. Salir
function menu() {
    let salir = false;
    let numeros = [];

    while (!salir) {
        let opcion = prompt("Menu:\n a. Dime un numero\n b. Calcular maximo\n c. Calcular minimo\n d. Calcular media\n e. Salir\n Elige una opcion:");

        switch (opcion) {
            case 'a':
                let numero = parseFloat(prompt("Introduce un numero:"));
                if (isNaN(numero)) {
                    alert("No es un numero valido");
                    break;
                }
                numeros.push(numero);
                break;

            case 'b':
                if (numeros.length === 0) {
                    alert("No hay numeros");
                    break;
                }
                let maximo = Math.max(numeros);
                alert("El maximo es: " + maximo);
                break;

            case 'c':
                if (numeros.length === 0) {
                    alert("No hay numeros");
                    break;
                }
                let minimo = Math.min(numeros);
                alert("El minimo es: " + minimo);
                break;

            case 'd':
                if (numeros.length === 0) {
                    alert("No hay numeros");
                    break;
                }
                let media = numeros.reduce((a, b) => a + b, 0) / numeros.length;
                alert("La media es: " + media.toFixed(2));
                break;

            case 'e':
                salir = true;
                break;

            default:
                alert("Opcion no valida");
                break;
        }
    }
}
