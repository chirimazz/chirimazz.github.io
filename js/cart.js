let cartElement={};
let precioPorUni=0
let subTotal=0
let costoEnvio=0


document.addEventListener("DOMContentLoaded", async function(e){
    try{
const response = await fetch(CART_INFO_URL+25801+EXT_TYPE);
const data= await response.json();
cartElement = data
console.log(cartElement)
showcartElement();
showCosto()
costoDeEnvio()
total()


}catch(error){
        console.log(error)
    }
});   
    
    

  //funcion mostrar carrito
    function showcartElement(){
         precioPorUni = cartElement.articles[0].unitCost;

        listaCart=`
        <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Nombre</th>
      <th scope="col">Costo</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Subtotal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src="${cartElement.articles[0].image}" alt="product image class="min-vw 10:10vw " width="50"></th>
      <td>${cartElement.articles[0].name}</td>
      <td>${precioPorUni}</td>
      <td><input class="form-control   col-md-6" type="number" value-1 id="cantArticulo" onchange="subtotal(),costoDeEnvio(),total()">
     
      <td id="subtotal"><span>USD</span> ${precioPorUni}</td>
    </tr>
   
  </tbody>
</table>

`

        document.getElementById('compra').innerHTML=listaCart;

    }


//funcion 

function subtotal(){
  subTotal= precioPorUni*document.getElementById("cantArticulo").value;
  document.getElementById("subtotal").innerHTML = cartElement.articles[0].currency +" "+subTotal;
  document.getElementById("sumSubtotal").innerHTML= cartElement.articles[0].currency +" "+subTotal;


}
    



//nuevo
function showCosto(){
  

  costos=`



<ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Subtotal</h6>
              <small class="text-muted"></small>
            </div>
            <span class="text-muted" id="sumSubtotal">$</span>
          </li>
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Costo de envío</h6>
              <small class="text-muted"></small>
            </div>
            <span class="text-muted"id="costo">$</span>
          </li>
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Total $</h6>
              <small class="text-muted"></small>
            </div>
           <span class="text-muted" id="total"></span>
          </li>
`

document.getElementById('costos').innerHTML= costos;
}

//funcion porcentaje costo de envio
function costoDeEnvio(){


if(document.getElementById("15%").checked){
  costoEnvio=subTotal*0.15
  document.getElementById("costo").innerHTML=cartElement.articles[0].currency +" "+ costoEnvio;



}
if(document.getElementById("7%").checked){
  costoEnvio=subTotal*0.07
  document.getElementById("costo").innerHTML=cartElement.articles[0].currency +" "+ costoEnvio;




}
if(document.getElementById("5%").checked){

  costoEnvio=subTotal*0.05
  document.getElementById("costo").innerHTML=cartElement.articles[0].currency +" "+ costoEnvio;


}
total()

 }
 
 //funcion total de la compra

 function total(){



  return document.getElementById("total").innerHTML=subTotal+costoEnvio



 }



//Ocultar input de transferencia

document.getElementById("tarjetaDeCrédito").addEventListener("change",function(){

  document.getElementById("inputNumeroDeTarjeta").disabled = false;
  document.getElementById("inputCodSeguridad").disabled = false;
  document.getElementById("inputVencimiento").disabled = false;
  document.getElementById("inputCuenta").disabled = true;

});

//ocultar inputs de tarjeta

document.getElementById("transferencia").addEventListener("change",function(){

  document.getElementById("inputNumeroDeTarjeta").disabled = true;
  document.getElementById("inputCodSeguridad").disabled = true;
  document.getElementById("inputVencimiento").disabled = true;
  document.getElementById("inputCuenta").disabled = false;

});

//funcion para validar input del modal 
function validarCampos(){

  let tarjeta=document.getElementById("tarjetaDeCrédito");
  let cuenta=document.getElementById("transferencia");
  let inputCant= document.getElementById("cantArticulo").value;
  let valid = true


  if(!tarjeta.checked&&!cuenta.checked ){
    document.getElementById("buttonFormaDePago").classList.add("link-danger");
    document.getElementById("smallSeleccionado").innerHTML="No se ha seleccionado";
    valid=false

 
  
   
   
   }else{
     document.getElementById("buttonFormaDePago").classList.remove("link-danger");
     document.getElementById("smallSeleccionado").innerHTML="Se ha seleccionado forma de pago";
}




 if(inputCant.value<=0){
  inputCant.setCustomValidity(".is-invalid")}

 
 return valid

}


function validarCostoEnvio(){


  let premium = document.getElementById("15%")
  let express = document.getElementById("7%")
  let standard = document.getElementById("5%")


  if(!premium.checked && !express.checked && !standard.checked){
    premium.setCustomValidity("#invalid-feedback")
    express.setCustomValidity("#invalid-feedback")
    standard.setCustomValidity("#invalid-feedback")
  
     valid=false
   }else{
    premium.setCustomValidity("")
    express.setCustomValidity("")
    standard.setCustomValidity("")
   }
return valid
}



  
  
  
  

//funcion para validar
function validación() {
  'use strict'

  // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
  var forms = document.querySelectorAll('.needs-validation')

  // Bucle sobre ellos y evitar el envío
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()&&!validarCampos()&&!validarCostoEnvio()){
          event.preventDefault();
          event.stopPropagation();
        }

        document.body.classList.add('was-validated');
        
        form.classList.add('was-validated');
          
      },
       false)
    })
    validarCostoEnvio()
    validarCampos()
    alerta()
};


//funcion alerta

function alerta(){
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById("btnFinalizar")

if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Finalizó su compra con éxito!', 'success')
})}}

