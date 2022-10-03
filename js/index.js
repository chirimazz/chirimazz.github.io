document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });

    iniciarSesion() /*llamar al elemento del logalSorge*/
});


let usuario = localStorage.getItem('user')
function iniciarSesion(){
    if(localStorage.getItem('user')=="Ingresar"){
        document.getElementById('registrado').innerHTML="Ingresar";
    }else{
        document.getElementById("registrado").innerHTML=`
            <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        `+usuario+`
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
        <li><a class="dropdown-item" href= "my-profile.html">Mi perfil</a></li>
        <li><a class="dropdown-item" href="login.html" onclick = "cerrarSesion()" id="cerrarSesion">Cerrar Sesión</a></li>
      </ul>
    </div>`;
    }
    
    }


function cerrarSesion(){

    localStorage.setItem("user","Ingresar");
    window.location = "login.html";
   


}