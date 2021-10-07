var datoslista = [] 

const numberDatos = document.getElementById("numberDatos").value;
const numberRecorte = document.getElementById("numberRecorte").value;



//funcion para recortar 
function numeroDatosRecorte (numeroDatos,recorte){
    const datosRecorte=numeroDatos*(recorte/100)
    return datosRecorte
};



function sizeLista(){
    //genera numero aleatorio y lo almancena en datolista
    for (var i=0; i<numberDatos; i++) {
        //let capturaNumeroAleatorio;
        let numberAletorio = parseInt( Math.random () * (11-0) );
        
        capturaNumeroAleatorio = datoslista.push(numberAletorio);

        
        console.log (numberAletorio); 
        console.log ("el dato de la lista en el item " + i + " es = " + datoslista[i]); 
        
    }
    
    
    ordeDatoLista = datoslista;
    //ordena datos
    
    ordeDatoLista = ordeDatoLista.sort(function(a,b) {
        return a-b
    });

    
    
    
    console.log (datoslista);
    
}

