const lista = [
    100,
    200,
    300,
    400,
    500
];




//para llenar datos en colosa es ([2,3,4])
function calcularMediaAritmetica(lista) {
    //let sumaLista = 0
    //for (let i =0;i< lista.length; i++) {
      //  sumaLista = sumaLista + lista[i];
    //}
    const sumaLista = lista.reduce (
        function (valorAcomulado = 0, valorNuevoElemento){
            valorAcomulado + valorNuevoElemento;
            console.log (valorAcomulado)
        }
        
    );

    const Promediolista = sumaLista / lista.length;
    return Promediolista;
}