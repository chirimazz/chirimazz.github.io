document.addEventListener("DOMContentLoaded", function () {

    //lets inputs and buttons
    let inputEmail = document.getElementById("email");
    let firstName = document.getElementById("nombre");
    let firstLastname = document.getElementById("apellido");
    let secondName = document.getElementById("SegundoNombre");
    let secondLastname = document.getElementById("segundoApellido");
    let telphone = document.getElementById("tel");


    //elementos para guardar en el almacenamiento local   
    let user = localStorage.getItem('user');
    inputEmail.value = user
    firstLastname.value = localStorage.getItem("lastname");
    firstName.value = localStorage.getItem("name");

    secondName.value = localStorage.getItem("SecondName");
    secondLastname.value = localStorage.getItem("SecondLastname");
    telphone.value = localStorage.getItem("telphone");



    //function para validar campos y guardar en almacenamiento local Nombre y Apellido
    function valid() {


        if (firstName.value != "") {

            firstName.classList.add('is-valid');
            localStorage.setItem("name", firstName.value);
            firstName.classList.remove('is-invalid');

        } else {
            firstName.classList.remove('is-valid');
            firstName.classList.add('is-invalid');

        }
        if (firstLastname.value != "") {
            firstLastname.classList.add('is-valid');
            localStorage.setItem("lastname", firstLastname.value);
            firstLastname.classList.remove('is-invalid');

        } else {
            firstLastname.classList.remove('is-valid');
            firstLastname.classList.add('is-invalid');

        }
        if (inputEmail.value != "") {
            inputEmail.classList.add('is-valid');
            inputEmail.classList.remove('is-invalid');
        } else {

            inputEmail.classList.remove('is-valid');
            inputEmail.classList.add('is-invalid');

        }


    }

    //funcion para validar formulario y guardar los elementos secundarios en el almacenamiento local
    const form = document.getElementById("formprofile");

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();
        valid()
        localStorage.setItem("SecondName", secondName.value);
        localStorage.setItem("SecondLastname", secondLastname.value);
        localStorage.setItem("telphone", telphone.value);




    });

    //cargar imagen de perfil
    document.getElementById("imgPreview").setAttribute("src", "img/img_perfil.png");

    document.getElementById("myFileInput").addEventListener("change", function () { //esperando un cambio en el input para cargar la imagen

        let reader = new FileReader(); //lea el archivo como strings

        reader.addEventListener("load", () => { //despues de cargar la img

            localStorage.setItem("profileImage", reader.result);   // READE.RESULT convierte la imagen a una cadena en base64
        }
        )
        reader.readAsDataURL(this.files[0])//LEE EL CONENIDO DEL FILE 

        let recentImgDataUrl = localStorage.getItem("profileImage");// VARIABLE PARA MOSTRAR LUEGO LA IMG GUARDADA EN EL ALMACENAMIENTO LOCAL

        if (recentImgDataUrl) {
            document.getElementById("imgPreview").setAttribute("src", recentImgDataUrl);
        }
    })











});


