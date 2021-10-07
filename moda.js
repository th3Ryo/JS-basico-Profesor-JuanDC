const lista = [
    1,
    1,
    1,
    2,
    2,
    3,
    4,
    4,
    
    5,
    5,
    5

]

const listaCuenta = {};

lista.map (
    function (elemento){
        if (listaCuenta [elemento]){
        
        listaCuenta [elemento] += 1 ;
        }
        else {
            listaCuenta [elemento] = 1;
        }
    }
)
//esta parte organiza de menor a mayor
const listaArray = Object.entries(listaCuenta).sort (
    function (valorAcomumlado,nuevoValor) {
        return valorAcomumlado[1] - nuevoValor [1];
        //console.log (listaArray);
    }

);
//esta parte me  dice que vaya a el array en la ultima posicion
const moda = listaArray[listaArray.length - 1]