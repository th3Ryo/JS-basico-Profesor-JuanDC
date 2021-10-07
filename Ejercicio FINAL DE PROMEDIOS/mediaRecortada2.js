var inputTamanoLista = document.getElementById("inputTamanoLista").value;
var inputRecorteLista = document.getElementById("inputRecorteLista").value;
var datoslista = [] , verLista = [] /*, ordeDatoLista = [] */ ;
var respaldo = []
function onclickBoton () {
    verLista = sizeLista ();
    //genera numero aleatorio y lo almancena
    function sizeLista(){
        
        for (var i=0; i<inputTamanoLista; i++) {
            //let capturaNumeroAleatorio;
            let numberAletorio = parseInt( Math.random () * (11-0) );
            
            capturaNumeroAleatorio = datoslista.push(numberAletorio);
    
            
            console.log (numberAletorio); 
            console.log ("el dato de la lista en el item " + i + " es = " + datoslista[i]);
            respaldo[i]=datoslista[i];
            
        }
        //respaldo = datoslista; 
    }
    
    //ordena los datos del array
    datoslista = datoslista.sort(function(a,b) {return a-b})
    
    
    
    

 //funcion para recortar 
    function numeroDatosRecorte (numeroDatos,recorte){
    const datosRecorte=numeroDatos*(recorte/100)
    return datosRecorte
    

};
    //hallar el valor del % de recorte
    const valorRecorte = numeroDatosRecorte (inputTamanoLista,inputRecorteLista)
    //ajustar el array
    function ajusteLista (lista,valorderecorte) {
        
        for (var i=0;i<valorderecorte;i++){
            lista.pop();
            lista.shift();
        }
    }
        /*datoslista.pop();
        datoslista.shift()*/

            //finalLista = datoslista.shift();

        ajusteLista (datoslista,valorRecorte);
    console.log (datoslista);

    const mostrarNavegador = document.getElementById("mostrarNavegador");
    return mostrarNavegador.innerHTML ="entro "+ "<br></br>" + datoslista +"<br></br>" + respaldo;


}