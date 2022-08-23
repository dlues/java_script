
 let costo = "";
 let utilidad = "";
 let iva = "";
 let descuento = "";
 let nomProducto = "";
 let valor = "";


 function fnomProducto() {
 
    while(true){
          valor = prompt("Introduce Nombre del producto");
      if (valor === '' || valor === null) {
        alert("Ingrese Nombre Valido!");
      }
        else {    
        nomProducto = valor
        break;
      }

  } }

fnomProducto()




function fcosto() {
 

  do {
    costo = parseFloat(prompt("Introduce el costo del producto"));
    if (isNaN(costo)) {
      alert("Ingrese unicamente numeros !");
    }
  } while (isNaN(costo));
}

fcosto();



function fdescuento() {
 

    do {
      descuento = parseFloat(prompt("Introduce el % descuento del producto"));
      if (isNaN(descuento)) {
        alert("Ingrese unicamente numeros !");
      }
    } while (isNaN(descuento));
  }
  
  fdescuento();


function futilidad() {


  do {
    utilidad = parseFloat(prompt("Introduce utilidad"));
    if (isNaN(utilidad)) {
      alert("Ingrese unicamente numeros !");
    }
  } while (isNaN(utilidad));
}

futilidad();

function fiva() {


  do {
    iva = parseFloat(prompt("Introduce porcentaje de IVA"));
    if (isNaN(iva)) {
      alert("Ingrese unicamente numeros !");
    }
  } while (isNaN(iva));
}

fiva();

let preciofinal = 0;
precioFinal = ((costo - (costo * ((descuento / 100 )))) * ((utilidad / 100 )+ 1) * ((iva / 100 )+ 1));
alert("Para el Producto " + nomProducto + "Precio de venta final $" + precioFinal);
