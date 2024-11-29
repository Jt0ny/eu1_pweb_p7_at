let cedula = document.getElementById('idcedula').value;
let nombre = document.getElementById('idnombre').value;
let apellido = document.getElementById('idapellido').value;
let alerta= document.getElementById('idalerta').value
let json = document.getElementById('textoJ').value;

let texto= null;

function guardar() {

    console.log("comparacion");
    
   if(cedula !==texto && nombre !==texto && apellido !==texto){
    
    let textojson = '{'+'cedula:'+cedula+','+'nombre:'+ nombre+','+'apellido'+apellido+'}';
    json.innerText=textojson;

   } else{
    alerta.innerText="No hay datos para guardar";
   }


}



function JSON(){
  
}

