let producto={};
document.addEventListener("DOMContentLoaded", function(e){
    fetch(PRODUCT_INFO_URL+localStorage.getItem('prodID')+EXT_TYPE)
    .then(response => response.json())
    .then(data =>{
        producto = data;
    showProduct();
      mostrarImg();
      productRelated();

      

      fetch(PRODUCT_INFO_COMMENTS_URL+localStorage.getItem('prodID')+EXT_TYPE)
      .then(resp => resp.json())
      .then(dato => {
        let comments = dato;
       mostrarComents(comments);
       
      })


        
    })

});    

function showProduct(){
    let infoProduct=""
infoProduct+=`<div>

<h2>${producto.name}</h2>
<h5 class="mb-1"><strong>Precio</strong>
        <p >USD - <span>${producto.cost}</span></p>
      </h5>
      <h5 class="mb-1"><strong>Descripción</strong>
        <p >${producto.description}</p>
      </h5>
      <h5 class="mb-1"><strong>Categoría</strong>
        <p >${producto.category}</p>
      </h5>
      <h5 class="mb-1"><strong>Cantidad de Vendidos</strong>
        <p>${producto.soldCount}</p>
      </h5>
      <h5 class="mb-1"><strong>Imágenes ilustrativas</strong></h5>


</div>`
document.getElementById('nombreProduct').innerHTML = infoProduct;


}

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

    for(let i = 0; i < comments.length; i++){ 
        let coment="";
        let info = comments[i];
       
        coment+=`
        <div class=" list-group-item list-group-item-action">
        <div class="row">
        <div class="col">
        <p><strong>${info.user}</strong> -- ${info.dateTime} -${stars(info.score)}</p>
     
  
        <p>${info.description}</p>
        </div>
        </div>
        
    
        </div>`
    
    
    
    document.getElementById("comments").innerHTML += coment;
    
    }
};


   function stars(cantidad){
        let star="";
    
        for( let i=0; i<cantidad; i++){
            star+=`<span class="fa fa-star checked"></span>`
        }
        for( let i=cantidad; i<5; i++){
            star+='<span class="fa fa-star"></span>'
        }
        return star;
    
    }

    
    function setProdIDrelated(id) {
        
        localStorage.setItem("prodID",id);
        window.location = "product-info.html"
    }

    function productRelated(){
        let agregarProduct="";
        for(let i = 0; i <producto.relatedProducts.length; i++){ 
             var related ="";
             if(producto.images[i]){
                 related=producto.relatedProducts[i]
             };
           agregarProduct+=`
           <div onclick="setProdIDrelated(${related.id})"class=" list-group-item list-group-item-action">
           <div class="mb-1">
           <h4>${related.name}</h4>
           
           <div class="col-3">
                    <img src="` + related.image + `" alt="product image" class="img-thumbnail">
                </div>
            </div>
            </div>`
                
    
           document.getElementById("productRelated").innerHTML = agregarProduct;
        }
    };


