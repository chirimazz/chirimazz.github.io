

const email = document.getElementById('email');

 const password = document.getElementById('contraseña');


 //function para validar campos email y contraseñas
function showValid() {

    if (email.value !== "") {

        email.classList.add('is-valid');
        localStorage.setItem("user", email.value);

    } else {
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');

    }
    if (password.value !== "") {

        password.classList.add('is-valid');
        
    } else {
        password.classList.remove('is-valid');
        password.classList.add('is-invalid');

    }
}

//funcion para enviar el form y redirigir al index
document.getElementById('formlogin').addEventListener('submit', function (event){
    event.preventDefault();
    event.stopPropagation();
    showValid();
   
   
    if(email.value&&password.value){

    
    window.location.href='index.html';


    

}})

