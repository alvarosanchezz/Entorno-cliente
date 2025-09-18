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
   