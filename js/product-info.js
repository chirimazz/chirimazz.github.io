let producto={};
document.addEventListener("DOMContentLoaded", function(e){
    fetch(PRODUCT_INFO_URL+localStorage.getItem('prodID')+EXT_TYPE)
    .then(response => response.json())
    .then(data =>{
        producto = data;
      
       
       document.getElementById('nombreProduct').innerHTML = producto.name;
        document.getElementById('precioProduct').innerHTML = producto.cost;
        document.getElementById('descriptionProduct').innerHTML = producto.description;
        document.getElementById('catProduct').innerHTML = producto.category;
       document.getElementById('soldCount').innerHTML = producto.soldCount;
      mostrarImg();

      

      fetch(PRODUCT_INFO_COMMENTS_URL+localStorage.getItem('prodID')+EXT_TYPE)
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


