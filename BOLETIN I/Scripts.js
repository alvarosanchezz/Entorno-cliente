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