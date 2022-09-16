//realizar una funcion para traer elementos del JSON
let URL=PRODUCT_INFO_URL+localStorage.getItem('prodID')+EXT_TYPE;
let comentURL=PRODUCT_INFO_COMMENTS_URL+localStorage.getItem('prodID')+EXT_TYPE

let producto={}
document.addEventListener("DOMContentLoaded", function(e){
    fetch(URL)
    .then(response => response.json())
    .then(data =>{
        producto = data;
        
        document.getElementById('nombreProduct').innerHTML = producto.name;
        document.getElementById('precioProduct').innerHTML = producto.cost;
        document.getElementById('descriptionProduct').innerHTML = producto.description;
        document.getElementById('catProduct').innerHTML = producto.category;
        document.getElementById('soldCount').innerHTML = producto.soldCount;
      mostrarImg();

      

      fetch(comentURL)
      .then(resp => resp.json())
      .then(dato => {
        let comments = dato;
        mostrarComents(comments);
      })


        
    })

});    

function mostrarImg(){
    let agregarImagenes="";
    for(let i = 0; i <producto.images.length; i++){ 
         var img ="";
         if(producto.images[i]){
             img=producto.images[i]
         };
       agregarImagenes+=`<img src="` + img+ `" alt="product image" class="img-thumbnail col-md-4" >`

       document.getElementById("imagesProduct").innerHTML = agregarImagenes;
    }
};


function mostrarComents(comments){
//let comments=[];
    for(let i = 0; i < comments.length; i++){ 
        let coment="";
        let info = comments[i];
       
        coment+=`
        <div class="list-group-item list-group-item-action">
        <div class="row">
        <div class="col">
        <p><strong>${info.user}</strong> -- ${info.dateTime}-- </p>
     
  
        <p>${info.description}</p>
        </div>
        </div>
        
    
        </div>`
    
    
    
    document.getElementById("comments").innerHTML += coment;
    
    }
};

   function stars(cantidad){
        let starHTML="";
    
        for( let i=0; 1<cantidad; i++){
            starHTML+=`<span class="fa fa-star checked"></span>`
        }
        for( let i=cantidad; i<5; i++){
            starHTML+='<span class="fa fa-star"></span>'
        }
        return starHTML;
    
    }
