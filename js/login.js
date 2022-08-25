

function showAlertError() {
    alert("Los campos email y contraseña deben estar completos");
}


document.getElementById('confirmado').addEventListener('click', function (){
    const email= document.getElementById('email').value;

    const contraseña= document.getElementById('contraseña').value;

    if(email && contraseña){

        window.location.href='index.html';
        localStorage.setItem('user',email);/*guarda el elemento email en el localStorge*/
        
    }else{

        showAlertError()}

});

