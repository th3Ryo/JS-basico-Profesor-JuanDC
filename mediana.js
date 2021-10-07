function calcularMediaAritmetica(lista) {
   
    const sumaLista = lista.reduce (
        function (valorAcomulado = 0, valorNuevoElemento){
            return valorAcomulado + valorNuevoElemento;
        }

    );

    const Promediolista = sumaLista / lista.length;
    return Promediolista;
}

const lista = [
    1000,
    200,
    3,
    //400,
    1000000

];
const listaOrdenada = lista.sort((a,b)=>a-b)

const mitadLista = parseInt (listaOrdenada.length / 2)

function esPar(numero) {
    if (numero % 2 === 0 ){
        return true
    }
    //else if (numero === 0) {
      //  return false
    //}
    else {
        return false
    }

}

let mediana;

if (esPar(lista.length)){
    const element1 = listaOrdenada [mitadLista-1], element2 = listaOrdenada [mitadLista];
    const promedio1y2 = calcularMediaAritmetica ([element1, element2]);
    mediana = promedio1y2
}

else {
    mediana = lista [mitadLista];
}

