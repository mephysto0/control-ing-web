
 
 function mostrarDni(){

    const dn = document.getElementById("dni")
    dn.hidden = false
    

    const rt = document.getElementById("rut")
    rt.hidden = true
    


}


function mostrarRut(){

    const rt = document.getElementById("rut")
    rt.hidden = false
    
    const dn = document.getElementById("dni")
    dn.hidden = true


}

function mostrar(event){
    
    event.preventDefault()
    const mensaje = document.getElementById("mensaje")
    
    mensaje.innerHTML = "mensaje enviado"

}
