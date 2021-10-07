//cuadrado

console.group ("cuadrado");
//const ladoCuadrado = 2
//console.log ("los lados del cuadrado miden : "+ ladoCuadrado +" cm") ;
function perimetroCuadrado (ladoCuadrado) {
    return ladoCuadrado * 4
    };
    
//console.log ("el perimetro del cuadrado mide : "+ perimetroCuadrado (2) +" cm") ;
function areaCuadrado (ladoCuadrado) { 
    return ladoCuadrado * ladoCuadrado ;
    }
//console.log ("el Area del cuadrado mide : "+ areaCuadrado (2) +" cm2") 
console.groupEnd();

//triangulo
console.group("triangulo")
function perimetroTriangulo (ladoTriangulo1, ladoTriangulo2, ladoTriangulo3 )//el 3 es la base ;
    {
        return ladoTriangulo1*1 + ladoTriangulo2*1 + ladoTriangulo3*1 ;

    }

//console.log (
//    "los lados del Triangulo miden : "
//    + ladoTriangulo1 
//    + " cm, " 
//    + ladoTriangulo2 
//    + " cm, " 
//    + ladoTriangulo3 
//    + " cm,") ;
//        console.log("la altura del tringulo es"+ alturaTriangulo);

// console.log ("el perimetro del Triangulo mide : "+ perimetroTriangulo (10,10,10) +" cm") ;

function calculoAlturaTriangulo(ladoTriangulo1,ladoTriangulo3) {
    return Math.sqrt(((ladoTriangulo3 /2.)**2)-((ladoTriangulo1)**2))
}


function AreaTriangulo (ladoTriangulo3 , alturaTriangulo) {
    return (ladoTriangulo3 * alturaTriangulo)/2
}
console.groupEnd();


//circulo
console.group("circulo")
const PI = Math.PI;
function perimetroCirculo (radioCirculo) {
    return  (PI*radioCirculo*2);
}
function areaCirculo (radioCirculo) {
    return Math.pow (radioCirculo,2)*PI;
}



//console.log ( "el radio del circulo mide : " + radioCirculo + " cm, " ) 
//console.log ( "el Diametro del circulo mide : " + (radioCirculo*2) + " cm, " )
//console.log ( "el Perimetro del circulo mide : " + perimetroCirculo (3) + " cm " )
//console.log ( "el Area del circulo mide : " + areaCirculo(3) + " cm2 " )
console.groupEnd ();

//aqui html
// cuadrado
function calcularPerimetroCuadrado () {
    const input = document.getElementById('inputCuadrado');
    const value = input.value ;
    const perimetroC = perimetroCuadrado(value);
    alert(perimetroC +" cm");
}



function calcularAreaCuadrado () {
    const input = document.getElementById("inputCuadrado");
    const value = input.value ;
    const areaC = areaCuadrado (value);
    alert(areaC + " cm2");
   
}
// triangulo
function calcularPerimetroTriangulo () {
    const inputt1 = document.getElementById("inputTriangulo1");
    const valuet1 = parseInt (inputt1.value);      
    const inputt2 = document.getElementById("inputTriangulo2");
    const valuet2 = inputt2.value ;
    const inputt3 = document.getElementById("inputTriangulo3");
    const valuet3 = inputt3.value ;
    if (valuet1 == valuet2 || valuet1 == valuet3 || valuet2 == valuet3) {
        const perimetrot = perimetroTriangulo(valuet1,valuet2,valuet3);
        alert(perimetrot +" cm");
    }
    else {
        alert("no es un isoseles"); }
}

function calcularAreaTriangulo () {
    //const alturat= 0;
    const inputt1 = document.getElementById("inputTriangulo1");
    const valuet4 = inputt1.value ;
    const inputt2 = document.getElementById("inputTriangulo2");
    const valuet5 = inputt2.value ;
    const inputt3 = document.getElementById("inputTriangulo3");
    const valuet6 = inputt3.value ;
    const alturat = calculoAlturaTriangulo (valuet4,valuet6)
    
    const areat = AreaTriangulo (valuet4,alturat);
    alert(calculoAlturaTriangulo(2,3) + " cm2");
    //alert(areat + " cm2");
}
//circulo
function calcularPerimetroCirculo () {
    const input = document.getElementById("inputCirculo");
    const value = input.value ;
    const areaCi = perimetroCirculo (value);
    alert(areaCi + " cm2");
   
}

function calcularAreaCirculo () {
    const input = document.getElementById("inputCirculo");
    const value = input.value ;
    const areaCi = areaCirculo (value);
    alert(areaCi + " cm2");
   
}