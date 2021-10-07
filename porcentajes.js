//const precioOriginal = 100;
//const descuento = 12;

function precioDescuento (precioOriginal,descuento) {
    const precioDespuesDescuento = parseInt ( precioOriginal*(1-(descuento/100)))
    return precioDespuesDescuento;
}

//console.log(precioOriginal,descuento,precioDescuento(100,12));
            

function onclickBoton() {
    const inputPrecioOriginal = document.getElementById ("inputPrecioOriginal");
    const precioOriginall = parseInt ( inputPrecioOriginal.value ) ;

    const inputDescuento = document.getElementById ("InputDescuento");
    const descuento1 = parseInt ( inputDescuento.value );

    const precioDespuesDescuento = precioDescuento (precioOriginall,descuento1);
    

    //esto captura los datos de js y los insetar automaticamente en Html
    const ImprimeresultadoPrecio = document.getElementById ("imprimeresultadoPrecio");
    return ImprimeresultadoPrecio.innerHTML = "El precio con descuento son $" + precioDespuesDescuento;
    //imprimeresultadoPrecio.innerText = "El precio con descuento son $"
}   