const botonNocturno=document.getElementById("input-dark-mode")
const cuerpoHTML=document.getElementById("dark-mode")

botonNocturno.onclick=()=>{
    if (botonNocturno.checked){
        cuerpoHTML.classList.add("dark-mode")
    } else{
        cuerpoHTML.classList.remove("dark-mode")
    }
};