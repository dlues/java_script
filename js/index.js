for (var i = 0; i < 2; i++) {

    var numerouno = prompt("Ingrese numero uno ");
    var numerodos = prompt("Ingrese numero dos ");
    resultado = parseFloat(numerouno) + parseFloat(numerodos)
    console.log("La suma de numero uno mas NUmero dos es  ",resultado);
}


let resulletra= '';
 i = 0;

do {
  i = i + 1;
  letra = prompt("Ingrese letra ");
  resulletra = resulletra + "-" + letra;
} while (i < 5);

console.log(resulletra);


let veces = prompt("Ingrese la cantidadd de veces a repetir ");


for ( let j = 0; j < veces; j++) {
    console.log(" Hola ", j);
}

