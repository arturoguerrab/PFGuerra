function GuardarClave (objeto) {

    if(localStorage.getItem("articulo") == null){
        localStorage.setItem("articulo",JSON.stringify(objeto));
        return JSON.stringify(objeto);
    }
    else{
        localStorage.removeItem("articulo");
        localStorage.setItem("articulo",JSON.stringify(objeto));
        return JSON.stringify(objeto);
    }
}


const btnVelaA = document.getElementById("vela__a");
const btnVelaF = document.getElementById("vela__f");
const btnVelaC = document.getElementById("vela__c");
const btnVelaD = document.getElementById("vela__d");

btnVelaA.onclick = () =>{
    localStorage.setItem("articulo",GuardarClave(productoA));
}

btnVelaF.onclick = () =>{
    localStorage.setItem("articulo",GuardarClave(productoF));
}

btnVelaC.onclick = () =>{
    localStorage.setItem("articulo",GuardarClave(productoC));
}

btnVelaD.onclick = () =>{
    localStorage.setItem("articulo",GuardarClave(productoD));
}