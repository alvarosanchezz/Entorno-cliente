//Ejercicio 1
function saludar(){
     var edad = prompt("¿Cuál es tu edad?");
     if(edad >= 18){
        alert("Eres mayor de edad");
     } else {
        alert("Eres menor de edad");
        }
    }

//Ejercicio 2
function pintar_ruta(){
    console.log("El acceso a la ruta C:\\usuario\\ tarda 23 segundos");
    console.log(substring);
}

//Ejercicio 3
function pintar_ruta_v2(){
    var substrng1= ("El acceso a la ruta C:\\usuario\\ tarda 23 segundos");
    var substrng2= ("El acceso a la ruta C:\\usuario\\ tarda");
    console.log(substrng1 + " " + substrng2);
}

//Ejercicio 4
function mostrar_potencia(){
   var num = 2*(Math.pow(10,-9));
   console.log(num);
}

//Ejercicio 5
function mostrar_n_distintas_bases(num){
   var numDecimal = num.toString(2);
   console.log("El numero " + num + " en binario es: " + numDecimal);
}

//Ejercicio 6
function dividir_entre_0(num){
   var num = 1/0;
   num = num +23;
   console.log(num);
}

//Ejercicio 10
function mostrar_valor(){
   let prueba = 5;
   console.log("La variable prueba tiene el valor: " + prueba);
   {
      let prueba2 = 10;
      console.log("Insisto, la variable prueba tiene el valor: " + prueba);
      console.log("La variable prueba2 en el bloque: " + prueba2);
   }
   console.log("La variable prueba2 fuera del bloque: " + prueba2);
}

//Ejercicio 11
function definir_y_mostrar_array(){
   var array =["Alberto", "Beatriz", "Carlos", "Diana", "Elena"];
   
   /* for(let i=0; i<array.length; i++){
      console.log(array[i]);
   } */
   console.table(array);
}

//Ejercicio 12
function contar_y_temporizar(){
   let valor = 0;
   let init_time = new Date();
   for(let i=1; i<=100; i++){
      valor += 10;

   }
   let end_time = new Date();
   let total_time = end_time - init_time;
   console.log("El tiempo total de ejecución es: " + total_time + " milisegundos");
   console.log("El valor final es: " + valor);
}
   
//Ejercicio 13
function mostrar_error() {
   console.error("Error!. No se ha encontrado ningún valor");
}

//Ejercicio 14
function confirmar_eliminacion() {
   if (confirm("¿Estás seguro de que deseas eliminar?")) {
      console.log("Eliminación confirmada.");
   } else {
      console.log("Eliminación cancelada.");
   }
}

//Ejercicio 15
function programa_usuario() {
   // a. Pedir el nombre de usuario
   let nombre = prompt("Introduce tu nombre de usuario:");

   // b. Preguntar si quiere abandonar el programa
   let abandonar = confirm("¿Quieres abandonar el programa?");

   // c. Alerta con la decisión
   if (abandonar) {
      alert("Has decidido abandonar el programa.");
   } else {
      alert("Has decidido continuar en el programa.");
   }

   // d. Mostrar por consola "FIN DEL PROGRAMA" en negrita, subrayado y azul
   console.log("%cFIN DEL PROGRAMA", "color: blue; font-weight: bold; text-decoration: underline;");
}

//Ejercicio 16
function felicitar_usuario() {
   let edad = prompt("¿Cuál es tu edad?");
   let nombre = prompt("¿Cuál es tu nombre?");
   let ciudad = prompt("¿En qué ciudad vives?");
   let direccion = prompt("¿Cuál es tu dirección?");
   let telefono = prompt("¿Cuál es tu número de teléfono?");
   
   let edadPotencia = Math.pow(edad, 5);

   if (edadPotencia == telefono || ciudad.toLowerCase() === "mairena del alcor") {
      alert("¡Enhorabuena, " + nombre + "!");
   }
}

//Ejercicio 17
function contar_cifras() {
   let numero = prompt("Introduce un número:");
   if (numero === null) return;
   numero = Math.abs(parseInt(numero, 10)).toString();
   console.log("El número tiene " + numero.length + " cifras.");
}

//Ejercicio 18
function clasificar_edad() {
   let edad = prompt("Introduce tu edad:");
   if (isNaN(edad) || edad < 0) {
      alert("Por favor, introduce una edad válida.");
      return;
   }
   if (edad <= 16) {
      alert("Eres un niño.");
   } else if (edad <= 25) {
      alert("Eres joven.");
   } else if (edad <= 60) {
      alert("Eres adulto.");
   } else {
      alert("Eres senior.");
   }
}