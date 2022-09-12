//realizar una funcion para traer elementos del JSON
URL=PRODUCT_INFO_URL+localStorage.getItem('prodID')+EXT_TYPE;

let producto={}
document.addEventListener("DOMContentLoaded", function(e){
    fetch(URL)
    .then(response => response.json())
    .then(data =>{
        producto = data;
        
        document.getElementById('nombreProduct').innerHTML = producto.name;
        //document.getElementById('currencyProduct').innerHTML = producto.currency;
        document.getElementById('precioProduct').innerHTML = producto.cost;
        document.getElementById('descriptionProduct').innerHTML = producto.description;
        document.getElementById('catProduct').innerHTML = producto.category;
        document.getElementById('soldCount').innerHTML = producto.soldCount;
        let agregarImagenes="";
       for(let i = 0; i <producto.images.length; i++){ 
            var img ="";
            if(producto.images[i]){
                img=producto.images[i]
            };
          agregarImagenes+=`<img src="` + img+ `" alt="product image" class="img-thumbnail col-md-4" >`

          document.getElementById("imagesProduct").innerHTML = agregarImagenes;
        
        
    


        
    }});
});
