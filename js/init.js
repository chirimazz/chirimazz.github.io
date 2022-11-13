const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

document.addEventListener("DOMContentLoaded", function () {
//funcion para iniciar sesion y mostrar menu desplegable
let usuario = localStorage.getItem('user')
function iniciarSesion() {
    if (localStorage.getItem('user') == "") {
        document.getElementById('registrado').innerHTML = "Ingresar";
    } else {
        document.getElementById("registrado").innerHTML = `
            <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        `+ usuario + `
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
        <li><a class="dropdown-item" href= "my-profile.html">Mi perfil</a></li>
        <li><a class="dropdown-item" href="login.html" onclick = "cerrarSesion()" id="cerrarSesion">Cerrar Sesión</a></li>
      </ul>
    </div>`;
    }
 
}



iniciarSesion()

})

// funcion para cerrar sesion e eliminar elementos del almacenamiento local
function cerrarSesion() {

  localStorage.setItem("user","");
  window.location = "login.html";
  localStorage.removeItem("name")
  localStorage.removeItem("lastname")
  localStorage.removeItem("SecondLastname")
  localStorage.removeItem("SecondName")
  localStorage.removeItem("telphone")
  localStorage.removeItem("profileImage")


}
